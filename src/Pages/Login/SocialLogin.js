import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  let signInError;

  if (error) {
    signInError = <p className="text-red-500 text-xs">{error?.message}</p>;
  }

  useEffect(() => {
    if (user) {
      navigate(from,{replace:true});
    }
  }, [user, navigate,from]);
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
