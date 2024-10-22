import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="bg-slate-50 p-3 rounded-lg mb-4">
            <h3 className="text-xl font-semibold capitalize">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;