import React,{useState} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button';


export default () => {

    const [keyword,setKeyword] = useState('');
    const handleClick = () => {
        if (keyword !== '')
        {
            console.log(keyword);
        }
    }
    return (
    <div>

      <InputGroup className="mb-3" size="lg">
        <FormControl
          // placeholder="Search for a Place/Zip Code/ City"
          // aria-label="SearchPlace"
          // aria-describedby="basic-addon2"
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
