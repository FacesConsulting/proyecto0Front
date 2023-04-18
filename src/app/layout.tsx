import "@/assets/styles/globals.scss";
import "@/assets/styles/fontawesome.min.css";
import "swiper/css";
import Script from "next/script";

export const metadata = {
  title: "Consulta Ya!",
  description:
    "Ahorra tiempo y dinero en tus consultas médicas con Consulta Ya! Ofrecemos tres opciones de servicio: consultas online con profesionales de calidad desde cualquier lugar, agendar citas con médicos o clínicas de manera presencial, y servicio a domicilio para tu comodidad. ¡Accede a atención personalizada en cualquier momento y desde cualquier lugar con Consulta Ya!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script
        src="https://kit.fontawesome.com/da618b3aee.js"
        crossOrigin="anonymous"
      ></Script>
    </html>
  );
}
