import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <header>
        <Header />
      </header>
      <main className="w-screen flex justify-center mt-24">
        <Banner />
      </main>
    </div>
  )
}
