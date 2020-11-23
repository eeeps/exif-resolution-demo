const callback = ( entries, observer ) => {
		entries.forEach( entry => {
			const img = entry.target;
			img.setAttribute( 'srcset', img.dataset.srcset ); 
			observer.unobserve( img );
		} );
	},
	options = { rootMargin: '50%' },
	io = new IntersectionObserver( callback, options );

document.querySelectorAll( 'img[data-srcset]' ).forEach( img => {
	io.observe( img );
} );
