import LandingTemplate from "@/components/Landing/LandingTemplate";
import { en } from "@/lib/i18n/en";

export default function Page() {
  return <LandingTemplate config={{ t: en }} />;
}