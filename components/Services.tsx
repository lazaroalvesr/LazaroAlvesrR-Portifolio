"use client";
import { motion } from "framer-motion";

const services = [
  { num: "01", title: "Loja Virtual",       desc: "Catálogo completo, orçamento integrado e botão de WhatsApp para fechar vendas no canal que seu cliente já usa.", chips: ["Next.js", "E-commerce", "WhatsApp"] },
  { num: "02", title: "Site Institucional", desc: "Presença digital que representa sua marca com profissionalismo e aparece nas primeiras posições do Google.",         chips: ["SEO técnico", "React", "Performance"] },
  { num: "03", title: "Landing Page",       desc: "Página focada em converter visitantes em leads — estrutura estratégica e design que transmite confiança.",           chips: ["Conversão", "Analytics", "CRO"] },
];

export default function Services() {
  return (
    <section id="servicos" className="border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mb-12 sm:mb-14">
          <div className="flex items-center gap-2.5 text-amber text-[11px] tracking-[0.2em] uppercase mb-5">
            <span className="w-[18px] h-px bg-amber" /> O que eu faço
          </div>
          <h2 className="font-display font-bold tracking-[-0.035em] leading-[1.0] mb-4"
            style={{ fontSize: "clamp(30px, 5vw, 60px)" }}>
            Soluções digitais<br />para o seu <em className="not-italic text-amber font-normal">negócio</em>
          </h2>
          <p className="text-mid text-[15px] sm:text-[16px] max-w-[460px] leading-[1.75]">
            Cada projeto entregue com foco em performance, SEO e conversão — não só visual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
          {services.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="bg-bg2 px-7 sm:px-8 py-10 sm:py-11 lg:py-12 group transition-colors hover:bg-bg3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="text-[11px] font-bold tracking-[0.16em] text-dim mb-5">{s.num}</div>
              <h3 className="font-display font-bold text-[19px] sm:text-[21px] lg:text-[22px] tracking-tight mb-3">{s.title}</h3>
              <p className="text-mid text-[14px] sm:text-[15px] leading-[1.75]">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {s.chips.map((c) => (
                  <span key={c} className="text-[11px] text-gray-400 border border-white/12 px-2.5 py-1 rounded-sm group-hover:border-amber/20 group-hover:text-gray-50 transition-colors">{c}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
