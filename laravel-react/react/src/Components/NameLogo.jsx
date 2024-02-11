import React from 'react';

function NameLogo({ logo, text }) {
  return (
    <div className="row align-items-center mb-4">
      {/* <div className="col-auto">
        <img src={logo} alt="Logo" className="img-fluid website-logo rounded-pill" />
      </div> */}
      <div className="col">
        <span className="text fs-4 fw-bold">{text}</span>
      </div>
    </div>
  );
}

export default NameLogo;
