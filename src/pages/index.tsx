import React from "react";
import { ChatBot } from "src/components/ChatBot";

interface HomePageProps extends React.PropsWithChildren {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="bg-gray-50 h-full">
      <h1 className="text-center py-10">Chatbot</h1>
      <ChatBot />
    </div>
  );
};

export default HomePage;
