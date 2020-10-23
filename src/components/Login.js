import React from "react";
import { GoogleLogin } from "react-google-login";

//Used  GoogleAPIs to get the clientId
const clientId =
  "578904471981-5iroqee5vr23v97odtfo5ueuta2p4na3.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login With Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}
export default Login;
