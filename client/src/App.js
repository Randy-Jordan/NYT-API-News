import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import UsNews from "./components/UsNews"
import WorldNews from './components/WorldNews'
import NewsWire from "./components/NewsWire"

function App() {
  return (
    <Routes>
      {/* Index Route */}
      <Route index element={<Home />} />

      {/* Public Routes */}
      <Route path="usnews" element={<UsNews />} />
      <Route path="worldnews" element={<WorldNews />} />
      <Route path="newswire" element={<NewsWire />} />
    
      {/* Wildcard */}
      <Route path="*" element={<Home />} />

   </Routes>
  );
}

export default App;