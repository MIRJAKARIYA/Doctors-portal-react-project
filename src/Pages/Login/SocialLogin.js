import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const [token] = useToken(user);

  let signInError;

  if (error) {
    signInError = <p className="text-red-500 text-xs">{error?.message}</p>;
  }

  useEffect(() => {
    if (token) {
      navigate(from,{replace:true});
    }
  }, [token, navigate,from]);
  return (
    <>
      {signInError}
      {loading ? (
        <button className="btn btn-square loading w-full"></button>
      ) : (
        <button className="btn btn-outline" onClick={handleGoogleSignIn}>
          CONTINUE WITH GOOGLE
        </button>
      )}
    </>
  );
};

export default SocialLogin;
