import React from "react";
import { useMessageStore } from "../stores/useMessagesStore";

interface MessageSuggestionsProps extends React.PropsWithChildren {}

const messageSuggestions = [
  "What is chatbot?",
  "How to use this chat?",
  "How do I add data to my chatbot?",
];

export const MessageSuggestions: React.FC<MessageSuggestionsProps> = () => {
  const { addMessage } = useMessageStore();

  return (
    <div className="flex flex-wrap gap-2 p-3">
      {messageSuggestions.map((message, idx) => (
        <button
          className="border rounded-full text-sm py-2 px-3 bg-zinc-100"
          onClick={() => addMessage({ content: message, author: "User" })}
          key={idx}
        >
          {message}
        </button>
      ))}
    </div>
  );
};
