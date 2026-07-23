import type { ServiceItem } from "./types";

export function createServiceItems(titles: string[]): ServiceItem[] {
  return titles.map((title, i) => ({
    num: String(i + 1).padStart(2, "0"),
    title,
    desc: "",
  }));
}
