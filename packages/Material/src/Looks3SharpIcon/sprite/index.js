/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./Looks3SharpIcon.svg");
}

const Looks3SharpIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Looks3SharpIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="Looks3SharpIconHref"
        xlinkHref={`${importPrefix}#Looks3SharpIcon`}
      />
    </svg>
  );
};

Looks3SharpIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

Looks3SharpIcon.defaultProps = {
  size: 1.5
};

export default Looks3SharpIcon;
