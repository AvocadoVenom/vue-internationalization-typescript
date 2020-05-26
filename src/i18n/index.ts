import { Locales } from "./locales";

import en from "./en.json";
import fr from "./fr.json";

export const messages = {
  [Locales.EN]: en,
  [Locales.FR]: fr
};

export const defaultLocale = Locales.FR;
