import { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Pressable, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';

import { BotaoAcao } from '../components/botao-acao';
import { ItemHabito } from '../components/item-habito';
import { ListaVazia } from '../components/lista-vazia';
import { HABITOS } from '../data/habitos';
import { agrupar, filtrarPorTitulo } from '../lib/agrupar';
import { cores, espaco, tipografia } from '../theme';
import type { Habito } from '../types/habito';
import { TelaRegistrarHabito } from './tela-registrar-habito';

function Cabecalho({ busca, onBuscaChange }: { busca: string; onBuscaChange: (busca: string) => void; }) {
  return (
    <TextInput
      style={styles.busca}
      placeholder="Buscar hábito"
      value={busca}
      onChangeText={onBuscaChange}
    />
  );
}

export function TelaHabitos() {
  const router = useRouter();
  const [habitos, setHabitos] = useState<Habito[]>(HABITOS);
  const [busca, setBusca] = useState('');
  const [atualizando, setAtualizando] = useState(false);
  const [registrando, setRegistrando] = useState(false);

  function alternar(id: string) {
    setHabitos((prev) =>
      prev.map((h) =>
        h.id === id
          ? { ...h, status: h.status === 'pendente' ? 'concluido' : 'pendente' }
          : h
      )
    );
  }

  function remover(id: string) {
    setHabitos((prev) => prev.filter((h) => h.id !== id));
  }

  function recarregar() {
    setAtualizando(true);

    // Recarregar volta ao mock, mas NÃO joga fora o que o usuário registrou: um hábito
    // que custou duas permissões não pode sumir no primeiro puxão de tela. Os
    // registrados são os que não estão no mock — os do topo continuam no topo.
    setHabitos((prev) => {
      const idsDoMock = new Set(HABITOS.map((h) => h.id));
      const registrados = prev.filter((h) => !idsDoMock.has(h.id));
      return [...registrados, ...HABITOS];
    });

    setBusca('');
    setAtualizando(false);
  }

  function adicionar(novo: Habito) {
    // Array NOVO, como na Aula 4 — nunca `push` no anterior. E ele entra no TOPO: no fim
    // da lista o usuário teria que rolar para ver o resultado do que acabou de fazer.
    setHabitos((prev) => [novo, ...prev]);
    // A busca antiga pode esconder justamente o hábito recém-criado.
    setBusca('');
    setRegistrando(false);
  }

  const secoes = agrupar(filtrarPorTitulo(habitos, busca));

  if (registrando) {
    return (
      <TelaRegistrarHabito onSalvar={adicionar} onCancelar={() => setRegistrando(false)} />
    );
  }

  return (
    <View style={styles.tela}>
      <SectionList
        sections={secoes}
        renderItem={({ item }) => (
          <ItemHabito
            habito={item}
            onAlternar={alternar}
            onRemover={remover}
          />
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.cabecalhoSecao}>{section.title}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
        ListEmptyComponent={() => <ListaVazia primeiroAcesso={false} onLimparBusca={recarregar} />}
        stickySectionHeadersEnabled
        refreshing={atualizando}
        onRefresh={recarregar}
        ListHeaderComponent={<Cabecalho busca={busca} onBuscaChange={setBusca} />}
        contentContainerStyle={styles.conteudo}
      />

      <View style={styles.rodape}>
        <BotaoAcao rotulo="Novo hábito" onPressionar={() => setRegistrando(true)} />

        <Pressable
          onPress={() => router.push('/registrar-foto')}
          style={({ pressed }) => [styles.botaoRota, pressed && styles.botaoPressionado]}
        >
          <Text style={styles.textoBotaoRota}>Registrar foto do hábito</Text>
        </Pressable>

        <Link href="/galeria" asChild>
          <Pressable style={({ pressed }) => [styles.botaoSecundario, pressed && styles.botaoPressionado]}>
            <Text style={styles.textoBotaoSecundario}>Galeria do hábito</Text>
          </Pressable>
        </Link>

        <Link href="/sobre" style={styles.linkSobre}>
          Sobre o app
        </Link>
      </View>
    </View>
  );
}

export default TelaHabitos;

const styles = StyleSheet.create({
  tela: { flex: 1, backgroundColor: cores.fundo, borderRadius: espaco.lg },
  conteudo: { padding: espaco.md, paddingBottom: espaco.lg },
  busca: {
    borderWidth: 1,
    borderColor: cores.textoFraco,
    borderRadius: espaco.sm,
    padding: espaco.sm,
    marginBottom: espaco.sm,
    backgroundColor: cores.cartao,
    fontSize: 16,
  },
  cabecalhoSecao: {
    ...tipografia.legenda,
    fontWeight: '700',
    textTransform: 'uppercase',
    backgroundColor: cores.fundo,
    paddingVertical: espaco.sm,
  },
  separador: { height: espaco.sm },
  rodape: { padding: espaco.md, gap: espaco.sm },
  botaoRota: {
    backgroundColor: '#f26522',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotaoRota: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  botaoSecundario: {
    borderWidth: 2,
    borderColor: '#f26522',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotaoSecundario: {
    color: '#f26522',
    fontWeight: '700',
    fontSize: 16,
  },
  botaoPressionado: {
    opacity: 0.7,
  },
  linkSobre: {
    fontSize: 16,
    color: '#f26522',
    textDecorationLine: 'underline',
    textAlign: 'center',
    paddingVertical: 4,
  },
});
