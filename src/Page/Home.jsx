import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navber from "../Components/Header/Navber";
import LeftSIde from "../Components/Main/LeftSIde";
import RightSide from "../Components/Main/RightSide";

function Home() {
  return (
    <div className="container px-5 m-auto font-popins ">

      <header>
        <Header />
        <Navber />
      </header>

      <section className="grid grid-cols-12 gap-5 my-10">
        <aside className="col-span-3">
          <LeftSIde />
        </aside>
        <main className="col-span-6">
          <Outlet/>
        </main>
        <aside className="col-span-3">
          <RightSide />
        </aside>
      </section>

    </div>
  );
}

export default Home;
