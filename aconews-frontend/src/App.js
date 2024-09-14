import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [news, setNews] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('en');
  const [page, setPage] = useState(1);

  const fetchNews = async () => {
    try {
     
  };

  useEffect(() => {
    fetchNews();
  }, [keyword, category, country, language, page]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 shadow-md flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <div className="text-white text-4xl font-bold">
            ACONEWS
          </div>
        </div>

        {/* Search Bar in the Center */}
        <div className="flex-grow mx-6">
          <input
            type="text"
            className="w-3/4 p-1 rounded-xl border border-gray-300"
            placeholder="Search news..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        {/* Dropdowns & Search Button */}
        <div className="flex items-center space-x-4">
          <select className="p-1 rounded-lg border border-gray-300" onChange={(e) => setCategory(e.target.value)}>
            <option value="">Category</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>

          <select className="p-1 rounded-lg border border-gray-300" onChange={(e) => setCountry(e.target.value)}>
            <option value="">Country</option>
            <option value="us">United States</option>
            <option value="in">India</option>
            <option value="gb">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
          </select>

          <select className="p-1 rounded-lg border border-gray-300" onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>

          {/* Search Button */}
          <button
            onClick={fetchNews}
            className="bg-green-500 text-white px-6 py-1 rounded-lg hover:bg-green-600 transition"
          >
            Search
          </button>
        </div>
      </header>

      {/* News Cards */}
      <main className="flex-grow p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.length > 0 ? (
            news.slice(0, 9).map((article, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              >
                {/* News Image */}
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-700">
                    No Image
                  </div>
                )}

                {/* Card Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-xl text-gray-600">No news articles found</p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-4 py-8">
          <button
            onClick={() => setPage(page > 1 ? page - 1 : 1)}
            className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition"
          >
            Previous
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition"
          >
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>© 2024 GNews Feed. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/mdfaizaanalam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-white text-2xl hover:text-gray-400"></i>
          </a>
          <a href="https://www.linkedin.com/in/mdfaizaanalam" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-white text-2xl hover:text-gray-400"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
