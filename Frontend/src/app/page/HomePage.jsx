import Footer from "../component/homePage/footer/footer";
import Promobanner from "../component/homePage/home/PromoBanner";

export default function Home({ apiStatus }) {
  const pageBackdropStyle = {
    backgroundImage:
      "linear-gradient(to bottom, #8a2a33 0%, #aa5248 24%, #dfd6b0 54%, #9b9988 78%, #2e3e55 100%)",
  };

  return (
    <div className="flex w-full flex-1 flex-col bg-amber-100 pt-20">
      <div className="px-6 py-4">
        <p className={`text-sm font-medium ${apiStatus.tone}`}>
          {apiStatus.label}
        </p>
      </div>
      <div className="w-full">
        <section className="flex w-full flex-col" style={pageBackdropStyle}>
          <Promobanner />
          <Footer />
        </section>
      </div>
    </div>
  );
}
