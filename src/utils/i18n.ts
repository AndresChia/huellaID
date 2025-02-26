import { es } from "@/i18n/es";

export function t(key: string): string {
  const keys = key.split(".");
  let value: any = es;

  for (const k of keys) {
    value = value[k];
    if (!value) return key;
  }

  return value;
}
