import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { Login } from "./Pages/Login"; 
import { Private } from "./pages/Private"; // Import Private component
import NavbarMain from "./components/navbar/NavbarMain"; 
import HeroMain from "./components/HeroSection/HeroMain";
import Home from "./Pages/Home";
import List from "./components/HeroSection/HeroMain";

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsFetching(false);
    });

    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for login page */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />

        {/* Private route */}
        <Route path="/private" element={user ? <Private /> : <Navigate to="/" />} />

        <Route path="/list" element={<List />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      {/* Show NavbarMain only if the user is logged in */}
      {user && (
        <>
          <NavbarMain />
          <HeroMain />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
