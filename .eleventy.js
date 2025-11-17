const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginNavigation = require('@11ty/eleventy-navigation');
const markdownIt = require('markdown-it');
const moment = require('moment');
const filters = require('./utils/filters.js');
const transforms = require('./utils/transforms.js');
const shortcodes = require('./utils/shortcodes.js');
const iconsprite = require('./utils/iconsprite.js');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');
const buildDir = 'dist';

const shouldTransformHTML = outputPath => outputPath && outputPath.endsWith('.html') && process.env.ELEVENTY_ENV === 'production';

const isHomePage = outputPath => outputPath === `${buildDir}/index.html`;

process.setMaxListeners(Infinity);
module.exports = {
    htmlmin: function (content, outputPath) {
        if (shouldTransformHTML(outputPath)) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
        }
        return content;
    },

    critical: async function (content, outputPath) {
        if (shouldTransformHTML(outputPath) && isHomePage(outputPath)) {
            try {
                const { generate } = await import('critical');
                const config = {
                    base: `${buildDir}/`,
                    html: content,
                    inline: true,
                    width: 1280,
                    height: 800
                };
                const { html } = await generate(config);
                return html;
            } catch (err) {
                console.error(err);
            }
        }
        return content;
    },
};

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

	// Add the critical transform directly here:
	eleventyConfig.addTransform('critical', async function (content, outputPath) {
		const buildDir = 'dist';
		const shouldTransformHTML = outputPath && outputPath.endsWith('.html') && process.env.ELEVENTY_ENV === 'production';
		const isHomePage = outputPath === `${buildDir}/index.html`;
		if (shouldTransformHTML && isHomePage) {
			try {
				const { generate } = await import('critical');
				const config = {
					base: `${buildDir}/`,
					html: content,
					inline: true,
					width: 1280,
					height: 800
				};
				const { html } = await generate(config);
				return html;
			} catch (err) {
				console.error(err);
			}
		}
		return content;
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

	// Tags
	eleventyConfig.addCollection('tagList', collection => {
		const tagsSet = {};
		collection.getAll().forEach(item => {
			if (!item.data.tags) return;
			item.data.tags
				.filter(tag => !['posts', 'all'].includes(tag))
				.forEach(tag => {
					if (!tagsSet[tag]) {
						tagsSet[tag] = [];
					}
					tagsSet[tag].push(item);
				});
		});
		return tagsSet;
	});

	// Categories
	eleventyConfig.addCollection('categoryList', collection => {
		let catSet = {};
		collection.getAll().forEach(item => {
			if (!item.data.categories) return;
			item.data.categories
				.filter(cat => !['posts', 'all'].includes(cat))
				.forEach(cat => {
					if (!catSet[cat]) {
						catSet[cat] = [];
					}
					catSet[cat].push(item);
				});
		});
		return catSet;
	});
	// Layouts
	eleventyConfig.addLayoutAlias('base', 'base.njk');
	eleventyConfig.addLayoutAlias('post', 'post.njk');
	eleventyConfig.addLayoutAlias('page', 'page.njk');

	// Pass-through files
	eleventyConfig.addPassthroughCopy('src/robots.txt');
	eleventyConfig.addPassthroughCopy('src/site.webmanifest');
	eleventyConfig.addPassthroughCopy('src/assets/images');
	eleventyConfig.addPassthroughCopy('src/assets/icons');
	eleventyConfig.addPassthroughCopy('src/assets/fonts');
	eleventyConfig.addPassthroughCopy('src/assets/audio');
	eleventyConfig.addPassthroughCopy('src/admin');

	// Deep-Merge
	eleventyConfig.setDataDeepMerge(true);

	// Base Config
	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: 'includes',
			layouts: 'layouts',
			data: 'data',
			admin: 'admin'
		},
		templateFormats: ['njk', 'md', '11ty.js'],
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk'
	};
};
