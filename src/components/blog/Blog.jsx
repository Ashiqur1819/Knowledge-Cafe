import PropTypes from "prop-types"
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead}) => {
  const {cover, author_img, author, posted_date, reading_time, title, hashtags, id} = blog
    
  return (
    <div className="space-y-4 mb-6">
      <img src={cover} className="md:h-96 w-full rounded-lg object-cover" alt="" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={author_img}
            className="w-16 h-16 rounded-full object-cover"
            alt=""
          />
          <div>
            <h3 className="text-2xl font-bold">{author}</h3>
            <p className="text-gray-500 text-sm">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-500 font-medium">
            {reading_time} min read
          </span>
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="text-xl text-teal-700"
          >
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div>
        {hashtags.map((hash, index) => (
          <span key={index} className="text-gray-500 font-medium">
            <a>{hash} </a>
          </span>
        ))}
      </div>
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-purple-600 font-semibold underline"
      >
        Mark As Read
      </button>
      <br />
      <hr />
      <br />
    </div>
  );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blog;
