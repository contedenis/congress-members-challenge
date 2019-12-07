// @packages
import React from 'react';
import { useParams } from 'react-router-dom';

function Main() {
  const { id } = useParams();

  return (
    <div>
      {id ? `Main with params ${id}` : 'Main'}
    </div>
  );
}

export default Main;
