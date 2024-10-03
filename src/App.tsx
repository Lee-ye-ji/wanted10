import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CardPage from "./pages/CardPage";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<CardPage />} />
        {/* 다른 페이지로 이동 시 /로 리다이렉트 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
