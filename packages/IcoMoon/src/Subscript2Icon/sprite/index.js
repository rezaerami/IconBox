/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./Subscript2Icon.svg");
}

const Subscript2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Subscript2Icon"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="Subscript2IconHref"
        xlinkHref={`${importPrefix}#Subscript2Icon`}
      />
    </svg>
  );
};

Subscript2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

Subscript2Icon.defaultProps = {
  size: 1.5
};

export default Subscript2Icon;
