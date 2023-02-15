import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import "./Signup.css";

function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault()
       
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              navigate("/");
              writeData();
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
      }

    const googleSU = async (e) => {
        await signInWithPopup(auth, new GoogleAuthProvider())
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/")
                writeData();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const facebookSU = async (e) => {
        await signInWithPopup(auth, new FacebookAuthProvider())
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/")
                writeData();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }


    // Hacemos que caundo un usuario se registre, se le añada un documento a la colección leaderboard con sus datos
    // para despues solo tener que actualizar los puntos
    const writeData = async () => {
        try{
            const docRef = await addDoc(collection(db, "leaderboard"), {
                points: 0,
                userID: auth.currentUser.uid,
                userPhoto: auth.currentUser.photoURL,
                username: auth.currentUser.email.split('@')[0],
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    return (
        <section className="vh-100">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                <div className="card">
                    <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center pe-5">
        
                        <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</h1>
        
                        <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                                <input name="email" type="email" id="form3Example3c" className="form-control" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            </div>
        
                            <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                                <input name="password" type="password" id="form3Example4c" className="form-control" placeholder="Your Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            </div>

                            <div>
                            <button type="submit" className="btn btn-primary btn-lg mt-5 w-100" onClick={onSubmit}>Sign Up</button>
                            </div>

                            <div className="d-flex justify-content-center align-items-center mt-5 gap-5">
                                <i className="fa-brands fa-google" onClick={googleSU}></i>
                                <i className="fa-brands fa-facebook" onClick={facebookSU}></i>
                            </div>              
                        </form>
        
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center justify-content-center order-1 order-lg-2 ps-5">
        
                            <img src={require("../assets/images/rocket.png")}
                                className="img-fluid" alt="Sign Up banner"/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  </section>
    )
}

export default Signup;