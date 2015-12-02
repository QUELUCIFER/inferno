import Component              from './class/Component';
import render                 from './core/render';
import renderToString         from './core/renderToString';
import unmountComponentAtNode from './core/unmountComponentAtNode';
import FragmentValueTypes     from './enum/fragmentValueTypes';
import TemplateTypes          from './enum/templateTypes';
import createFragment         from './core/createFragment';
import createTemplate         from './core/createTemplate';
import clearDomElement        from './core/clearDomElement';
import createRef	          from './core/createRef';
import Events  	              from './events';

module.exports = {
	Component,
	render,
	renderToString,
	createFragment,
	createTemplate,
	unmountComponentAtNode,
	FragmentValueTypes,
	TemplateTypes,
	clearDomElement,
	createRef,
	Events
};
