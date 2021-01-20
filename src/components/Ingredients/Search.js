import React from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label htmlFor="search">Filter by Title</label>
          <input type="text" id="search" />
        </div>
      </Card>
    </section>
  );
});

export default Search;
