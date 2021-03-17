const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginNavigation = require('@11ty/eleventy-navigation');
const markdownIt = require('markdown-it');
const moment = require('moment');
const filters = require('./utils/filters.js');
const transforms = require('./utils/transforms.js');
const shortcodes = require('./utils/shortcodes.js');
const iconsprite = require('./utils/iconsprite.js');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(syntaxHighlight);

	// Filters
	Object.keys(filters).forEach(filterName => {
		eleventyConfig.addFilter(filterName, filters[filterName]);
	});

	// Transforms
	Object.keys(transforms).forEach(transformName => {
		eleventyConfig.addTransform(transformName, transforms[transformName]);
	});

	// Shortcodes
	Object.keys(shortcodes).forEach(shortcodeName => {
		eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName]);
	});

	// Icon Sprite
	eleventyConfig.addNunjucksAsyncShortcode('iconsprite', iconsprite);

	// Asset Watch Targets
	eleventyConfig.addWatchTarget('./src/assets');

	// Markdown
	eleventyConfig.setLibrary(
		'md',
		markdownIt({
			html: true,
			breaks: true,
			linkify: true,
			typographer: true
		})
	);

	eleventyConfig.addFilter('dateString', date => {
		return moment(date).format('DD MMMM, YYYY');
	});
	eleventyConfig.addFilter('projectDate', date => {
		return moment(date).format('MMM YYYY');
	});

	eleventyConfig.addFilter('keys', obj => Object.keys(obj));

	// Layouts
	eleventyConfig.addLayoutAlias('base', 'base.njk');
	eleventyConfig.addLayoutAlias('post', 'post.njk');
	eleventyConfig.addLayoutAlias('page', 'page.njk');

	// Pass-through files
	eleventyConfig.addPassthroughCopy('src/robots.txt');
	eleventyConfig.addPassthroughCopy('src/site.webmanifest');
	eleventyConfig.addPassthroughCopy('src/assets/images');
	eleventyConfig.addPassthroughCopy('src/assets/fonts');

	// Deep-Merge
	eleventyConfig.setDataDeepMerge(true);

	// Base Config
	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: 'includes',
			layouts: 'layouts',
			data: 'data'
		},
		templateFormats: ['njk', 'md', '11ty.js'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk'
	};
};
