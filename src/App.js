import {Link, Route, Routes} from 'react-router-dom';


import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import AllMeetupsPage from './pages/AllMeetups';

function App() {
  return (
   <>
      <nav>
      <ul>
      <li><strong></strong></li>
      </ul>
        <ul>
          <li><Link to="/">All Meetups</Link></li>
          <li><Link to="/favoriteMeetups">Favorite Meetups</Link></li>
          <li><Link to="/addNewMeetups">Add New Meetups</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/addNewMeetups" element={<NewMeetupPage />} />
        <Route path="/favoriteMeetups" element={<FavoritesPage />} />
      </Routes>

   </>
  );
}

export default App;