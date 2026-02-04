import LandingTemplate from "@/components/Landing/LandingTemplate";
import { es } from "@/lib/i18n/es";

export default function Page() {
  return <LandingTemplate config={{ t: es }} />;
}