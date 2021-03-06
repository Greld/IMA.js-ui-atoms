import PropTypes from 'prop-types';
import React from 'react';

// @server-side class AmpImage extends __VARIABLE__ {__CLEAR__}\nexports.default = AmpImage;

/**
 * Amp image
 *
 * @namespace ima.ui.atom.image
 * @module ima.ui.atom
 */
export default class AmpImage extends React.PureComponent {
  static get contextTypes() {
    return {
      $Utils: PropTypes.object
    };
  }

  render() {
    let helper = this.context.$Utils.$UIComponentHelper;
    let {
      src,
      srcSet,
      sizes,
      width,
      height,
      layout,
      alt,
      noloading,
      className
    } = this.props;

    return (
      <amp-img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        width={width}
        height={height}
        layout={layout}
        alt={alt}
        noloading={noloading ? '' : null}
        class={helper.cssClasses(className)}
        {...helper.getDataProps(this.props)}
        {...helper.getAriaProps(this.props)}
      />
    );
  }
}
