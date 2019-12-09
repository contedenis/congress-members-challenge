// @packages
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// @app
import DataTable from '../DataTable';
import { paginator } from '../../utils/functions';

// @own
import { members } from './mockData';
import './styles.scss';

function Main() {
  const [page, setPage] = useState(0);
  const { id } = useParams();

  const headItems = [
    'Title',
    'Name',
    'Birth',
    'Gender',
    'Party',
  ];

  const congressPersons = {
    items: paginator(members, 3),
    totalItems: members.length,
  };

  const { items, totalItems } = congressPersons;

  return (
    <div className="main">
      {id ? `Main with params ${id}` : 'Main'}
      <DataTable
        headItems={headItems}
        items={items[page]}
        onPageChange={setPage}
        page={page}
        pageSize={3}
        totalItems={totalItems}
      />
    </div>
  );
}

export default Main;
