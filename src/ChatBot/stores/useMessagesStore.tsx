import { create } from "zustand";
import { IMessage } from "../types/IMessage";

interface MessageStoreState {
  messages: IMessage[];
  add: (x: Omit<IMessage, "timestamp">) => void;
  clear: () => void;
}

export const useMessageStore = create<MessageStoreState>()((set, get) => ({
  messages: [],
  add: (t) =>
    set(({ messages }) => {
      const newMessage = { ...t, timestamp: new Date().getTime() };
      return { messages: [...messages, newMessage] };
    }),
  clear: () => {
    set({ messages: [] });
  },
}));
