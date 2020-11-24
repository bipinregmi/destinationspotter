
import React,{useState} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button';
import { db } from '../service/firebase';
import AsyncSelect from 'react-select/async';
import firebase from "firebase";


export default () => {

    const [keyword,setKeyword] = useState('');
    let resultString = "";
    const citiesRef = db.collection("posts");
    // db.collection("posts").doc(postId).collection("comments").add({

    const handleClick = async () => {
        if (keyword !== '') {
            const queryRef = await citiesRef.where("city", "==", keyword).get();
            console.log("Searching for: " + keyword);

            if (queryRef.empty) {
                console.log('No matching documents.');
                return;
            }

            queryRef.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
            });

            // console.log("City found: " + queryRef);
        }
    }

    return (

        <div>
            <InputGroup className="mb-3" size="lg">
                <FormControl
                    name="searchKey" type="text" placeholder="Search for a Place/Zip Code/City"
                    onChange={(e)=>{setKeyword(e.target.value)}}
                />
                <InputGroup.Append>
                    <Button variant = "primary" onClick={handleClick}> Search </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};