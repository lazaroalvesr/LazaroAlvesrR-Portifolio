"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WHATSAPP = "5533999267947";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [tipo, setTipo] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleWhatsApp = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const text = `Olá Lázaro! Vim pelo seu portfólio.

*Nome:* ${nome}
*Contato:* ${contato}
*Tipo de projeto:* ${tipo || "Não informado"}
*Sobre o negócio:* ${mensagem}`;

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return (
    <section id="contato" className="border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 sm:gap-14 lg:gap-24 items-start">

          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <div className="flex items-center gap-2.5 text-amber text-[11px] tracking-[0.2em] uppercase mb-5">
              <span className="w-[18px] h-px bg-amber" /> Contato
            </div>
            <h2 className="font-display font-bold tracking-[-0.035em] leading-[1.0] mb-4 sm:mb-5"
              style={{ fontSize: "clamp(30px, 5vw, 60px)" }}>
              Vamos<br />conversar?
            </h2>
            <p className="text-mid text-[15px] sm:text-[16px] leading-[1.8] mb-10 sm:mb-12 max-w-[420px]">
              Orçamento gratuito e sem compromisso. Respondo em até 24 horas.
            </p>
            <div className="flex flex-col gap-5 sm:gap-6 border-t border-white/7 pt-7 sm:pt-8">
              {[
                { icon: "📍", label: "Localização", value: "Minas Gerais, Brasil", href: null },
                { icon: "💼", label: "LinkedIn", value: "lázaro-alves-r", href: "https://www.linkedin.com/in/lázaro-alves-r/" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group transition-transform hover:translate-x-1">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-bg3 border border-white/12 flex items-center justify-center text-lg shrink-0 group-hover:border-amber/30 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[11px] text-gray-300 tracking-[0.06em] uppercase mb-0.5">{item.label}</div>
                    <div className="font-display font-bold text-[14px] sm:text-[16px]">
                      {item.href
                        ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-amber">{item.value}</a>
                        : item.value}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4 group transition-transform hover:translate-x-1">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-bg3 border border-white/12 flex items-center justify-center text-lg shrink-0 group-hover:border-amber/30 transition-colors">
                  <Image
                    src="/icon/instagramIcon.svg"
                    alt="2"
                    width={20}
                    height={12}
                  />
                </div>
                <div>
                  <div className="text-[11px] text-gray-300 tracking-[0.06em] uppercase mb-0.5">Instagram</div>
                  <div className="font-display font-bold text-[14px] sm:text-[16px]">
                    lazaro_alves_r
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleWhatsApp}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4 sm:gap-5 w-full"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[0.14em] uppercase text-gray-300">Nome</label>
                <input required type="text" placeholder="João da Silva" value={nome} onChange={e => setNome(e.target.value)}
                  className="bg-bg2 border border-white/12 text-white placeholder:text-gray-500 font-sans font-light text-[15px] px-4 py-3.5 rounded outline-none transition-all focus:border-amber/50 focus:bg-bg3 w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] tracking-[0.14em] uppercase text-gray-300">E-mail ou WhatsApp</label>
                <input required type="text" placeholder="joao@empresa.com" value={contato} onChange={e => setContato(e.target.value)}
                  className="bg-bg2 border border-white/12 text-white placeholder:text-gray-500 font-sans font-light text-[15px] px-4 py-3.5 rounded outline-none transition-all focus:border-amber/50 focus:bg-bg3 w-full" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[0.14em] uppercase text-gray-300">Tipo de projeto</label>
              <select required value={tipo} onChange={e => setTipo(e.target.value)}
                className="bg-bg2 border border-white/12 text-white font-sans font-light text-[15px] px-4 py-3.5 rounded outline-none transition-all focus:border-amber/50 focus:bg-bg3 w-full appearance-none">
                <option value="" disabled>Selecione</option>
                <option>Loja Virtual</option>
                <option>Site Institucional</option>
                <option>Landing Page</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[0.14em] uppercase text-gray-300">Sobre o seu negócio</label>
              <textarea required placeholder="Conte um pouco sobre sua empresa e o que você precisa…" rows={4}
                value={mensagem} onChange={e => setMensagem(e.target.value)}
                className="bg-bg2 border border-white/12 text-white placeholder:text-gray-500 font-sans font-light text-[15px] px-4 py-3.5 rounded outline-none transition-all focus:border-amber/50 focus:bg-bg3 w-full resize-none" />
            </div>

            <button
              type="submit"
              className="flex items-center gap-3 bg-[#25D366] text-white font-display font-bold text-[14px] sm:text-[15px] tracking-wide px-8 py-4 rounded self-start mt-1 transition-all hover:bg-[#1ebe5d] hover:-translate-y-0.5 shadow-[0_0_28px_rgba(37,211,102,0.2)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.35)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Orçamento via WhatsApp
            </button>

            <p className="text-dim text-[12px]">
              Ao clicar, abre o WhatsApp com suas informações preenchidas automaticamente.
            </p>
          </motion.form>

        </div>
      </div>
    </section>
  );
}