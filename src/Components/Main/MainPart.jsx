import { useLoaderData } from "react-router-dom";
import NewsCard from "../Card/NewsCard";

function MainPart() {
  const data = useLoaderData();

  return (
    <div>
      <h2 className="font-semibold ">Dragon News ({data.data.length})</h2>
      {data.data.length == 0 ? (
        <h2 className="font-bold text-2xl  h-40 flex items-center justify-center  text-red-600">News NOT FOND</h2>
      ) : (
        data.data.map((news) => <NewsCard key={news._id} news={news} />)
      )}
    </div>
  );
}

export default MainPart;
