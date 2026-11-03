// Exercício 5 (Parte B) — Persistência local em disco com expo-sqlite
// Onde: src/services/focus-db.ts

import * as SQLite from 'expo-sqlite';

export type FocusLog = {
  id: number;
  habitId: string;
  seconds: number;
};

export async function openFocusDb() {
  const db = await SQLite.openDatabaseAsync('habits.db');
  // TODO Ex 5.2: Criar tabela focus_logs (id, habitId, seconds) com db.execAsync
  return db;
}

export async function saveFocusSession(habitId: string, seconds: number) {
  const db = await openFocusDb();
  // TODO Ex 5.3: Inserir registro com db.runAsync e placeholders (?, ?)
  void db;
  void habitId;
  void seconds;
}

export async function listFocusSessions(): Promise<FocusLog[]> {
  const db = await openFocusDb();
  // TODO Ex 5.4: Buscar todos os registros com db.getAllAsync<FocusLog>
  void db;
  return [];
}
