export type Locale = "en" | "ar";
export type TextDirection = "ltr" | "rtl";

export interface BaseLocaleProps {
  readonly lang: Locale;
}

export interface ContentProps<T> extends BaseLocaleProps {
  readonly content: T;
}
