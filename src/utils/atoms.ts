import { atom, useAtom } from "jotai";

type User = {
  id: string;
  username: string;
  email: string;
};

export type UserFound = User | undefined | null;

const userAtom = atom<UserFound>(undefined);

export const useUser = () => useAtom(userAtom);
