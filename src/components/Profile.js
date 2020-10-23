import React from "react";
import "../assets/css/styles1.css";

const Profile = ()=> {
    return (
            <div>
              <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"40px 100px",
                marginTop:"40px",
                borderBottom:"1px solid grey"
              }}> 
                <div>
                  <img style={{width:"240px", height:"240px", borderRadius:"120px"}}
                  src={require("../assets/img/bipin.jpg")} alt=""/>
                </div>
                <div>
                  <h2> bregmi </h2>
                  <div style={{display:"flex", justifyContent:"space-between", width:"115%"}}>
                    <h4>25 posts</h4>
                    <h4>20 following</h4>
                    <h4>5 followers</h4>
                  </div>
                </div>
              </div>
              <div style={{
                textAlign:"center",
                marginTop:"40px",
              }}>
                <h1>Settings</h1>
              </div>
              <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"10px 120px",
                marginTop:"40px",
              }}> 
                  <h4>Full Name:</h4>
                  <h4 className="settingsInfo text-muted">Bipin Regmi</h4>
                  <h6 className="text-muted">edit</h6>
              </div>

              <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"10px 120px",
                //marginTop:"10px",
              }}> 
                  <h4>Username:</h4>
                  <h4 className="settingsInfo text-muted">bregmi</h4>
                  <h6 className="text-muted">edit</h6>
              </div>
              <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"10px 100px",
                ///marginTop:"10px",
              }}> 
                  <h4>E-Mail:</h4>
                  <h4 className="settingsInfo text-muted">bregmi@gmail.com</h4>
                  <h6 className="text-muted">edit</h6>
              </div>
              <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"10px 145px",
                //marginTop:"10px",
              }}> 
                  <h4>Phone Number:</h4>
                  <h4 className="settingsInfoPN text-muted">911</h4>
                  <h6 className="text-muted">edit</h6>
              </div>

              <div style={{
                margin:"10px 368px"
              }}>
                <h4>Update Interests:</h4>
              </div>
             
             <div style={{
                  display:"flex",
                  justifyContent:"space-around",
                  margin:"20px 330px",
             }}>
              <p class="interests">Travel</p>
              <p class="interests">Hiking</p>
              <p class="interests">Biking</p>

            </div>
            <div style={{
                  display:"flex",
                  justifyContent:"space-around",
                  margin:"20px 330px",
             }}>
               <p class="interests">Fishing</p>
               <p class="interests">Scenery</p>
              <p class="interests">Camping</p>
              
             </div>
             <div style={{
                  display:"flex",
                  justifyContent:"space-around",
                  margin:"20px 450px",
             }}>
              <p class="interests">Rock Climbing</p> 
              <p class="interests">Bird Watching</p>
             </div>

             <div style={{
                marginTop:"10px",
                marginLeft:"370px"
              }}>
                <h4 class="underline">Change Password</h4>
             </div>

             <div style={{
                marginTop:"10px",
                marginLeft:"370px"
              }}>
                <h4 class="underline">Delete Account</h4>
             </div>


            </div>
  );
}


export default Profile;