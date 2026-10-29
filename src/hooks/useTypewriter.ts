import { useEffect, useState } from "react";

export function useTypewriter(words: string[], speed = 65, pause = 1500): string {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!del && txt === w) t = setTimeout(() => setDel(true), pause);
    else if (del && txt === "") {
      setDel(false);
      setI((v) => v + 1);
    } else t = setTimeout(() => setTxt(w.slice(0, txt.length + (del ? -1 : 1))), del ? 30 : speed);
    return () => clearTimeout(t);
  }, [txt, del, i, words, speed, pause]);
  return txt;
}
