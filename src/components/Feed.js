import React, {useState, useEffect} from "react";
import '../assets/css/styles1.css'
import Post from './Post';
import {db} from '../service/firebase'
import MainNav from "./MainNavAfterLogin";
// UseEffect Runs a piece of a code based on a specific condition

function  Feed(user) {
  const [posts, setPosts] = useState([]);

  //runs everytime the variable post changes
  useEffect(() =>{
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      //everytime a new post is added, this code fires
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));

    })

  }, []);


    return (
      <div>
          <MainNav user = {user.user}></MainNav>
          {/* {console.log(user.user.displayName, user.user.uid, user.user.email)} */}
          {/* {console.log("user is: ",  this.props.location.state.user)} */}

          <div className="container" style={{textAlign:"left"}} >

            {
              posts.map(({id, post}) => (
                <Post key = {id} postId = {id} locationName = {post.locationName} imageUrl = {post.imageUrl} description = {post.description} date = {post.date}
                City={post.city} State={post.state} user={user }></Post>
              ))
            
            }
          

            </div>

</div>
    );
}
export default Feed;


