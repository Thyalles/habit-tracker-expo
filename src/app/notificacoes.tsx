import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
  }),
});

export default function NotificationScreen() {
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    async function requestPermission() {
      const { status } = await Notifications.requestPermissionsAsync();
      setPermissionGranted(status === 'granted');
    }

    requestPermission();

    const receivedSubscription = Notifications.addNotificationReceivedListener(() => {
      console.log('Notificação recebida');
    });

    const responseSubscription = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('Notificação tocada');
      const id = String(response.notification.request.content.data?.habitId ?? '5');
      console.log('Abrindo detalhe do hábito', id);
    });

    return () => {
      receivedSubscription.remove();
      responseSubscription.remove();
    };
  }, []);

  const handleSchedule = async () => {
    if (!permissionGranted) {
      console.log('Permissão não concedida');
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Lembrete do hábito',
        body: 'Seu hábito precisa ser revisado agora.',
        data: { habitId: '5' },
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>
      <Pressable onPress={handleSchedule} style={styles.button}>
        <Text style={styles.buttonText}>Agendar notificação em 5s</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
