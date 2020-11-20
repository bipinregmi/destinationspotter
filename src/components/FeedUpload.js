import React, { useState } from 'react';
import {db, storage} from '../service/firebase'
import firebase from "firebase";
import '../assets/css/styles1.css'


function FeedUpload(){
    const [locationName,setLocationName] = useState('');
    const [description,setDescription] = useState('');
    const [image,setImage] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');


    const [progress,setProgress] = useState(0);



    const handleChange = (e) =>{
        console.log(e.target.files[0])
        if (e.target.files[0]){ // get the 1st file that's selected
            setImage(e.target.files[0]);
        }

    }

    const handleUpload = ()=>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image); //putting the image that was grabbed 

        uploadTask.on(
            "state_changed",
            (snapshot) =>{
                //progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                //Error function
                console.log(error);
                alert(error.message);
            },
            ()=>{
                //Complete function
                    storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            //post the image inside db
                            db.collection("posts").add({
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                date: firebase.firestore.FieldValue.serverTimestamp(),
                                locationName: locationName,
                                imageUrl: url,
                                description: description,
                                state: state,
                                city : city,
                            });
                            setProgress(0);
                            setDescription("");
                            setImage("");
                            setLocationName("");
                            setState("");
                            setCity("");

                        })
                    
            }
        )
    }

    return(
        <div className = "image_upload">  
                <div class="jumbotron ">
                <div class="container">
                    <h1 class="display-6">Share the Location</h1>
                    <p class="lead">Share your experience as a powerful way to help others. </p>

                    <div className="form-group">
                    <label for="inputAddress">Location Name</label>
                    <input type="text" class="form-control" placeholder="Golden Gate" onChange={event => setLocationName(event.target.value) }value={locationName}/>
                </div>
                <div className = "form-group">
                    <div class="form-row">
                        <div class="form-group col-md-5">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity" onChange={event => setCity(event.target.value) } value = {city}/>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select id="inputState" class="form-control" onChange={event => setState(event.target.value) } value = {state}>
                                <option selected>Choose...</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>                            
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip"/>
                        </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
                    placeholder= 'Enter the description ...' onChange={event => setDescription(event.target.value) } value = {description}></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Image Upload</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={handleChange}/>
                </div>

                <progress className="image_upload_progress" value={progress} max="100"/>


                <button type="button" class="btn btn-lg btn-info" data-toggle="button" onClick={handleUpload} aria-pressed="false" autocomplete="off">
                    Share it !!!
                </button>               

        </div>
                </div>
                </div>
        </div>
    )
}

export default FeedUpload;