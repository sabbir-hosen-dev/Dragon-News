import {
  FaRegBookmark,
  FaRegEye,
  FaShareAlt,
  FaStar,
  FaStarHalfAlt,
  FaStar as FaStarSolid,
} from "react-icons/fa";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  const {
    author,
    title,
    published_date,
    rating,
    total_view,
    thumbnail_url,
    details,
  } = news;

  // Function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStarSolid key={`star-full-${i}`} className="text-yellow-500" />
      );
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="star-half" className="text-yellow-500" />);
    }
    while (stars.length < 5) {
      stars.push(
        <FaStar key={`star-empty-${stars.length}`} className="text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="card mb-5 w-full items-center bg-base-100 shadow-md p-4 rounded-lg">
      <div className="flex w-full mb-2 justify-between items-center p-2 rounded-md  bg-base-200">

        <div className="flex items-center">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex space-x-4 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <img
        src={thumbnail_url}
        alt="thumbnail"
        className="w-full h-52 object-cover  rounded-md mb-3"
      />

      <p className="text-sm text-gray-600 mb-3">
        {details.slice(0, 100)}...
        <span className="text-blue-500 font-semibold cursor-pointer">
          {" "}
          Read More
        </span>
      </p>

      <div className="flex w-full justify-between items-center mt-4">
        <div className="flex items-center">
          {renderStars(rating.number)}
          <span className="ml-2 font-semibold">{rating.number}</span>
        </div>

        <div className="flex items-center text-gray-500">
          <FaRegEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
