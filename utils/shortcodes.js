module.exports = {
	icon: function (name) {
		return `<svg class="icon icon--${name}" role="img" aria-hidden="true" width="24" height="24">
                    <use xlink:href="#icon-${name}"></use>
                </svg><span class="sr-only">${name}</span>`;
	},

	lightbox: function (src, alt) {
		return `<a data-fslightbox href="/assets/images/${src}"><img src="/assets/images/${src}" alt="${alt}" /></a>`;
	}
};
