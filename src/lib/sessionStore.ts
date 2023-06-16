import { writable } from 'svelte/store';
import type { User } from "firebase/auth";

interface Session {
  user: User | null;
  isLogout: boolean;
}

const createSessionStore = () => {
  const { subscribe, set, update } = writable<Session>({ user: null, isLogout: false });

  return {
    subscribe,
    set,
    update,
  };
};

export const session = createSessionStore();
