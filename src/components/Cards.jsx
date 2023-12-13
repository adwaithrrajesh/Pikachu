import React from 'react';

function Cards({ searchResult }) {
  const cardStyle = {
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '8px',
  };

  return (
    <div style={cardStyle}>
      <div>
        <div>
          <span style={labelStyle}>ID:</span> {searchResult?.id}
        </div>
        <div>
          <span style={labelStyle}>Name:</span> {searchResult?.name}
        </div>
        <div>
          <span style={labelStyle}>Order:</span> {searchResult?.order}
        </div>
        <div>
          <span style={labelStyle}>Weight:</span> {searchResult?.weight}
        </div>
      </div>
    </div>
  );
}

export default Cards;