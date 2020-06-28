// == Import npm
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

// == Import
import axios from 'axios';
import {
  Button, Col, Form,
} from 'react-bootstrap';
import { API_URL } from '../../utils/constante';

import Loading from '../Loading';
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
  console.log('departements', departements);
  let departementsJSX;
  if (departements) {
    departementsJSX = departements.map((dep) => {
      console.log('ok');
      //   console.log(dep.nom);
      return (
        <option key={dep.code}>{dep.nom}</option>
      );
    });
  }

  // hook form
  const url2 = 'signup';
  const { register, handleSubmit, errors } = useForm();
  const [fnel, setFnel] = useState('');
  const onSubmit = (data) => {
    console.log(data.firstname);
    console.log(errors);

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
        if (res.status) {
          setFnel('bravo poto');
        }
        // console.log(error);
      })
      .catch((error) => console.trace(error));
  };

  return (
    <div className="formulaireContainer">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstname">
            <Form.Label>First Name</Form.Label>
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
    </div>
  );
};

// == Export
export default Signup;
