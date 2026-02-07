// Centralized per-domain configuration

function normalizeHost(input = "") {
  return String(input)
    .toLowerCase()
    .split(",")[0]          // handle multiple hosts
    .trim()
    .replace(/:\d+$/, "")   // remove port (e.g. :3000)
    .replace(/^www\./, ""); // remove www.
}

export function getSiteConfig(host = "") {
  const resolvedHost =
    host ||
    (typeof window !== "undefined" ? window.location.hostname : "") ||
    process.env.NEXT_PUBLIC_SITE_HOST ||
    process.env.VERCEL_URL ||
    "";

  const h = normalizeHost(resolvedHost);

  // ---------------------------
  // Default: San Diego
  // ---------------------------
  let config = {
    heroH1: {
      en: "San Diego Personal Injury Attorney",
      es: "Abogado de Lesiones Personales en San Diego",
    },
    meta: {
      en: {
        title: "San Diego Personal Injury Attorney | Orozco Law Firm",
        description:
          "Get a free case review from Orozco Law Firm. No upfront fees. Call today to discuss your injury claim.",
      },
      es: {
        title: "Abogado de Lesiones Personales en San Diego | Orozco Law Firm",
        description:
          "Consulta gratis con Orozco Law Firm. Sin costos por adelantado. Llame hoy para hablar de su caso.",
      },
    },
    ogImage: "/og-image.png",
  };

  // ---------------------------
  // Chula Vista
  // ---------------------------
  if (
    h === "chulavistapersonalinjury.com" ||
    h.endsWith(".chulavistapersonalinjury.com")
  ) {
    config = {
      heroH1: {
        en: "Chula Vista Personal Injury Attorney",
        es: "Abogado de Lesiones Personales en Chula Vista",
      },
      meta: {
        en: {
          title: "Chula Vista Personal Injury Attorney | Orozco Law Firm",
          description:
            "Get a free case review from Orozco Law Firm. No upfront fees. Serving Chula Vista injury victims.",
        },
        es: {
          title: "Abogado de Lesiones Personales en Chula Vista | Orozco Law Firm",
          description:
            "Consulta gratis con Orozco Law Firm. Sin costos por adelantado. Atendemos a Chula Vista.",
        },
      },
      ogImage: "/og-image.png",
    };
  }

  return config;
}