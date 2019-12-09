// @packages
import React from 'react';
import { useParams } from 'react-router-dom';

// @app
import DataTable from '../DataTable';

// @own
import { members } from './mockData';
import './styles.scss';

function Main() {
  const { id } = useParams();

  const headItems = [
    'Title',
    'Name',
    'Birth',
    'Gender',
    'Party',
  ];

  return (
    <div className="main">
      {id ? `Main with params ${id}` : 'Main'}
      <DataTable headItems={headItems} items={members} />
    </div>
  );
}

export default Main;
