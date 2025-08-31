import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "pt"];

export default getRequestConfig(async ({ locale }) => {
  // For query parameter-based locale, we'll use the default locale
  // The actual locale will be handled by the middleware and components
  const currentLocale = locale || "en";

  if (!locales.includes(currentLocale as any)) notFound();

  return {
    locale: currentLocale,
    messages: (await import(`./messages/${currentLocale}.json`)).default,
  };
});
