import { create } from "zustand";
import { IMessage } from "../types/IMessage";

interface MessageStoreState {
  messages: IMessage[];
  addMessage: (x: Omit<IMessage, "timestamp">) => void;
  clearMessages: () => void;
}

export const useMessageStore = create<MessageStoreState>()((set, get) => ({
  messages: [
    {
      content: "👋 Hi! I am Chatbot, ask me anything about Chatbase!",
      author: "Bot",
      timestamp: new Date().getTime(),
    },
  ],
  addMessage: (t) =>
    set(({ messages }) => {
      const newMessage = { ...t, timestamp: new Date().getTime() };
      return { messages: [...messages, newMessage] };
    }),
  clearMessages: () => {
    set({ messages: [] });
  },
}));
