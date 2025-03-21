import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Sun, Moon } from "lucide-react";

export const Login = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleMethodChange = () => setIsSignUpActive(!isSignUpActive);

  const handleAuth = () => {
    if (!email || !password) return;
    const authMethod = isSignUpActive ? createUserWithEmailAndPassword : signInWithEmailAndPassword;
    authMethod(auth, email, password)
      .then((userCredential) => console.log(userCredential.user))
      .catch((error) => console.log(error.code, error.message));
  };

  if (user) return <Navigate to="/private" />;

  return (
    <div className={`flex items-center justify-center min-h-screen transition-all relative 
      ${darkMode ? "bg-gradient-to-r from-gray-900 to-gray-700" : "bg-gradient-to-r from-blue-400 to-purple-500"}
    `}>
      
      {/* Toggle Dark Mode Button */}
      <Button className="absolute top-4 right-4 p-2 rounded-full shadow-md bg-white" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-blue-600" />}
      </Button>

      {/* Animated Card */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="drop-shadow-lg"
      >
        <Card className={`w-96 p-6 rounded-xl shadow-lg transition-all 
          ${darkMode ? "bg-gray-800 text-white border border-gray-700" : "bg-white text-black"}
        `}>
          
          {/* Header */}
          <CardHeader>
            <CardTitle className="text-center text-2xl font-extrabold text-transparent bg-clip-text 
              bg-gradient-to-r from-pink-500 to-purple-500
            ">
              {isSignUpActive ? "Create Account" : "Welcome Back!"}
            </CardTitle>
          </CardHeader>

          {/* Form Content */}
          <CardContent>
            <div className="space-y-4">
              <Input 
                type="email" 
                placeholder="Enter Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="p-2 w-full border rounded-lg focus:ring-2 focus:ring-purple-400"
              />
              <Input 
                type="password" 
                placeholder="Enter Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-400"
              />

              {/* Sign Up / Sign In Button */}
              <Button 
                onClick={handleAuth} 
                className={`w-full text-white py-2 rounded-lg transition-all 
                  ${isSignUpActive ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500" 
                  : "bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-purple-500"}
                `}
              >
                {isSignUpActive ? "Sign Up" : "Sign In"}
              </Button>

              {/* Switch Between Sign Up & Sign In */}
              <Button 
                variant="link" 
                onClick={handleMethodChange} 
                className="w-full text-white text-center font-medium underline"
              >
                {isSignUpActive ? "Already have an account? Sign In" : "New here? Create an account"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
