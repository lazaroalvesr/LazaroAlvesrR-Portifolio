"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [anoCriacao, setAnoCriacao] = useState("");

  useEffect(() => {
    const obterAnoAtual = () => {
      const data = new Date();
      return data.getFullYear().toString();
    };

    setAnoCriacao(obterAnoAtual());
  }, []);

  return (
    <footer className="border-t border-white/10">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 py-7 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[12px] sm:text-[13px] text-gray-500 text-center sm:text-left">
          © {anoCriacao} Lázaro Alves R — Todos os direitos reservados.
        </p>
        <div className="flex gap-3">
          <Link href={"https://www.instagram.com/alvesrsites/"}
            className="w-[38px] h-[38px] flex items-center justify-center text-mid text-[13px] font-bold font-display transition-all hover:border-amber/40 hover:text-amber hover:-translate-y-0.5">
            <Image
              src="/icon/instagramIcon.svg"
              alt="2"
              width={25}
              height={25}
            />
          </Link>
          <Link href={"https://www.linkedin.com/in/lázaro-alves-r/"}
            className="w-[38px] h-[38px] rounded bg-bg2 border border-white/12 flex items-center justify-center text-mid text-[13px] font-bold font-display transition-all hover:border-amber/40 hover:text-amber hover:-translate-y-0.5"
          >
            <Image
              src="/icon/linkedinIcon.svg"
              alt="2"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
