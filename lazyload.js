const callback = ( entries, observer ) => {
		entries.forEach( entry => {
			const img = entry.target;
			img.src = img.dataset.fullsrc;
			observer.unobserve( img );
		} );
	},
	options = { rootMargin: '50%' },
	io = new IntersectionObserver( callback, options );

document.querySelectorAll( 'img[data-fullsrc]' ).forEach( img => {
	io.observe( img );
} );
