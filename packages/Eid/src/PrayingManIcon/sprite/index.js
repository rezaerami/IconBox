/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./PrayingManIcon.svg");
}

const PrayingManIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="PrayingManIcon"
      viewBox="0 0 32 32"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="PrayingManIconHref"
        xlinkHref={`${importPrefix}#PrayingManIcon`}
      />
    </svg>
  );
};

PrayingManIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

PrayingManIcon.defaultProps = {
  size: 1.5
};

export default PrayingManIcon;
