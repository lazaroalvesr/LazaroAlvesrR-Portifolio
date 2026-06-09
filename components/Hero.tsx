"use client";
import { motion } from "framer-motion";

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  return (
    <section className="relative lg:min-h-screen lg:mt-0 md:mt-32 flex flex-col justify-end overflow-hidden border-b border-white/10">
      <motion.div
        className="absolute top-[-80px] right-[-60px] w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,148,58,0.08) 0%, transparent 65%)" }}
        animate={{ y: [0, -40, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[80px] left-[-80px] w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,148,58,0.05) 0%, transparent 65%)" }}
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 w-full pt-28 sm:pt-32 lg:pt-36 md:pt-0 pb-0">
        <motion.div {...up(0.2)} className="flex items-center gap-3 text-amber text-[11px] sm:text-[12px] font-medium tracking-[0.18em] uppercase mb-6 sm:mb-7">
          <span className="w-6 h-px bg-amber" />
          Desenvolvedor Web
          <span className="w-[7px] h-[7px] rounded-full bg-amber animate-pulse" />
        </motion.div>

        <h1 className="font-display font-bold leading-[0.92] tracking-[-0.04em]"
          style={{ fontSize: "clamp(48px, 8vw, 116px)" }}>
          <motion.span {...up(0.3)}  className="block text-white">Sites que</motion.span>
          <motion.span {...up(0.42)} className="block text-stroke">vendem</motion.span>
          <motion.span {...up(0.54)} className="block text-amber">de verdade.</motion.span>
        </h1>

        <motion.div {...up(0.68)}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8 mt-10 sm:mt-12 pt-8 sm:pt-10 pb-12 sm:pb-14 lg:pb-16 border-t border-white/7">
          <p className="text-mid text-[15px] sm:text-[16px] max-w-[460px] sm:max-w-[400px] leading-[1.8]">
            React e Next.js — sites rápidos, no topo do Google e que convertem visitantes em clientes reais para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="#contato"
              className="bg-amber text-bg font-display font-bold text-[14px] sm:text-[15px] px-7 py-4 rounded transition-all text-center hover:bg-amber2 hover:-translate-y-0.5 shadow-[0_0_32px_rgba(232,148,58,0.18)]">
              Solicitar Orçamento
            </a>
            <a href="#projetos"
              className="border border-white/12 text-white font-display font-bold text-[14px] sm:text-[15px] px-7 py-4 rounded transition-all text-center hover:bg-bg2 hover:border-white/25">
              Ver Projetos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
