import logo from "./logo.svg";
import "./App.css";
import MainPage from "./component/mainPage.tsx";
import ProfilePage from "./component/profilePage.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
