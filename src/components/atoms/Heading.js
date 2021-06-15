import React from 'react';

const Heading = ({ centered, children, className, ...props }) => {
  return (
    <h1
      className={`text-5xl font-semibold ${
        centered ? 'text-center	' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
};
export default Heading;
