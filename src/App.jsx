import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import ProfileSetup from "./Pages/SignUp/ProfileSetup";
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/LogIn';
import SignUp from './Pages/SignUp/SignUp';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import MentorDashboard from './components/MentorDashboard';
import LearnerDashboard from './components/LearnerDashboard';




export default function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} /> */}
      {/* Optional fallback */}
      {/* <Route path="*" element={<Login />} />
      </Routes> */}

      {/* <ProfileSetup /> */}
      {/* <MentorList /> */}
      {/* <WelcomePage /> */}

      {/* <ProfileHeader /> */}
      {/* <Welcome /> */}

      {/* <GettingStartedHub /> */}

      {/* <UpcomingMeets /> */}

      {/* <Profile /> */}



      {/* <RecommendedMentors /> No need */}

      {/* <ProfileHeader /> */}
      {/* <MentorList /> */}
      {/* <MentorDashboard /> */}


<Routes>
  <Route path="/" index exact element={<Home />} />
  <Route path="/SignUp" element={<SignUp />} />
  <Route path="/Login" element={<Login />} />

  {/* New Routes */}
  
  <Route path="/ProfileSetup" element={<ProfileSetup />} />
  <Route path="/Welcome" element={<Welcome />} />
  <Route path="/LearnerDashboard" element={<LearnerDashboard />} />
  <Route path="/MentorDashboard" element={<MentorDashboard />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/Profile" element={<Profile />} />


  {/* Fallback
  <Route path="*" element={<Login />} /> */}
</Routes>

    </>
  );
}
