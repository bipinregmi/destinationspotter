import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button';
import FormGroup from "react-bootstrap";
import FormText from "react-bootstrap";


export default () => {
  return (
    <div>
      <form>
      <FormGroup controlId="searchBar">
        <FormControl type="location" placeholder="Search for a Place/Zip Code/ City" />
        <FormText className="text-muted">
          Search ya shit bruh.
        </FormText>
      </FormGroup>

        <Button variant="primary" type="search">
          Search
        </Button>
      </form>
      {/*<InputGroup className="mb-3" size="lg">*/}
      {/*  <FormControl*/}
      {/*    placeholder="Search for a Place/Zip Code/ City"*/}
      {/*    aria-label="SearchPlace"*/}
      {/*    aria-describedby="basic-addon2"*/}
      {/*  />*/}
      {/*  <InputGroup.Append>*/}
      {/*    <a*/}

      {/*        className="btn btn-info btn-lg text-uppercase js-scroll-trigger"*/}

      {/*        href="#search"*/}
      {/*    >*/}

      {/*      Search*/}
      {/*    </a>*/}
      {/*  </InputGroup.Append>*/}
      {/*</InputGroup>*/}
    </div>
  );
};
