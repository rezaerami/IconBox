/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./GrinBeamRegularIcon.svg");
}

const GrinBeamRegularIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="GrinBeamRegularIcon"
      viewBox="0 0 496 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="GrinBeamRegularIconHref"
        xlinkHref={`${importPrefix}#GrinBeamRegularIcon`}
      />
    </svg>
  );
};

GrinBeamRegularIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

GrinBeamRegularIcon.defaultProps = {
  size: 1.5
};

export default GrinBeamRegularIcon;
