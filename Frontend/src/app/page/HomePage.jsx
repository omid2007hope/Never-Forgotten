import Footer from "../component/homePage/footer/footer";
import Promobanner from "../component/homePage/home/PromoBanner";

export default function Home({ apiStatus }) {
  return (
    <div className="flex w-full flex-1 flex-col bg-amber-100 pt-20">
      <div className="px-6 py-4">
        <p className={`text-sm font-medium ${apiStatus.tone}`}>{apiStatus.label}</p>
      </div>
      <div className="w-full">
        <Promobanner />
        <Footer />
      </div>
    </div>
  );
}
