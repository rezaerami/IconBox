/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./Spinner8Icon.svg");
}

const Spinner8Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Spinner8Icon"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="Spinner8IconHref"
        xlinkHref={`${importPrefix}#Spinner8Icon`}
      />
    </svg>
  );
};

Spinner8Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

Spinner8Icon.defaultProps = {
  size: 1.5
};

export default Spinner8Icon;
