import React, { useContext } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "./Home.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import app from "../../firebase";
import EthContext from "../../contexts/EthContext/EthContext";
// import Navbar from "./Forms/Navbar";
import Carasouls from "./Forms/Carasouls";
import CardsComponent from "./CardsComponent";
import FooterComponent from "./FooterComponent";
import VideoComponent from "./VideoComponent";
import Testimonials from "./Testimonials";
import Services from "./Services";
import Navbar from "./Navbar";
const provider = new GoogleAuthProvider();

const Home = () => {
  // function to login page
  const navigate = useNavigate();
  const { state, dispatch } = useContext(EthContext);
  const signout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("SIGN OUT SUCCESSFUL");
        //TODO UPDATE THE STATE VIA DISPATCH
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const login = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const { email, displayName, photoURL } = result.user;
        console.log("user ", result.user);
        console.log("email ", email);
        const uid = result.user.providerData[0].uid;
        console.log("uid", uid);
        //TODO UPDATE STATE BY DISPATCHING A METHOD
        dispatch({
          type: "UPDATE",
          data: { uid, email, displayName, photoURL },
        });
        // ...
        console.log("updated state", state);
        navigate("/register");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      <div className="">
        <Carasouls />
      </div>
      <CardsComponent />
      <VideoComponent />

      <Testimonials />
      <FooterComponent />
    </>
  );
};

export default Home;
