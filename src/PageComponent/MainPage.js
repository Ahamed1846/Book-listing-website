import { fetchBooks } from "../ReduxComponents/BookAction";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assests/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function PageBody() {
  const dispatch = useDispatch();
  const Books = useSelector((state) => state.Books);
  const books = Books?.[Object.keys(Books)[0]] || [];
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const filteredBooks = books.filter((book) => {
    if (searchTerm === "") {
      return true;
    }
    const title = book.title.toLowerCase();
    return title.includes(searchTerm.toLowerCase());
  });

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(event.target.value);
    }
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-between content-center items-center px-10 py-7 max-w-screen bg-white shadow-md">
        <img className="w-32" src={Logo} alt="Logo" />
        <div className="flex items-center shadow-xl">
          <div className=" w-16 h-10 bg-gray-300 rounded-l text-center flex items-center justify-center">
            <SearchIcon />
          </div>
          <input
            className="w-full md:w-96 h-10 bg-gray-300 outline-none rounded-r"
            type="text"
            placeholder="Search books"
            onKeyPress={handleSearchKeyPress}
          />
        </div>
        <NavLink to="/register">
          <button className="px-4 py-2 bg-blue-500 rounded text-white font-semibold">
            Register
          </button>
        </NavLink>
      </div>
      <div className="flex flex-wrap justify-center items-center px-5">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-md p-4 m-4 w-64 h-80 hover:bg-gray-100"
          >
            <div className="h-40 flex justify-center items-center mb-4">
              <img
                src={book.imageLinks.thumbnail}
                alt={book.title}
                className="h-full rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-lg font-medium text-gray-800 mb-2">
                {book.title}
              </p>
              <p className="text-sm text-gray-500">{book.authors.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageBody;
