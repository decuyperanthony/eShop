// == Import npm
import React from 'react';

import {
  Spinner,
} from 'react-bootstrap';

// == Composant
const Loading = () => (
  <>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </>
);

// == Export
export default Loading;
