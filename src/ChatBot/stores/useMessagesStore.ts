import { create } from "zustand";
import { IMessage } from "../types/IMessage";
import { generateBotMessage } from "../utils/generateBotMessage";

interface MessageStoreState {
  messages: IMessage[];
  isLoading: boolean;
  addMessage: (x: Omit<IMessage, "timestamp">) => IMessage;
  updateMessage: (x: IMessage) => IMessage;
  clearMessages: () => void;
}

const startMessage: IMessage = {
  content:
    "👋 Hi! I am Chatbot, a virtual assistant designed to provide information and answer questions about anything.",
  author: "Bot",
  timestamp: new Date().getTime(),
};

export const useMessageStore = create<MessageStoreState>()((set, get) => ({
  messages: [startMessage],
  isLoading: false,
  addMessage: (m) => {
    if (m.author === "User")
      setTimeout(() => {
        set({ isLoading: false });
        generateBotMessage(m.content);
      }, 1500);

    const newMessage = { ...m, timestamp: new Date().getTime() };
    set(({ messages }) => {
      return {
        isLoading: m.author === "User",
        messages: [...messages, newMessage],
      };
    });

    return newMessage;
  },
  updateMessage: (t) => {
    set(({ messages }) => {
      return {
        messages: messages.map((x) => {
          if (x.timestamp !== t.timestamp) return x;

          return t;
        }),
      };
    });

    return t;
  },
  clearMessages: () => {
    set({ messages: [startMessage] });
  },
}));
