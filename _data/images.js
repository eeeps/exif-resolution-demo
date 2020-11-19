module.exports = ( data ) => {
	const input = [
		{
			"id": "mahyar_motebassem",
			"unsplash_name": "mahyar motebassem",
			"unsplash_account": "mahyarmotebassem",
			"unsplash_id": "photo-1571407970349-bc81e7e96d47",
			"unsplash_other_id": "pGA4zHvpo5E",
			"width": 4815,
			"height": 3852
		},
		{
			"id": "nicolas_perondi",
			"unsplash_name": "Nicolás Perondi",
			"unsplash_account": "nicoperondi",
			"unsplash_id": "photo-1520201163981-8cc95007dd2a",
			"unsplash_other_id": "UxRhrU8fPHQ",
			"width": 2736,
			"height": 4104
		},
		{
			"id": "fatima_akram",
			"unsplash_name": "Fatima Akram",
			"unsplash_account": "fatimaakram",
			"unsplash_id": "photo-1541745537411-b8046dc6d66c",
			"unsplash_other_id": "uU0Anw-8Vsg",
			"width": 4016,
			"height": 6016
		},
		{
			"id": "louis_hansel",
			"unsplash_name": "Louis Hansel @shotsoflouis",
			"unsplash_account": "louishansel",
			"unsplash_id": "photo-1584782930699-383ed067a486",
			"unsplash_other_id": "RERm30c8jbY",
			"width": 5184,
			"height": 3456
		},
		{
			"id": "karthik_garikapati",
			"unsplash_name": "Karthik Garikapati",
			"unsplash_account": "kgarikapati7",
			"unsplash_id": "photo-1574126154517-d1e0d89ef734",
			"unsplash_other_id": "oBbTc1VoT-0",
			"width": 3264,
			"height": 2448
		}
	];
	return input.reduce( ( images, image ) => {
		const { id, unsplash_name, unsplash_account, width, height } = image;

		const maxLength = 400;
		let resizedWidth, resizedHeight;
		if ( width > height ) {
			resizedWidth = maxLength;
			resizedHeight = Math.ceil( ( resizedWidth / width ) * height );
		} else {
			resizedHeight = maxLength;
			resizedWidth = Math.ceil( ( resizedHeight / height ) * width );
		}
		
		images[ id ] = {
			"1x_url": `/images/1x/${ id }.jpg`,
			"2x_with_exif_url": `/images/2x/exif/${ id }.jpg`,
			"2x_without_exif_url": `/images/2x/no-exif/${ id }.jpg`,
			lqip_with_exif_url: `/images/lqip/exif/${ id }.jpg`,
			lqip_without_exif_url: `/images/lqip/no-exif/${ id }.jpg`,
			credit: `<span>Photo by <a href=\"https://unsplash.com/@${ unsplash_account }?utm_source=unsplash&amp,utm_medium=referral&amp,utm_content=creditCopyText\">${ unsplash_name }</a> on <a href=\"https://unsplash.com/s/photos/pizza?utm_source=unsplash&amp,utm_medium=referral&amp,utm_content=creditCopyText\">Unsplash</a></span>`,
			resizedWidth: resizedWidth,
			resizedHeight: resizedHeight
		};
		return images;
	}, {} );
};