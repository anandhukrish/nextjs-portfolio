import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  const media = window.matchMedia(query);

  if (media.matches !== matches) {
    setMatches(media.matches);
  }
  useEffect(() => {
    const listner = () => setMatches(media.matches);

    media.addEventListener("change", listner);

    return () => media.removeEventListener("change", listner);
  }, [media]);

  return matches;
}
