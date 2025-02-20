import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="py-6 px-6">
        <Header />
        <SearchBar />
      </div>
    </>
  );
}

export default App;
