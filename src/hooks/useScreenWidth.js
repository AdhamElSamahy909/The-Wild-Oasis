import { useEffect, useState } from "react";

export function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    document.addEventListener("reset", handleResize);

    return () => {
      document.removeEventListener("reset", handleResize);
    };
  }, []);

  return screenWidth;
}
