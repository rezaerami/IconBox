/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./ExposureNeg1SharpIcon.svg");
}

const ExposureNeg1SharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ExposureNeg1SharpIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="ExposureNeg1SharpIconHref"
        xlinkHref={`${importPrefix}#ExposureNeg1SharpIcon`}
      />
    </svg>
  );
};

ExposureNeg1SharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

ExposureNeg1SharpIcon.defaultProps = {
  size: 1.5
};

export default ExposureNeg1SharpIcon;
