import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Correct imports for react-router-dom v6
import RecipeList from './components/RecipeList';  // Import RecipeList component
import RecipeDetails from './components/RecipeDetails';  // Import RecipeDetails component
import SearchBar from './components/SearchBar';  // Import SearchBar component

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        
        {/* Render the SearchBar component */}
        <SearchBar />
        
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
