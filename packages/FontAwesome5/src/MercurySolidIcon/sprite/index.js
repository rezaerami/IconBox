/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./MercurySolidIcon.svg");
}

const MercurySolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="MercurySolidIcon"
      viewBox="0 0 288 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="MercurySolidIconHref"
        xlinkHref={`${importPrefix}#MercurySolidIcon`}
      />
    </svg>
  );
};

MercurySolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

MercurySolidIcon.defaultProps = {
  size: 1.5
};

export default MercurySolidIcon;
