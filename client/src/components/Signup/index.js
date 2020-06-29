// == Import npm
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

// == Import
import axios from 'axios';
import {
  Button, Col, Form, Alert,
} from 'react-bootstrap';
import { API_URL } from '../../utils/constante';

import Loading from '../Loading';
import messagePositif from './messagePositif';
import './styles.scss';


// == Composant
const Signup = () => {
  const dispatch = useDispatch();
  //* departements
  const url = 'https://geo.api.gouv.fr/departements';
  const [departements, setDepartements] = useState('');
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
      // const articles = res.data;
        setDepartements(res.data);
      })
      .catch((error) => console.trace(error));
  }, []);
  let departementsJSX;
  if (departements) {
    departementsJSX = departements.map((dep) =>

      //   console.log(dep.nom);
      (
        <option key={dep.code}>{dep.nom}</option>
      ));
  }

  // hook form
  const url2 = 'signup';
  const { register, handleSubmit, errors } = useForm();
  const [fnel, setFnel] = useState('');
  const [errorServer, setErrorServer] = useState('');
  // const [show, setShow] = useState(false);
  let messagePositifJSX = '';
  // let messageNegatifJSX = '';
  const onSubmit = (data) => {
    console.log(errors);
    // process.env.URL_SIGNUP
    axios
      .post(`${API_URL}/${url2}`, {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        adresse1: data.adresse1,
      })
      .then((res) => {
        // const articles = res.data;
        // setFnel(res.data);
        console.log(res.data);
        console.log(res.status);
        console.log('statusText', res.statusText);
        console.log('res', res);
        console.log('dans le then du axios');
        if (res.status === 200) {
          // setShow(true);

          messagePositifJSX = (
            <Alert variant="success" onClose={() => setFnel('')} dismissible>
              <Alert.Heading>Hey {res.data.firstname}</Alert.Heading>
              <p>
                Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice
                and tidy.
              </p>
            </Alert>
          );
          setFnel(messagePositifJSX);
        }
      })
      .catch((error) => {
        console.log('vous etes en error');
        setErrorServer('le mail existe deja');
        console.trace(error);
      });
  };

  return (
    <div className="formulaireContainer">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstname">
            <Form.Label>First Name</Form.Label>
            {/* ref={register({ required: true, maxLength: 80 })} */}
            <Form.Control type="text" placeholder="First name" name="firstname" ref={register({ required: true, maxLength: 80 })} />
          </Form.Group>
          {/* <input type="text" placeholder="First name" name="First name" ref={register({ required: true, maxLength: 80 })} /> */}

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last name" name="lastname" ref={register({ required: true, maxLength: 100 })} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true, min: 8, maxLength: 20 })} />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="2 rue des oiseaux" name="adresse1" ref={register} />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="appartement, etages.." name="adresse2" ref={register} />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              {departementsJSX}
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {fnel}
      {/* {messagePositifJSX}
      {messageNegatifJSX} */}
      {errorServer}
    </div>
  );
};

// == Export
export default Signup;
