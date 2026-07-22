import type { Locale } from "@/types/common";
import type { Content } from "./types";
import { enContent } from "./en";
import { arContent } from "./ar";

export * from "./types";

export const content: Record<Locale, Content> = {
  en: enContent,
  ar: arContent,
};

export function getContent(locale: Locale): Content {
  return content[locale] || content.en;
}
