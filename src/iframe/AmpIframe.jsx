import PropTypes from 'prop-types';
import React from 'react';

// @server-side class AmpIframe extends __VARIABLE__ {__CLEAR__}\nexports.default = AmpIframe;

/**
 * Amp iframe
 *
 * @namespace ima.ui.atom.iframe
 * @module ima.ui.atom
 */
export default class AmpIframe extends React.PureComponent {
  static get contextTypes() {
    return {
      $Utils: PropTypes.object
    };
  }

  render() {
    let helper = this.context.$Utils.$UIComponentHelper;
    let {
      src,
      srcDoc,
      width,
      height,
      scrolling,
      layout,
      sandbox,
      frameBorder,
      className,
      allowFullScreen,
      resizable
    } = this.props;
    let props = {
      src,
      srcDoc,
      width,
      height,
      scrolling,
      layout,
      sandbox,
      frameBorder,
      class: helper.cssClasses(className)
    };

    if (allowFullScreen) {
      props.allowFullScreen = '';
    }

    if (resizable) {
      props.resizable = '';
    }

    return (
      <amp-iframe
        {...props}
        {...helper.getDataProps(this.props)}
        {...helper.getAriaProps(this.props)}>
        {this.props.children || <div placeholder="" />}
      </amp-iframe>
    );
  }
}
