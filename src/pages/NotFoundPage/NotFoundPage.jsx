import React from 'react';
import { TEXT } from '../../globals/constants/constants';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <>
      <h3>{TEXT.notFound}</h3>
      <Link to="/">{TEXT.goToHome}</Link>
    </>
  );
}