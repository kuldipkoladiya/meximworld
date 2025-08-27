import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
    title: "Mexim World - Pharma Import Export",
    description: "Global pharma import-export business",
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
