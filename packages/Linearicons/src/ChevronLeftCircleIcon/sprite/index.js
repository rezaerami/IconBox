/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./ChevronLeftCircleIcon.svg");
}

const ChevronLeftCircleIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ChevronLeftCircleIcon"
      viewBox="0 0 20 20"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="ChevronLeftCircleIconHref"
        xlinkHref={`${importPrefix}#ChevronLeftCircleIcon`}
      />
    </svg>
  );
};

ChevronLeftCircleIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

ChevronLeftCircleIcon.defaultProps = {
  size: 1.5
};

export default ChevronLeftCircleIcon;
