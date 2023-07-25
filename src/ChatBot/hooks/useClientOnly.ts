import { useEffect, useState } from "react";
import { useMessageStore } from "../stores/useMessagesStore";

export const useClientOnly = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { syncMessages } = useMessageStore();

  useEffect(() => {
    syncMessages();
    setIsMounted(true);
  }, []);

  return isMounted;
};
