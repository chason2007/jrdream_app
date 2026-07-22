export type Locale = "en" | "ar";
export type TextDirection = "ltr" | "rtl";

export interface BaseLocaleProps {
  lang: Locale;
}

export interface ContentProps<T> extends BaseLocaleProps {
  content: T;
}
