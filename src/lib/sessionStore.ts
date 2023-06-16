import { writable } from 'svelte/store';
import type { User } from "firebase/auth";
import { auth } from './firebaseConfig'; // use Firebase v9 modular syntax

interface Session {
  user: User | null;
}

const createSessionStore = () => {
  const { subscribe, set, update } = writable<Session>({ user: null });

  return {
    subscribe,
    set,
    update,
  };
};

export const session = createSessionStore();
