import React, { useEffect, useState } from 'react';

import {
  Button, Col, Form, Alert,
} from 'react-bootstrap';

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);
  console.log('ok show', show);
  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <></>;
}

export default AlertDismissibleExample;
