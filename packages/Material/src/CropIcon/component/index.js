/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";

const CropIcon = ({ className, size }) => (
  <svg
    data-testid="CropIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"></path>
  </svg>
);

CropIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

CropIcon.defaultProps = {
  size: 1.5
};

export default CropIcon;
