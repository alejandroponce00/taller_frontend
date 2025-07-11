import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Turnos Taller mecanico",
  description: "Aqui se ingresan los turnos de un taller mecanico para que se marquen como reparado desde el panel de mecanicos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
