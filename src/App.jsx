
import { useState } from 'react';
import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/bookmarks/Bookmarks';
import Header from './components/header/Header'



function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time, id) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

    // Remove Bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id) 
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className="container mx-auto p-4 md:p-5 lg:p-6">
      <Header></Header>
      <main className="md:flex gap-6 mt-10">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </div>
  );
}

export default App
