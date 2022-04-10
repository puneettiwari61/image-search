import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import useDebounce from "./components/common/debounce";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import DisplayImage from "./components/DisplayImage";
import { ImageDataProvider } from "./components/context/images";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  let location = useLocation();
  let { state } = location;

  const handleOnSearch = (e) => setSearchTerm(e.target.value);

  return (
    <ImageDataProvider>
      <div className="App h-screen">
        <SearchBar handleOnSearch={handleOnSearch} />
        <Routes location={state?.backgroundLocation || location}>
          <Route
            path="/"
            exact
            element={
              <ImageList
                searchTerm={searchTerm}
                debouncedSearchTerm={debouncedSearchTerm}
              />
            }
          />
        </Routes>
        <Routes>
          <Route path="/img/:id" element={<DisplayImage />} />
        </Routes>
      </div>
    </ImageDataProvider>
  );
}

export default App;
