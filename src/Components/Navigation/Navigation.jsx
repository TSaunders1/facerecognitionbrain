import React from 'react';

// eslint-disable-next-line react/prop-types
const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          type="button"
          onClick={() => onRouteChange('SignOut')}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </button>
      </nav>
    );
  }

  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button
        type="button"
        onClick={() => onRouteChange('SignIn')}
        className="f3 link dim black underline pa3 pointer"
      >
        Sign In
      </button>
      <button
        type="button"
        onClick={() => onRouteChange('Register')}
        className="f3 link dim black underline pa3 pointer"
      >
        Register
      </button>
    </nav>
  );
};

export default Navigation;
