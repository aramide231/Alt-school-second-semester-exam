import React from 'react';

function ErrorThrower() {
  throw new Error('This is a test error');
  return <div />;
}

export default ErrorThrower;
