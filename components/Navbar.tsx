"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  ["Serviços", "#servicos"],
  ["Projetos", "#projetos"],
  ["Sobre",    "#sobre"],
  ["Contato",  "#contato"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-bg/95 backdrop-blur-md border-b border-white/7" : "border-b border-transparent"
      }`}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-[18px] font-bold text-white tracking-tight z-10">
            Lázaro<span className="text-amber">.</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8 list-none">
            {links.slice(0, 3).map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-gray-300 text-[13px] tracking-widest uppercase transition-colors hover:text-white">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contato" className="bg-amber text-bg text-[13px] font-semibold tracking-wide uppercase px-5 py-2.5 rounded transition-all hover:bg-amber2 hover:-translate-y-px">
                Orçamento
              </a>
            </li>
          </ul>

          <button onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-10"
            aria-label="Menu">
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 bg-bg flex flex-col justify-center px-8 sm:px-16 transition-all duration-300 lg:hidden ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <ul className="flex flex-col gap-1 list-none">
          {links.map(([label, href], i) => (
            <li key={label}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <a href={href} onClick={close}
                className="block font-display font-bold text-[36px] sm:text-[48px] tracking-tight leading-[1.15] text-white/60 hover:text-white transition-colors py-2">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-dim text-[13px] mb-4 tracking-wide">Vamos trabalhar juntos?</p>
          <a href="#contato" onClick={close}
            className="inline-block bg-amber text-bg font-display font-bold text-[15px] px-8 py-4 rounded transition-all hover:bg-amber2">
            Solicitar Orçamento →
          </a>
        </div>
      </div>
    </>
  );
}
