export function getSiteConfig(host = "") {
    const h = host.toLowerCase();
  
    // default (sandiego-injurylaw.com, vercel preview urls, etc.)
    let config = {
      heroH1: {
        en: "San Diego Personal Injury Attorney",
        es: "Abogado de Lesiones Personales en San Diego",
      },
    };
  
    if (h.includes("chulavistapersonalinjury.com")) {
      config = {
        heroH1: {
          en: "Chula Vista Personal Injury Attorney",
          es: "Abogado de Lesiones Personales en Chula Vista",
        },
      };
    }
  
    return config;
  }