import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);

export default () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='all'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='active'>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='completed'>
      Completed
    </FilterLink>
  </p>
);