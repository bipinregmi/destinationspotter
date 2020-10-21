import React, { Component } from "react";
//import "../assets/css/newStyles.css";

const SavedGallery = ()=> {
    return (
        <div>
        <div className="text-center">

                <h1>Your Saved Posts!</h1>
        </div> 
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"40px 100px",
            marginTop:"40px",
        }}>       
            <div className="gallery">
                <div class="locationItem">
                    <img className="savedItem" src="https://images.unsplash.com/photo-1537174621888-eba6137cf6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                    <p>LocationName, Date</p>
                </div>
                <div class="locationItem">
                    <img className="savedItem" src="https://images.unsplash.com/photo-1537174621888-eba6137cf6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                    <p>LocationName, Date</p>
                </div>
                <div class="locationItem">
                    <img className="savedItem" src="https://images.unsplash.com/photo-1537174621888-eba6137cf6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                    <p>LocationName, Date</p>
                </div>
                <div class="locationItem">
                    <img className="savedItem" src="https://images.unsplash.com/photo-1537174621888-eba6137cf6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                    <p>LocationName, Date</p>
                </div>
                <div class="locationItem">
                    <img className="savedItem" src="https://images.unsplash.com/photo-1537174621888-eba6137cf6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                    <p>LocationName, Date</p>
                </div>
                <div class="locationItem">
                    <img className="savedItem" src="https://images.unsplash.com/photo-1537174621888-eba6137cf6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                    <p>LocationName, Date</p>
                </div>
                <div class="locationItem">
                    <img className="savedItem" src="https://images.unsplash.com/photo-1537174621888-eba6137cf6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt=""/>
                    <p>LocationName, Date</p>
                </div>
             
            </div>
        </div>
        </div>
    );
}

export default SavedGallery;