import { useRouter } from 'expo-router';
import { requestPermissionsAsync } from 'expo-notifications/build/NotificationPermissions';
import {
  addNotificationReceivedListener,
  addNotificationResponseReceivedListener,
} from 'expo-notifications/build/NotificationsEmitter';
import { SchedulableTriggerInputTypes } from 'expo-notifications/build/Notifications.types';
import { scheduleNotificationAsync } from 'expo-notifications/build/scheduleNotificationAsync';
import { useEffect, useState } from 'react';
import { AppState, Pressable, StyleSheet, Text, View } from 'react-native';

export function TelaNotificacoes() {
  const router = useRouter();
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    // 1. Pedir permissão
    async function requestPermission() {
      const { status } = await requestPermissionsAsync();
      setPermissionGranted(status === 'granted');
    }

    requestPermission();

    const navegarParaDetalhe = (habitId: string) => {
      setTimeout(() => {
        router.push({
          pathname: '/habit/[id]',
          params: { id: habitId },
        });
      }, 300);
    };

    // 2. Registrar listeners
    const receivedListener = addNotificationReceivedListener((notification) => {
      console.log('Notificação recebida', notification);
    });

    const responseListener = addNotificationResponseReceivedListener((response) => {
      console.log('Notificação tocada', response);
      const habitId = String(response?.notification?.request?.content?.data?.habitId ?? '5');

      if (AppState.currentState === 'active') {
        navegarParaDetalhe(habitId);
      } else {
        const appStateSub = AppState.addEventListener('change', (nextState) => {
          if (nextState === 'active') {
            appStateSub.remove();
            navegarParaDetalhe(habitId);
          }
        });
      }
    });

    return () => {
      receivedListener.remove();
      responseListener.remove();
    };
  }, [router]);

  const handleSchedule = async () => {
    if (!permissionGranted) {
      console.log('Permissão não concedida');
      return;
    }

    // 3. Agendar notificação para daqui a 5 segundos
    await scheduleNotificationAsync({
      content: {
        title: 'Hora do hábito!',
        body: 'Não esqueça de sua rotina.',
        data: { habitId: '5' },
      },
      trigger: {
        type: SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 5,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleSchedule} style={styles.botao}>
        <Text style={styles.textoBotao}>Agendar notificação em 5s</Text>
      </Pressable>
    </View>
  );
}

export default TelaNotificacoes;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  botao: { backgroundColor: '#f26522', paddingVertical: 14, paddingHorizontal: 24, borderRadius: 10 },
  textoBotao: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
