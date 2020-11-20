import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


export default () => {
  return (
    <div>
      <InputGroup className="mb-3" size="lg">
        <FormControl
          placeholder="Search for a Place/Zip Code/ City"
          aria-label="SearchPlace"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <a
            className="btn btn-info btn-lg text-uppercase js-scroll-trigger"
            href="#search"
          >
            Search
          </a>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};
