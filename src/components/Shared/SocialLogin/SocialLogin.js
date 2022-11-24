import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSignInWithGoogle, useSignInWithFacebook } from "react-firebase-hooks/auth";

import fbImg from "../../../assets/img/facebook.png";
import googleImg from "../../../assets/img/google.png";
import gitImg from "../../../assets/img/github.png";

import "./SocialLogin.css";
import auth from "../../../firebase.init";
import { useLocation } from "react-router-dom";
import Loading from "../../Auth/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth); 

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/'

  console.log(user2);
  let errorElement;

  if(loading || loading2){
    return <Loading />
  }

  if(user || user2){
    navigate(from , {replace: true});
  }

  if(error || error2){
    return errorElement = <p className="text-danger">{error?.message} {error2?.message}</p>
  }


  return (
    <> 
      <div className="social-login">
        {errorElement}
        <button onClick={() => signInWithFacebook()} className="facebook-btn">
          {" "}
          <img src={fbImg} alt="" /> Facebook
        </button>
        <button className="google-btn">
          {" "}
          <img src={googleImg} onClick={() => signInWithGoogle()} alt="" />{" "}
          Google
        </button>
        <button className="github-btn">
          {" "}
          <img src={gitImg} alt="" /> Github
        </button>
      </div> 
    </>
  );
};

export default SocialLogin;
