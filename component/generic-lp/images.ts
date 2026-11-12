/* Images hosted on Cloudinary (uploaded from /public). */
const BASE = "https://res.cloudinary.com/h2vx5bue/image/upload";

export const IMG = {
  // hero slider
  slide1: `${BASE}/v1794405475/care-slide-1.jpg`,
  slide2: `${BASE}/v1794405475/care-slide-2.jpg`,
  slide3: `${BASE}/v1794405476/care-slide-3.jpg`,

  // conditions carousel
  psoriasis: `${BASE}/v1794405485/Psoriasis-1.webp`,
  vitiligo: `${BASE}/v1794405499/Vitiligo-1.jpg`,
  pemphigus: `${BASE}/v1794405485/Pemphigus-1.jpg`,
  nailFungus: `${BASE}/v1794405483/Nail-Fungus-1.jpg`,
  fungal: `${BASE}/v1794405476/Fungal-Infections-1.jpg`,
  lichenoid: `${BASE}/v1794469585/Lichenoid-Melanosis-12.webp`,
  urticaria: `${BASE}/v1794405498/Urticaria-1.jpg`,
  melasma: `${BASE}/v1794405482/Melasm-1.webp`,
  drugReactions: `${BASE}/v1794405474/Drug-Reactions-1.jpg`,
  pityriasis: `${BASE}/v1794405485/Pityriasis-Versicolor.jpg`,

  // doctor
  doctor: `${BASE}/v1794405480/health-doctor-standing.png`,

  // logos
  logo: `${BASE}/v1794405482/logos.jpg`,
  logo2: `${BASE}/v1794405482/logos1.png`,
} as const;
