import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth();

  //google sign in
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GoogleProvider).then((result) => {
      const user = result.user;
      console.log(user);
      setUser(user);
    });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    isLogin ? processLogin(email, password) : registerNewUser(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        verifyEmail();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
      setError("Email Sent Pleasse verify");
    });
  };
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        setError("Password reset link sent to email.");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  return {
    user,
    email,
    error,
    handleGoogleSignIn,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    handleResetPassword,
    toggleLogin,
    registerNewUser,
    isLogin,
  };
};

export default useFirebase;
