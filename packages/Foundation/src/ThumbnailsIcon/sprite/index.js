/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./ThumbnailsIcon.svg");
}

const ThumbnailsIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ThumbnailsIcon"
      viewBox="0 0 100 100"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="ThumbnailsIconHref"
        xlinkHref={`${importPrefix}#ThumbnailsIcon`}
      />
    </svg>
  );
};

ThumbnailsIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

ThumbnailsIcon.defaultProps = {
  size: 1.5
};

export default ThumbnailsIcon;
