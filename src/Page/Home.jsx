import Header from "../Components/Header/Header";
import Navber from "../Components/Header/Navber";

function Home() {
  return (
    <div className="container px-5 m-auto font-popins ">

      <header>
        <Header />
        <Navber />
      </header>

      <section>
        <aside></aside>
        <main></main>
        <aside></aside>
      </section>

    </div>
  );
}

export default Home;
