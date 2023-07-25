import { useMessageStore } from "../stores/useMessagesStore";

export const generateBotMessage = (content: string) => {
  const { addMessage, updateMessage } = useMessageStore.getState();
  const words = content.split(" ");

  const { timestamp } = addMessage({ content: "", author: "Bot" });

  let i = 0;
  const fn = () => {
    updateMessage({
      author: "Bot",
      content: words.slice(0, i).join(" "),
      timestamp,
    });

    i++;
    setTimeout(fn, 150);
  };

  fn();
};
