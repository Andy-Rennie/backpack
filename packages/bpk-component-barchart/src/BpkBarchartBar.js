import React from 'react';
import PropTypes from 'prop-types';
import { cssModules } from 'bpk-react-utils';
import { borderRadiusXs } from 'bpk-tokens/tokens/base.es6';
import { remToPx } from './utils';

import STYLES from './bpk-barchart-bar.scss';

const getClassName = cssModules(STYLES);

const KEYCODES = {
  ENTER: 13,
  SPACEBAR: 32,
};

const handleKeyboardEvent = callback => (event) => {
  if (event.keyCode === KEYCODES.ENTER || event.keyCode === KEYCODES.SPACEBAR) {
    event.preventDefault();
    callback(event);
  }
};

const borderRadius = remToPx(borderRadiusXs);

const BpkBarchartBar = (props) => {
  const {
    x,
    y,
    width,
    height,
    className,
    label,
    onClick,
    outlier,
    selected,
    ...rest
  } = props;

  const classNames = [getClassName('bpk-barchart__bar')];
  if (className) { classNames.push(className); }
  if (outlier) { classNames.push(getClassName('bpk-barchart__bar--outlier')); }
  if (selected) { classNames.push(getClassName('bpk-barchart__bar--selected')); }
  if (onClick) { classNames.push(getClassName('bpk-barchart__bar--interactive')); }

  return (
    <g className={getClassName('bpk-barchart__bar-group')}>
      <title>{label}</title>
      <rect
        className={classNames.join(' ')}
        x={x}
        y={y}
        width={width}
        height={height}
        rx={borderRadius}
        ry={borderRadius}
        onClick={onClick || undefined}
        onKeyDown={onClick ? handleKeyboardEvent(onClick) : undefined}
        tabIndex={onClick ? 0 : undefined}
        role={onClick ? 'button' : undefined}
        aria-label={label}
        {...rest}
      />
    </g>
  );
};

BpkBarchartBar.propTypes = {
  height: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  outlier: PropTypes.bool,
  selected: PropTypes.bool,
};

BpkBarchartBar.defaultProps = {
  className: null,
  onClick: null,
  outlier: false,
  selected: false,
};

export default BpkBarchartBar;
