import Footer from "../component/homePage/footer/footer";
import Promobanner from "../component/homePage/home/PromoBanner";

export default function Home() {
  return (
    <>
      <main className="w-screen min-h-screen bg-amber-100">
        <Promobanner />

        <Footer />
      </main>
    </>
  );
}
