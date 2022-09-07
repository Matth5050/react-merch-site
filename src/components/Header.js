import React from 'react';

function Header() {
  const myStyles = {
    display:"flex",
    gap:"20px",
    marginLeft:"20px",
    alignItems:"flex-end"
  }
  const myH2 = {
    marginBottom:"22px"
  }
  return (
    <React.Fragment>
      <div style={myStyles}>
          <h1>The Sparrows Merch Site</h1>
          <h2 style={myH2}>adf</h2>
      </div>
    </React.Fragment>
  );
}

export default Header;