import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route index element={<h1>Hello world 2</h1>}></Route>
        <Route path="movies/:id" element={<h1>Movie detail page</h1>}></Route>
        <Route path="movies/:type" element={<h1>Movies list page</h1>}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
