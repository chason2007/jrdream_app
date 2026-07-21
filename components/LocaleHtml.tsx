"use client";

import { useEffect } from "react";

/**
 * Keeps the root <html> element's lang/dir in sync with the current locale.
 * The visual RTL flip comes from the page wrapper's own dir attribute (baked
 * into the static HTML, so there is no flash); this just corrects the document
 * root for assistive tech and search engines after hydration.
 */
export default function LocaleHtml({
  lang,
  dir,
}: {
  lang: string;
  dir: "ltr" | "rtl";
}) {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    return () => {
      root.lang = "en";
      root.dir = "ltr";
    };
  }, [lang, dir]);

  return null;
}
