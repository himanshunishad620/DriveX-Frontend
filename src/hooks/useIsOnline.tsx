import { useEffect, useState } from "react";

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState<boolean>(window.navigator.onLine);
  useEffect(() => {
    const handleOnlineToggle = () => {
      setIsOnline(true);
    };
    const handleOfflineToggle = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnlineToggle);
    window.addEventListener("offline", handleOfflineToggle);
    return () => {
      window.removeEventListener("online", handleOnlineToggle);
      window.removeEventListener("offline", handleOfflineToggle);
    };
  });
  return { isOnline };
};

export default useIsOnline;
