import React from "react";

interface HomePageProps extends React.PropsWithChildren {}

const HomePage: React.FC<HomePageProps> = () => {
  return <div className="bg-red-100 text-4xl font-semibold">Chatbot</div>;
};

export default HomePage;
