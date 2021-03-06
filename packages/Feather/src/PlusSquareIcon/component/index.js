/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";

const PlusSquareIcon = ({ className, size }) => (
  <svg
    data-testid="PlusSquareIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10
    }}
    focusable="false"
    fill="currentColor"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

PlusSquareIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

PlusSquareIcon.defaultProps = {
  size: 1.5
};

export default PlusSquareIcon;
