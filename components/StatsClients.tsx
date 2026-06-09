"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const dur   = 1400;
    const start = performance.now();
    const step  = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { value: 12,  suffix: "+", label: "Projetos entregues" },
  { value: 40,  suffix: "%", label: "Aumento médio em leads" },
  { value: 3,   suffix: "+", label: "Empresas ativas" },
  { value: 100, suffix: "%", label: "Responsivo e otimizado" },
];

const clients = ["Arruda Bombas Hidráulicas", "UAI+ Operadora", "Minas Online Telecom", "MG NET Salinas"];

export default function StatsClients() {
  return (
    <>
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/7">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 first:pl-0 last:pr-0"
              >
                <div className="font-display font-bold leading-none tracking-tight mb-1.5 text-[32px] sm:text-[40px] lg:text-[48px]"
                  style={{ background: "linear-gradient(135deg,#F0EDEA 0%,#F5B565 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  <Counter target={s.value} />
                  <sup className="text-[0.45em] align-super">{s.suffix}</sup>
                </div>
                <div className="text-[12px] sm:text-[13px] text-gray-300 leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-6 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-10">
          <span className="text-[11px] tracking-[0.18em] uppercase text-gray-300 shrink-0">Empresas atendidas</span>
          <div className="flex flex-wrap gap-5 sm:gap-8 lg:gap-12">
            {clients.map((c) => (
              <span key={c} className="font-display font-bold text-[13px] sm:text-[14px] lg:text-[15px] text-dim transition-colors hover:text-white cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
