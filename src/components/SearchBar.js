
import React, {useState} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button';
import {db} from '../service/firebase'
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import '../assets/css/styles1.css'
import SearchFeed from './searchFeed';
import Feed from './Feed';
import SearchResults from "./searchFeed";


export default () => {

    const [keyword, setKeyword] = useState('');
    const [found, setFound] = useState(false);
    const postsRef = db.collection("posts");


    const handleClick = async () => {

        console.log("Searching for: " + keyword);

        const snapshot = await postsRef.where("state", "==", keyword).get();

        if (snapshot.empty) {
            console.log('No results matching ' + keyword);
            return;
        }
        else {
            setFound(true);

            return <SearchResults snapshot/>
        }


    }
        return (

            <div>
                <InputGroup className="mb-3" size="lg">
                    <FormControl
                        name="searchKey" type="text" placeholder="Search for a Place/Zip Code/City"
                        onChange={(e) => {
                            setKeyword(e.target.value)
                        }}
                    />
                    <InputGroup.Append>
                        <Button variant="primary" onClick={handleClick}> Search </Button>
                    </InputGroup.Append>
                </InputGroup>

            </div>
        );
};
