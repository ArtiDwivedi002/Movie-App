import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/Header/Header";
import { FavouriteProvider } from "@/context/favouriteContext";
import "@/style/global.scss";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer/Footer";
import LayoutWrapper from "./LayoutWrapper";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = "en";

  const messages = await getMessages(); // ✅ IMPORTANT

  return (
    <html lang={locale}>
      <body className="app-bg text-white">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <FavouriteProvider>
            <ToastContainer />
            <LayoutWrapper>
            {children}
            </LayoutWrapper>
          </FavouriteProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}