import React from 'react';
import Loader from '../loader/Loader';
import Sizer from '../sizer/Sizer';

const MIN_EXTENDED_PADDING = 500;

/**
 * Html classic iframe
 *
 * @class HtmlIframe
 * @namespace app.component.atom.iframe
 * @module app
 * @submodule app.component
 */

export default class HtmlIframe extends React.Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			visibleInViewport: props.noloading || false
		};

		this._mounted = false;

		this._throttledCheckVisibility = this.utils.$UIComponentHelper.throttle(
			this._checkVisibility,
			100,
			this
		);
	}

	get utils() {
		return this.context.$Utils || this.props.$Utils;
	}

	componentDidMount() {
		this._mounted = true;
		if (this.state.visibleInViewport === false) {
			this._bindEventListeners();
			this._checkVisibility();
		}
	}

	componentWillUnmount() {
		this._mounted = false;
		this._unbindEventListeners();
	}


	render() {
		let helper = this.utils.$UIComponentHelper;

		return (
			<div
					ref = 'root'
					className = { helper.cssClasses({
						'atm-iframe': true,
						'atm-overflow': true,
						'atm-placeholder': !this.state.visibleInViewport,
						'atm-responsive': this.props.layout === 'responsive',
						'atm-fill': this.props.layout === 'fill'
					}, this.props.className) }
					style = {this.props.layout === 'responsive' ?
						{}
					:
						{
							width: this.props.width || 'auto',
							height: this.props.height || 'auto'
						}
					}
					{...helper.getDataProps(this.props)}>
				{
					this.props.layout === 'responsive' ?
						<Sizer
								width = { this.props.width }
								height = { this.props.height }
								placeholder = { true }/>
					:
						null
				}
				{
					this.state.visibleInViewport ?
						<iframe
								src = { this.props.src }
								width = { this.props.width }
								height = { this.props.height }
								scrolling = { this.props.scrolling }
								sandbox = { this.props.sandbox }
								frameBorder = { this.props.frameBorder }
								allowFullScreen = { this.props.allowFullScreen }
								className = { helper.cssClasses({
									'atm-fill': true
								}) }/>
					:
						<Loader mode = 'small' layout = 'center'/>
				}
				<noscript
						className = 'atm-fill'
						style = { {
							display: 'block',
							width: this.props.width || 'auto',
							height: this.props.height || 'auto'
						} }
						dangerouslySetInnerHTML = { {
							__html: `<iframe
								src="${this.props.src}"
								width="${this.props.width || 'auto'}"
								height="${this.props.height || 'auto'}"
								${ this.props.sandbox ? `sandbox="${this.props.sandbox}"` : '' }
								scrolling="${this.props.scrolling || 'no'}"
								frameborder="${this.props.frameBorder || '0'}"
								allowfullscreen="${this.props.allowFullScreen || '0'}"
								class="atm-fill atm-loaded"></iframe>`
						} }/>
			</div>
		);
	}

	_unbindEventListeners() {
		this.utils.$Window.unbindEventListener(window, 'resize', this._throttledCheckVisibility);
		this.utils.$Window.unbindEventListener(window, 'scroll', this._throttledCheckVisibility);
	}

	_bindEventListeners() {
		this.utils.$Window.bindEventListener(window, 'resize', this._throttledCheckVisibility);
		this.utils.$Window.bindEventListener(window, 'scroll', this._throttledCheckVisibility);
	}

	_checkVisibility() {
		if (this._mounted) {
			let rootElement = this.refs.root;
			let extendedPadding = Math.max(
				this.utils.$UIComponentHelper.getWindowViewportRect().height,
				MIN_EXTENDED_PADDING
			);
			let rootElementRect = this.utils.$UIComponentHelper.getBoundingClientRect(
				rootElement,
				{ width: this.props.width, height: this.props.height },
				extendedPadding
			);

			if (this.state.visibleInViewport === false &&
					this.utils.$UIComponentHelper.getPercentOfVisibility(rootElementRect) > 0) {
				this._unbindEventListeners();
				this.setState({ visibleInViewport: true });
			}
		}
	}
}

HtmlIframe.contextTypes = {
	$Utils: React.PropTypes.object
};
