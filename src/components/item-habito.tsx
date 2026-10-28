import { Pressable, StyleSheet, Text } from 'react-native';

import { CardHabito } from './CardHabito';
import { cores, espaco, tipografia } from '../theme';
import type { Habito } from '../types/habito';
import { rotuloDoStatus } from '../utils/status-habito';

export type ItemHabitoProps = {
  habito: Habito;
  onAlternar: (id: string) => void;
  onRemover: (id: string) => void;
  onAbrirDetalhe?: (id: string) => void;
};

// O leitor de tela não enxerga a miniatura nem lê a coordenada formatada: o rótulo
// precisa dizer, em palavras, o que a tela mostra em pixels.
function descrever(habito: Habito): string {
  const partes = [
    habito.titulo,
    `status ${rotuloDoStatus(habito.status)}`,
    `${habito.streakDias} dias`,
    habito.fotoUri ? 'com foto' : 'sem foto',
    habito.local ? `registrado com localização, precisão de ${Math.round(habito.local.precisaoMetros)} metros` : 'sem localização',
  ];

  return partes.join(', ');
}

export function ItemHabito({ habito, onAlternar, onRemover, onAbrirDetalhe }: ItemHabitoProps) {
  return (
    <Pressable
      onPress={() => {
        if (onAbrirDetalhe) {
          onAbrirDetalhe(habito.id);
          return;
        }

        onAlternar(habito.id);
      }}
      onLongPress={() => onRemover(habito.id)}
      accessibilityRole="button"
      accessibilityLabel={descrever(habito)}
      hitSlop={{
        top: espaco.md,
        bottom: espaco.md,
        left: espaco.md,
        right: espaco.md,
      }}
      unstable_pressDelay={300}
      style={({ pressed }) => [
        styles.item,
        pressed && styles.itemPressionado,
      ]}
    >
      {/* TODO 5.23: o <CardHabito> agora aceita `fotoUri`, `local` e `recyclingKey`.
          Repasse os três a partir do `habito`.
          O `recyclingKey` não é opcional por preguiça: sem ele, a célula reciclada pela
          SectionList mostra a foto do item ANTERIOR durante a rolagem — o usuário vê a
          foto errada ao lado do título certo.
          Pense também se o `accessibilityLabel` ainda está completo depois disso. */}

      {/* O `recyclingKey` não é opcional por preguiça: sem ele a célula reciclada pela
          SectionList mostra a foto do item ANTERIOR durante a rolagem, e o usuário vê a
          foto errada ao lado do título certo. */}
      <CardHabito
        titulo={habito.titulo}
        categoria={habito.categoria}
        status={habito.status}
        onPress={() => {
          if (onAbrirDetalhe) {
            onAbrirDetalhe(habito.id);
            return;
          }

          onAlternar(habito.id);
        }}
        destacado={habito.destacado}
        fotoUri={habito.fotoUri}
        local={habito.local}
        recyclingKey={habito.id}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: cores.cartao,
    borderRadius: espaco.sm,
    padding: espaco.md,
    gap: espaco.xs,
  },
  itemPressionado: {
    opacity: 0.9,
    transform: [{ scale: 0.95 }],
  },
  titulo: tipografia.corpo,
  legenda: tipografia.legenda,
});
