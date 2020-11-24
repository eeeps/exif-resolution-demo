module.exports = function( eleventyConfig ) {

	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("style.css");
	eleventyConfig.addPassthroughCopy("lazyload.js");

	eleventyConfig.addShortcode( "image", function( img ) { 
		return `<figure>
	<img
		src="${ img[ '1x_url' ] }"
		style="background-image: url( ${ img[ 'lqip_with_exif_url'] } )"
		width="${ img[ 'resizedWidth' ] }"
		height="${ img[ 'resizedHeight' ] }"
		loading="lazy"
	/>
	<figcaption>
		${ img[ 'credit' ] } 
	</figcaption>
</figure>`;
	} );
};

// "https://o.img.rodeo/image/fetch/f_jpg,w_400/https://images.unsplash.com/photo-1584782930699-383ed067a486"