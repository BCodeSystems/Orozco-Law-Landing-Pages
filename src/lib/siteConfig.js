// Centralized per-domain configuration

function normalizeHost(input = "") {
  return String(input)
    .toLowerCase()
    .split(",")[0]        // handle multiple hosts
    .trim()
    .replace(/:\d+$/, "") // remove port (e.g. :3000)
    .replace(/^www\./, ""); // remove www.
}

export function getSiteConfig(host = "") {
  const h = normalizeHost(host);

  // Default: San Diego
  let config = {
    heroH1: {
      en: "San Diego Personal Injury Attorney",
      es: "Abogado de Lesiones Personales en San Diego",
    },
  };

  // Chula Vista landing page
  if (h === "chulavistapersonalinjury.com") {
    config = {
      heroH1: {
        en: "Chula Vista Personal Injury Attorney",
        es: "Abogado de Lesiones Personales en Chula Vista",
      },
    };
  }

  return config;
}