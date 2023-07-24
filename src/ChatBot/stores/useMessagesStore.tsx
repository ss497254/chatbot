import { create } from "zustand";
import { IMessage } from "../types/IMessage";
import { generateBotMessage } from "../utils/generateBotMessage";

interface MessageStoreState {
  messages: IMessage[];
  isLoading: boolean;
  addMessage: (x: Omit<IMessage, "timestamp">) => void;
  clearMessages: () => void;
}

const startMessage: IMessage = {
  content: "👋 Hi! I am Chatbot, ask me anything about Chatbase!",
  author: "Bot",
  timestamp: new Date().getTime(),
};

export const useMessageStore = create<MessageStoreState>()((set, get) => ({
  messages: [startMessage],
  isLoading: false,
  addMessage: (t) => {
    if (t.author === "User")
      setTimeout(() => {
        set({ isLoading: false });
        generateBotMessage(t.content);
      }, 1500);

    set(({ messages }) => {
      const newMessage = { ...t, timestamp: new Date().getTime() };

      return {
        isLoading: t.author === "User",
        messages: [...messages, newMessage],
      };
    });
  },
  clearMessages: () => {
    set({ messages: [startMessage] });
  },
}));
