import React from 'react';

const Main = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3 pb-3">Welcome!</h1>
        <p>Reviews for Shakepeare&apos;s plays</p>
        <p className="pt-2">
          <a className="btn btn-secondary btn-lg" href="/reviews" role="button">
            Learn more »
          </a>
        </p>
      </div>
    </div>
  );
};

export default Main;
