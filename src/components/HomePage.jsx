import Header from "./Header";
import Footer from "./Footer";
import CategorySection from "./CategorySection";
import ProductCard from "./ProductCard";
import productsData from "../data/products"; // Dummy data
import Carousel from "../components/Carousel";
import Offer from "../components/Offer";
import Promo from "../components/Promo";
import Popular from "../components/Popular";
import RocketDeals from "./RocketDeals";

function HomePage() {
  return (
    <div>
      {/* <Header /> */}
      <main className="container mx-auto p-4">
        <Carousel />
        <CategorySection />

        <Offer />
        <img
          src="https://cdn1.plotch.io/assets/images/1702618045_Mi5wbmc=.png"
          alt=""
          className="cursor-pointer"
        />
        <section className="mt-8 px-4 sm:px-6 md:px-8 lg:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 font-bold tracking-tight text-gray-900">
            End Of Season Sale
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <Promo />
        <RocketDeals />

        <Popular />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
