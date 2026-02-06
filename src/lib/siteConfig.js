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
  // Try to resolve a host from multiple environments:
  // 1) Explicit argument
  // 2) Browser (client components)
  // 3) Vercel env (server)
  const resolvedHost =
    host ||
    (typeof window !== "undefined" ? window.location.hostname : "") ||
    process.env.NEXT_PUBLIC_SITE_HOST ||
    process.env.VERCEL_URL ||
    "";

  const h = normalizeHost(resolvedHost);

  // Default: San Diego
  let config = {
    heroH1: {
      en: "San Diego Personal Injury Attorney",
      es: "Abogado de Lesiones Personales en San Diego",
    },
  };

  // Chula Vista landing page (support exact match or subdomain variations)
  if (h === "chulavistapersonalinjury.com" || h.endsWith(".chulavistapersonalinjury.com")) {
    config = {
      heroH1: {
        en: "Chula Vista Personal Injury Attorney",
        es: "Abogado de Lesiones Personales en Chula Vista",
      },
    };
  }

  return config;
}