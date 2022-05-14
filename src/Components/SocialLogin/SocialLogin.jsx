import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-accent rounded-md uppercase w-full"
      >
        continue with google
      </button>
      {error ? (
        <p className="text-xs font-medium text-red-300 text-center my-2">
          {error?.message}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default SocialLogin;
