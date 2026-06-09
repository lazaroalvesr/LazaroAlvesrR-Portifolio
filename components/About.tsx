"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "SEO Técnico", "Figma", "Git"];

export default function About() {
  return (
    <section id="sobre" className="border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-10 sm:gap-12 lg:gap-20 items-start">

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-[400px] lg:max-w-none mx-auto lg:mx-0">
            <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] rounded-md overflow-hidden">
              <Image
                src="/img/foto.webp"
                alt="Lázaro Alves R — Desenvolvedor Web em Minas Gerais"
                fill priority
                className="object-cover saturate-[0.7] contrast-[1.05] transition-all duration-500 hover:saturate-90"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 400px, 420px"
              />
            </div>
            <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 bg-bg/92 border border-white/12 backdrop-blur-md px-4 sm:px-5 py-3 sm:py-4 rounded-md flex items-center justify-between">
              <div>
                <div className="text-[11px] text-gray-300 mb-0.5">Localização</div>
                <div className="font-display font-bold text-[16px] sm:text-[18px] tracking-tight">Minas Gerais, BR</div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-amber animate-pulse" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="pt-0 lg:pt-2">
            <div className="flex items-center gap-2.5 text-amber text-[11px] tracking-[0.2em] uppercase mb-5">
              <span className="w-[18px] h-px bg-amber" /> Sobre mim
            </div>
            <h2 className="font-display font-bold tracking-[-0.035em] leading-[1.0] mb-5 sm:mb-6"
              style={{ fontSize: "clamp(30px, 5vw, 60px)" }}>
              Olá,<br />sou o <em className="not-italic text-amber font-normal">Lázaro</em>
            </h2>
            <p className="text-mid text-[15px] sm:text-[16px] leading-[1.85] mb-4">
              Sou desenvolvedor web especializado em <strong className="text-white font-medium">tirar projetos do papel</strong> e transformá-los em sites que geram resultados reais.
            </p>
            <p className="text-mid text-[15px] sm:text-[16px] leading-[1.85] mb-4">
              Trabalho com <strong className="text-white font-medium">React e Next.js</strong> — entrego sites rápidos, otimizados para o Google e com visual que transmite credibilidade desde o primeiro acesso.
            </p>
            <p className="text-mid text-[15px] sm:text-[16px] leading-[1.85]">
              Acredito que todo negócio merece uma presença digital à altura. Além do desenvolvimento, sou apaixonado por games e tecnologia.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5 mt-7 sm:mt-8 pt-7 sm:pt-8 border-t border-white/7">
              {skills.map((sk) => (
                <span key={sk} className="text-[12px] sm:text-[13px] text-gray-300 border border-white/12 px-3 sm:px-4 py-2 rounded cursor-default transition-all hover:border-amber/40 hover:text-amber hover:bg-amber/5">
                  {sk}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
