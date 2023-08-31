import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Events from './components/Events/Events';
import Team from './components/Team/Team';
import Courses from './components/Courses/Courses';
import Blogs from './components/Blogs/Blogs';
import Event from "./components/Event/Event";
import Blog from "./components/Blog/Blog";
import NotFound from "./components/NotFound/NotFound";
import Profile from "./components/Profile/Profile";
import Auth from "./components/Auth/Auth";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:slug" element={<Event />} />
            <Route path="/team" element={<Team />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<Courses />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<Blog />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/auth" element={<Auth />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
