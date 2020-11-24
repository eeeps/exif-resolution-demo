module.exports = function( eleventyConfig ) {

	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("style.css");
	eleventyConfig.addPassthroughCopy("lazysizes.min.js");

	eleventyConfig.addShortcode( "image", function( img ) { 
		return `
<figure>
	<img
		src="${ img[ 'lqip_with_exif_url' ] }"
		data-srcset="${ img[ '1x_url'] } 1x,
		             ${ img[ '2x_without_exif_url'] } 2x"
		class="lazyload"
	/>
	<figcaption>
		${ img[ 'credit' ] } 
	</figcaption>
</figure>
`;
	} );
};

// "https://o.img.rodeo/image/fetch/f_jpg,w_400/https://images.unsplash.com/photo-1584782930699-383ed067a486"