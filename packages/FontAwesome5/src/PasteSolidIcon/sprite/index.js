/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./PasteSolidIcon.svg");
}

const PasteSolidIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="PasteSolidIcon"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="PasteSolidIconHref"
        xlinkHref={`${importPrefix}#PasteSolidIcon`}
      />
    </svg>
  );
};

PasteSolidIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

PasteSolidIcon.defaultProps = {
  size: 1.5
};

export default PasteSolidIcon;
