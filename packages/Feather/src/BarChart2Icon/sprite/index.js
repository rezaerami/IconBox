/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./BarChart2Icon.svg");
}

const BarChart2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="BarChart2Icon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="BarChart2IconHref"
        xlinkHref={`${importPrefix}#BarChart2Icon`}
      />
    </svg>
  );
};

BarChart2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

BarChart2Icon.defaultProps = {
  size: 1.5
};

export default BarChart2Icon;
