import React, { useState } from "react";
import "../assets/css/styles1.css";
import Interests from "../components/InterestBubbles"
import TextBox from '../components/Textbox';
import firebase from "firebase";
// import { noAuto } from "@fortawesome/fontawesome-svg-core";

function Profile () {
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [userID, setuserID] =useState('');
  const [phoneNumber,setphoneNumber]= useState('');
  const [photoURl, setphotoURL] = useState('');

  firebase.auth().onAuthStateChanged(function(user){
    if (user){

      //signed in
      setuserID(user.uid);
      setUsername( user.displayName);
      setEmail(user.email);
      setphotoURL(user.photoURL);
      setphoneNumber(user.phoneNumber);
      // var fullName =  user

      console.log(user)

    }
    else{
      //signed out
    }
  });






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
                  <img style={{width:"180px", height:"180px", borderRadius:"120px"}}
                  src={require("../assets/img/bipin.jpg")} alt=""/>
                  <button type="button" class="btn btn-sm btn-link " 
                  style ={{maxHeight:"30px", marginLeft:"5px",marginBottom:"-150px", color:"blueviolet"}}
                   data-toggle="button"  aria-pressed="false" autocomplete="off">
                   Change Picture
                </button> 
                </div>
                

                 
                <div>
                  <h2> {username} </h2>
                  <div style={{display:"flex", justifyContent:"space-between", width:"115%"}}>
                    <h5>25 posts</h5>
                    <h5>20 following</h5>
                    <h5>5 followers</h5>
                  </div>
                </div>
              </div>


              <div style={{
                textAlign:"left",
                marginTop:"40px",
                marginLeft:"300px",        
                marginBottom:"40px"
              }}>
                <h1>Settings</h1>
              </div>
              <div style={{margin: "0px",padding:"20px"}}>
                <div style={{
                  display:"table-row",
                  padding:"20px",
                  textAlign:"left",
                }}> 
                    <td><h5 style={{marginLeft: "350px",marginRight:"200px", marginBottom:"30px"}}>Full Name:</h5></td>
                  <td> <TextBox> </TextBox></td>
                </div>

                <div style={{
                  display:"table-row",
                  padding:"20px",
                  textAlign:"left",
                  
                }}> 
                    <td> <h5 style={{marginLeft: "350px",marginRight:"200px" , marginBottom:"30px"}}>Username:</h5> </td>
                    <td>{username}</td>
                    <td>  <TextBox > </TextBox> </td>
                </div>
                <div style={{
                display:"table-row",
                textAlign:"left",
                padding:"20px",
                }}> 
                    <td><h5 style={{marginLeft: "350px",marginRight:"200px", marginBottom:"30px"}}>E-Mail:</h5></td>
                    <td>{email}</td>
                    <td><TextBox> </TextBox> </td>
                </div>
              <div style={{
                  textAlign:"left",
                  display:"table-row",
                  padding:"20px",
                }}>  
              
                  <td> <h5 style={{marginLeft: "350px",marginRight:"200px", marginBottom:"30px"}}>Phone Number:</h5> </td>
                  <td> {phoneNumber}</td>
                    <td><TextBox> </TextBox> </td>
                </div>

                <div style={{
                  textAlign:"left",
                  display:"table-row",
                  padding:"20px",
                }}>
                 <td> <h5 style={{marginLeft: "350px",marginRight:"200px" , marginBottom:"30px"}}>Update Interests:</h5> </td>

                 <td><Interests></Interests></td>
              </div>
              <div style={{
                  marginTop:"10px",
                  marginLeft:"350px",
                  marginBottom:"30px",
                }}>
                  <button type="button" className="btn btn-lg btn-dark">Change Password</button>

              </div>

              <div>
              <button  style={{marginLeft:"350px", width:"188px"}} type="button" className="btn btn-lg btn-danger">Delete Account</button>

              </div>
              </div>

              
           
                

            
           
            </div>
  );
}

export default Profile;