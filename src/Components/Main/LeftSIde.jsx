import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function LeftSIde() {
  const [catagory, setCatagory] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCatagory(data.data.news_category))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h4 className="font-bold  mb-3">All Catagory({catagory.length})</h4>
      <div className="catagory *:mb-2 ">
        {catagory &&
          catagory.map((data) => (
            <NavLink to={`/category/${data.category_id}`} className="btn border-none shadow-sm  bg-transparent w-full" key={data.category_id}>
              {data.category_name}
            </NavLink>
          ))}
      </div>
    </div>
  );
}

export default LeftSIde;
