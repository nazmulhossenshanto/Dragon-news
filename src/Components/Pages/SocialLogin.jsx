import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-bold">Login With</h1>
      <div className="space-y-3 mt-5">
        <button className="btn w-full btn-secondary btn-outline">Login with Google</button>
        <button className="btn w-full btn-secondary btn-outline">Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
