// Exercício 4 — zustand: Store global de hábitos com seletores
// Exercício 5 (Parte A) & Atividade Aplicada (Requisito 2) — Persistência com middleware persist + AsyncStorage
// Onde: src/store/use-habit-store.ts

import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type Habit = {
  id: string;
  title: string;
  done: boolean;
};

type HabitStore = {
  habits: Habit[];
  addHabit: (title: string) => void;
  toggleHabit: (id: string) => void;
  removeHabit: (id: string) => void;
};

export const useHabitStore = create<HabitStore>()(
  persist(
    (set) => ({
      habits: [
        { id: '1', title: 'Beber 2L de água', done: false },
        { id: '2', title: 'Ler 15 páginas', done: true },
      ],
      addHabit: (title) => {
        const normalizedTitle = title.trim();

        if (!normalizedTitle) return;

        set((state) => ({
          habits: [
            ...state.habits,
            { id: Date.now().toString(), title: normalizedTitle, done: false },
          ],
        }));
      },
      toggleHabit: (id) => {
        set((state) => ({
          habits: state.habits.map((habit) =>
            habit.id === id ? { ...habit, done: !habit.done } : habit,
          ),
        }));
      },
      removeHabit: (id) => {
        set((state) => ({
          habits: state.habits.filter((habit) => habit.id !== id),
        }));
      },
    }),
    {
      name: '@habits:store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
