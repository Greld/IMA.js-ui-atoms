import UIComponentHelper from './UIComponentHelper';

import Headline from './headline/Headline';
import H1 from './headline/H1';
import H2 from './headline/H2';
import H3 from './headline/H3';
import H4 from './headline/H4';
import H5 from './headline/H5';
import H6 from './headline/H6';

import Iframe from './iframe/Iframe';

import Image from './image/Image';

import Li from './li/Li';

import Link from './link/Link';

import List from './list/List';

import Loader from './loader/Loader';

import Paragraph from './paragraph/Paragraph';

import Sizer from './sizer/Sizer';

import Video from './video/Video';

let defaultDependencies = ['$Router', '$Window'];

let $registerImaPlugin = (ns) => {
	ns.namespace('ima.ui.atom');
	ns.namespace('ima.ui.atom.headline');
	ns.namespace('ima.ui.atom.iframe');
	ns.namespace('ima.ui.atom.image');
	ns.namespace('ima.ui.atom.li');
	ns.namespace('ima.ui.atom.link');
	ns.namespace('ima.ui.atom.list');
	ns.namespace('ima.ui.atom.loader');
	ns.namespace('ima.ui.atom.paragraph');
	ns.namespace('ima.ui.atom.sizer');
	ns.namespace('ima.ui.atom.video');

	ns.ima.ui.atom.headline.Headline = Headline;
	ns.ima.ui.atom.headline.H1 = H1;
	ns.ima.ui.atom.headline.H2 = H2;
	ns.ima.ui.atom.headline.H3 = H3;
	ns.ima.ui.atom.headline.H4 = H4;
	ns.ima.ui.atom.headline.H5 = H5;
	ns.ima.ui.atom.headline.H6 = H6;

	ns.ima.ui.atom.iframe.Iframe = Iframe;

	ns.ima.ui.atom.image.Image = Image;

	ns.ima.ui.atom.link.Link = Link;

	ns.ima.ui.atom.li.Li = Li;

	ns.ima.ui.atom.list.List = List;

	ns.ima.ui.atom.loader.Loader = Loader;

	ns.ima.ui.atom.paragraph.Paragraph = Paragraph;

	ns.ima.ui.atom.sizer.Sizer = Sizer;

	ns.ima.ui.atom.video.Video = Video;

	ns.ima.ui.atom.UIComponentHelper = UIComponentHelper;
	ns.ima.ui.atom.defaultDependencies = defaultDependencies;
};

let initBind = (ns, oc, config) => {
	oc.inject(UIComponentHelper, defaultDependencies);
};

export {
	UIComponentHelper,
	defaultDependencies,
	Headline,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Iframe,
	Image,
	Link,
	Li,
	List,
	Loader,
	Paragraph,
	Sizer,
	Video,
	initBind,
	$registerImaPlugin
};
