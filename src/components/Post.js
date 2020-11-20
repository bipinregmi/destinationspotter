import React, { useEffect, useState } from 'react';
import { db } from '../service/firebase';
import firebase from "firebase";




function Post ({postId, imageUrl,description, user, locationName, City, State})  {
  const [comments,setComments] = useState([]);
  const [comment,setComment] = useState('');


  useEffect(() => {
    let unsubscribe;
    if (postId){
      unsubscribe = db 
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy('timestamp','asc')
        .onSnapshot((snapshot) => {
          setComments( snapshot.docs.map((doc) => doc.data()));
        });
    }
    return() => {
      unsubscribe();
    };
  },[postId]);

  const postComment = (event) => {
    event.preventDefault();
    // console.log(user.user.displayName)

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setComment('');// clears the box


  }
  
    return (
        <div className = "post" >
            <div className="card border">
            <div className="card-header">
              <h4 style={{float:"left"}}>{locationName}</h4>
              <h6 style={{float:"right"}}> {City}, {State} </h6> 
            </div>
            <div className="card-text" style={{paddingLeft:"15px"}}>{description}
            </div>
            <div className="row">
              <div className="column">
          
                <div className="card-img">
                  <img src={imageUrl} alt="Snow" style= {{width:"100%"}}/>
                </div>
              
              </div>
              <div className="column">
                <div className="card-img">
                  <img src={imageUrl} alt="Forest" style= {{width:"100%"}}/>
              
                </div>
              </div>

              <div className="column">
                <div className="card-img">

                  <img src={imageUrl} alt="Mountains" style= {{width:"100%"}}/>
                </div>
                </div>
          
          </div>
          <div className="card-footer border-bottom">
            

                <button className="button bg-transparent" type="button" style={{border:"none" }} title="Like">
                    <span className="fa-stack fa-2x">
                      <i className="fa fa-circle fa-stack-2x text-success"></i>
                      <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                    </span>

                </button>
            

                <button className="button bg-transparent " type="button" style={{border:"none" }} title="Dislike">
                  <span className="fa-stack fa-2x">
                    <i className="fa fa-circle fa-stack-2x text-danger"></i>
                    <i className="fa fa-thumbs-down fa-stack-1x fa-inverse"></i>
                  </span>

                </button>

                <button className="button bg-transparent" type="button" style={{border:"none" }} title="Save" >
                  <span className="fa-stack fa-2x">
                    <i className="fa fa-circle fa-stack-2x text-secondary"></i>
                    <i className="fa fa-save fa-stack-1x fa-inverse"></i>
                  </span>
              
                </button>
                
                <br></br>
                <div className = "container" style={{padding:"20px"}}>
                  {comments.map((comment) =>(
                    <p key={comment.text}>
                      <strong>{comment.username} </strong> {comment.text}
                    </p>
                  ))}
                </div>
                
                <form>
                  <div className="form-row flex">
                    <div className="col-10">
                          <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                          <div className="input-group">
                            <div className="input-group-prepend ">
                              <div className="input-group-text">@<strong>{user.user.displayName}</strong></div>
                            </div>
                            <input type="text" className="form-control"  placeholder="Add a comment ...."
                            value = {comment}
                            onChange= {(e) => setComment(e.target.value)}/>
                          </div>
                        </div>
                        <div className="col-2 ">
                          <button type="submit"  className="btn mb-2" style={{fontSize:"small",backgroundColor:"cyan", marginTop:"1px"}}
                          disabled={!comment} onClick={postComment}>Comment</button>
                          
                    </div>
                  </div>
              </form>
            </div>
  
  
  
  
  
  
  
          
        </div>
        </div>
      );
  }
  export default Post;
