import { create } from "zustand";
import { IMessage } from "../types/IMessage";
import { generateBotMessage } from "../utils/generateBotMessage";
import { MessageStoreName, getDBInstance } from "../lib/MessagesDB";

interface MessageStoreState {
  messages: IMessage[];
  isLoading: boolean;
  syncMessages: () => void;
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
  syncMessages: async () => {
    set({ isLoading: true });
    const db = await getDBInstance();

    const messages = await db.getAll(MessageStoreName);
    set({ messages: [startMessage, ...messages], isLoading: false });
  },
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

    getDBInstance()
      .then((db) => db.add(MessageStoreName, newMessage))
      .catch(console.warn);

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

    getDBInstance()
      .then((db) => db.put(MessageStoreName, t))
      .catch(console.warn);

    return t;
  },
  clearMessages: () => {
    set({ messages: [startMessage] });

    getDBInstance()
      .then((db) => db.clear(MessageStoreName))
      .catch(console.warn);
  },
}));
