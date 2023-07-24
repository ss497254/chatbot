import React, { useEffect, useState } from "react";

interface TypeMessageProps extends React.PropsWithChildren {
  words: string[];
}

export const TypeMessage: React.FC<TypeMessageProps> = ({ words }) => {
  const [message, setMessage] = useState([] as string[]);

  useEffect(() => {
    setTimeout(() => {
      if (message.length !== words.length)
        setMessage([...message, words[message.length]]);
    }, 100);
  }, [message]);

  return <>{message.join(" ")} </>;
};
