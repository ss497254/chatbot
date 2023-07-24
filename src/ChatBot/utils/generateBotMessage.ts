import { useMessageStore } from "../stores/useMessagesStore";

export const generateBotMessage = (content: string) => {
  useMessageStore.getState().addMessage({ content, author: "Bot" });
};
