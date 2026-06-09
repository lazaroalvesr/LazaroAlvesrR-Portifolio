"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  { num: "01", type: "Loja Virtual", title: "Arruda Bombas Hidráulicas", desc: "Plataforma de vendas com catálogo completo e SEO técnico que coloca a empresa nas primeiras buscas do Google.", result: "40% de aumento nos pedidos de orçamento", chips: ["Next.js", "SEO", "TypeScript"], href: "https://arrudabombas.com.br/", img: "/img/arruda-bombas-hidraulicas.png" },
  { num: "02", type: "Site Institucional", title: "MG Net Salinas", desc: "Site para provedor de fibra óptica em Salinas e região, com apresentação de planos, área de autoatendimento para clientes e integração com WhatsApp.", result: "Presença digital profissional para a região", chips: ["Next.js", "React", "SEO"], href: "https://site-mgnetsal.vercel.app/", img: "/img/mg-net-sal.png" },
  { num: "03", type: "Site Institucional", title: "Minas Online Telecom", desc: "Site para provedor de fibra óptica com planos em destaque e área de autoatendimento para o assinante.", result: "Redução nas chamadas de suporte", chips: ["React", "Next.js", "UX"], href: "https://www.minasonlinetelecom.com.br/", img: "/img/minas-online-telecom.png" },
  { num: "04", type: "Site Institucional", title: "UAI+ Operadora", desc: "Site para operadora de telefonia com apresentação estratégica dos planos e foco em conversão.", result: "Apresentação estratégica de planos", chips: ["Next.js", "Conversão"], href: "https://www.uaimais.com.br/", img: "/img/uai+-telefonia-movel.png" },
];

export default function Projects() {
  return (
    <section id="projetos" className="border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">

        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2.5 text-amber text-[11px] tracking-[0.2em] uppercase mb-5">
              <span className="w-[18px] h-px bg-amber" /> Portfólio
            </div>
            <h2 className="font-display font-bold tracking-[-0.035em] leading-[1.0]"
              style={{ fontSize: "clamp(30px, 5vw, 60px)" }}>
              Projetos<br /><em className="not-italic text-amber font-normal">realizados</em>
            </h2>
          </div>
          <p className="text-mid text-[14px] sm:text-[15px] sm:text-right max-w-[260px] leading-[1.75]">
            Resultados reais e mensuráveis em cada entrega.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {projects.map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="group bg-bg2 rounded-lg overflow-hidden border border-white/7 transition-all duration-300 hover:border-amber/25 hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">

              <div className="flex flex-col lg:grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px]">

                <div className="lg:hidden relative w-full h-[200px] sm:h-[260px] bg-bg3 overflow-hidden">
                  <Image src={p.img} alt={p.title} fill
                    className="object-cover object-top opacity-75 saturate-[0.8] transition-all duration-500 group-hover:opacity-100 group-hover:saturate-100 group-hover:scale-[1.03]"
                    sizes="100vw"
                  />
                </div>

                <div className="p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col gap-4">
                  <div>
                    <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-amber mb-3">
                      {p.num} — {p.type}
                    </div>
                    <h3 className="font-display font-bold tracking-tight leading-[1.1] mb-3"
                      style={{ fontSize: "clamp(18px, 2.5vw, 32px)" }}>
                      {p.title}
                    </h3>
                    <p className="text-mid text-[14px] sm:text-[15px] leading-[1.75] max-w-[480px] mb-4">{p.desc}</p>
                    <div className="inline-flex items-center gap-2 bg-amber/8 border border-amber/20 text-amber2 text-[12px] sm:text-[13px] font-medium px-3 py-2 rounded mb-4">
                      ↑ {p.result}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {p.chips.map((c) => (
                        <span key={c} className="text-[11px] text-gray-300 border border-white/12 px-2.5 py-1 rounded-sm">{c}</span>
                      ))}
                    </div>
                  </div>
                  <a href={p.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-display font-bold text-[13px] sm:text-[14px] border-b border-white/12 pb-[3px] w-fit transition-all hover:gap-3.5 hover:text-amber hover:border-amber mt-1">
                    Ver ao vivo <span>→</span>
                  </a>
                </div>

                <div className="hidden lg:block relative bg-bg3 overflow-hidden">
                  <Image src={p.img} alt={p.title} fill
                    className="object-cover object-top opacity-75 saturate-[0.8] transition-all duration-500 group-hover:opacity-100 group-hover:saturate-100 group-hover:scale-[1.03]"
                    sizes="420px"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
