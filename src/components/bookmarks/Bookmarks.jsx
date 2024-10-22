import Bookmark from "../bookmark/Bookmark";
import PropTypes from "prop-types";


const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-200 rounded-lg">
      <div>
        <h3 className="bg-white text-purple-700 font-semibold px-6 py-3 text-xl border border-purple-700 rounded-lg">
          Spent Time on Read: {readingTime} Min
        </h3>
      </div>
      <div className="bg-white h-6"></div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-teal-700">
          Bookmarked Blogs: {bookmarks.length}
        </h3>
        {bookmarks.map((bookmark, index) => (
          <Bookmark key={index} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;