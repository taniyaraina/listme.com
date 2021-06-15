import React from 'react';
import PropTypes from 'prop-types';

// import { ZeiqContext } from '../libs/ZeiqProvider';

const Button = ({
  children,
  isLoading,
  disabled,
  bgColor,
  className,
  ...props
}) => {
  // const data = React.useContext(ZeiqContext);
  // console.log('theme', data.theme);

  return (
    <button
      type="button"
      disabled={isLoading || disabled}
      className={`flex mx-auto bg-${bgColor} py-2 px-8 transition duration-500 items-center focus:outline-none hover:bg-primary ${className} ${
        isLoading ? 'animate-pulse ' : ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  bgColor: null,
  size: 'medium',
  onClick: undefined,
};

export default Button;
