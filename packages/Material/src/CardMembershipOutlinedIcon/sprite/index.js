/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from "react";
import PropTypes from "prop-types";
import { useOptions, GlobalConfig } from "@snappmarket/config";

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require("./CardMembershipOutlinedIcon.svg");
}

const CardMembershipOutlinedIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : "";
  if (options.useSpriteFile && options.publicPath !== "/") {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CardMembershipOutlinedIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10
      }}
      fill="currentColor"
    >
      <use
        data-testid="CardMembershipOutlinedIconHref"
        xlinkHref={`${importPrefix}#CardMembershipOutlinedIcon`}
      />
    </svg>
  );
};

CardMembershipOutlinedIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number
};

CardMembershipOutlinedIcon.defaultProps = {
  size: 1.5
};

export default CardMembershipOutlinedIcon;
