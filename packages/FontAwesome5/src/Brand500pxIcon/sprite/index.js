/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./Brand500pxIcon.svg");
}

const Brand500pxIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Brand500pxIcon"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="Brand500pxIconHref"
        xlinkHref={`${importPrefix}#Brand500pxIcon`}
      />
    </svg>
  );
};

Brand500pxIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

Brand500pxIcon.defaultProps = {
  size: 1.5
};

export default Brand500pxIcon;
