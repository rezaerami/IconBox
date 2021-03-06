/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";

const StarRateIcon = ({ className, size }) => (
  <svg
    data-testid="StarRateIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10
    }}
    focusable="false"
    fill="currentColor"
  >
    <path
      transform="scale(1.33, 1.33)"
      d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"
    ></path>
  </svg>
);

StarRateIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

StarRateIcon.defaultProps = {
  size: 1.5
};

export default StarRateIcon;
