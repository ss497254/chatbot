import React from "react";

interface HomePageProps extends React.PropsWithChildren {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="bg-gray-50 font-semibold h-full">
      <h1 className="text-center my-20">Chatbot</h1>
    </div>
  );
};

export default HomePage;
