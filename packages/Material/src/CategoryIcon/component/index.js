/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";

const CategoryIcon = ({ className, size }) => (
  <svg
    data-testid="CategoryIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M12 2l-5.5 9h11z"></path>
    <circle cx="17.5" cy="17.5" r="4.5"></circle>
    <path d="M3 13.5h8v8H3z"></path>
  </svg>
);

CategoryIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

CategoryIcon.defaultProps = {
  size: 1.5
};

export default CategoryIcon;
