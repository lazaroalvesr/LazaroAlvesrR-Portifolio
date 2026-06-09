export default function StructuredData() {
  const BASE_URL = "https://www.lazaroalvesr.com";

  // Person schema
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lázaro Alves R",
    url: BASE_URL,
    image: `${BASE_URL}/foto.png`,
    jobTitle: "Desenvolvedor Web",
    description:
      "Desenvolvedor web especializado em React e Next.js. Crio sites profissionais, lojas virtuais e landing pages para empresas em Minas Gerais e todo o Brasil.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Minas Gerais",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.linkedin.com/in/lázaro-alves-r/",
      "https://www.instagram.com/lazaro_alves_r/",
      "https://github.com/lazaroalvesr",
    ],
    knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SEO", "Node.js"],
  };

  // LocalBusiness schema (ajuda buscas regionais)
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Lázaro Alves R — Desenvolvimento Web",
    url: BASE_URL,
    image: `${BASE_URL}/og-image.jpg`,
    description:
      "Desenvolvimento de sites profissionais, lojas virtuais e landing pages com React e Next.js.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Minas Gerais",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    priceRange: "$$",
    serviceType: [
      "Criação de Sites",
      "Desenvolvimento Web",
      "Loja Virtual",
      "Landing Page",
      "SEO",
    ],
  };

  // WebSite schema (habilita sitelinks search no Google)
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: BASE_URL,
    name: "Lázaro Alves R",
    description: "Portfólio de desenvolvimento web — React e Next.js",
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // BreadcrumbList
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início",   item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${BASE_URL}/#servicos` },
      { "@type": "ListItem", position: 3, name: "Projetos", item: `${BASE_URL}/#projetos` },
      { "@type": "ListItem", position: 4, name: "Sobre",    item: `${BASE_URL}/#sobre` },
      { "@type": "ListItem", position: 5, name: "Contato",  item: `${BASE_URL}/#contato` },
    ],
  };

  // ItemList de projetos
  const projectList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projetos de Desenvolvimento Web — Lázaro Alves R",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Arruda Bombas Hidráulicas",
        url: "https://arrudabombas.com.br/",
        description: "Loja virtual com catálogo completo e SEO técnico. 40% de aumento nos pedidos de orçamento.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "BestGym Academia",
        url: "https://land-page-gym.vercel.app/",
        description: "Landing page para captação de alunos com sistema de agendamento.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Minas Online Telecom",
        url: "https://www.minasonlinetelecom.com.br/",
        description: "Site institucional para provedor de fibra óptica com área de autoatendimento.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "UAI+ Operadora",
        url: "https://www.uaimais.com.br/",
        description: "Site institucional para operadora de telefonia com apresentação estratégica de planos.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectList) }} />
    </>
  );
}
