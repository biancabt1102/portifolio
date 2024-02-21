import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="w-screen flex justify-center my-16">
        <Banner />
      </main>
      <Footer />
    </div>
  )
}
