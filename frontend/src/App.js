import { EthContext, EthProvider } from "./contexts/EthContext";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Banks/Home";
import Register from "./components/Banks/Register";
import Dashboards from "./components/Banks/Dashboards";
import PatientDashboard from "./components/Banks/PatientDashboard";
import Navbar from "./components/Banks/Navbar";

import { useContext } from "react";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "./firebase";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import FooterComponent from "./components/Banks/FooterComponent";
import StemcellPage from "./components/Banks/StemcellPage";

const provider = new GoogleAuthProvider();
function App() {
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
        console.log("error in app is", error);
      });
  };

  const login = async () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
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
        const docRef = doc(db, "Users", uid);
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log("docSnap.data()", docSnap.data());
            navigate(`${data.type}/dashboard`);
          } else {
            console.log("Document does not exist");
            navigate("/register");
          }
        } catch (error) {
          console.log("error in Home is ", error);
        }
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
    // background-color: "#";
    <div className="">
      <Navbar login={login} />

      {/* <div classNa me=""> */}
      {/* <Demo /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/donor/register" element={<Home />} />
        <Route exact path="/patient/register" element={<Home />} />
        <Route exact path="/Patient/dashboard" element={<PatientDashboard />} />
        <Route exact path="/Donor/dashboard" element={<Dashboards />} />
        <Route exact path="/stem-cell-bank/" element={<StemcellPage />} />
      </Routes>
      <FooterComponent />
      {/* </div> */}
    </div>
  );
}

export default App;
