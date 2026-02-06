/// <reference types="astro/client" />
import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";

// Import all Astro components that should be editable in CloudCannon
import Hero from "../components/hero/hero.astro";
import Services from "../components/services/services.astro";
import Pricing from "../components/pricing/pricing.astro";
import Clients from "../components/clients/clients.astro";
import Testimonials from "../components/testimonials/testimonials.astro";
import CaseStudies from "../components/case_studies/case_studies.astro";
import Quote from "../components/quote/quote.astro";
import Faq from "../components/faq/faq.astro";
import Newsletter from "../components/newsletter/newsletter.astro";

// Define component registrations
// The name must match the _name field used in content_blocks
const astroComponentRegistrations = [
  { name: "hero", component: Hero },
  { name: "services", component: Services },
  { name: "pricing", component: Pricing },
  { name: "clients", component: Clients },
  { name: "testimonials", component: Testimonials },
  { name: "case_studies", component: CaseStudies },
  { name: "quote", component: Quote },
  { name: "faq", component: Faq },
  { name: "newsletter", component: Newsletter },
];

// Register all Astro components with CloudCannon
astroComponentRegistrations.forEach(({ name, component }): void => {
  registerAstroComponent(name, component);
});
