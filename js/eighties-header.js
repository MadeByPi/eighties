/**
 * Scripts for the custom header.
*/
(function( w , d, $ ) {

    var
        $window =$( w),
        $masthead = $( '#masthead'),
        $siteBranding = $( '.site-branding' );

	// Set backstretch, because it's more browser friendly for setting a background image.
	$masthead.backstretch( $masthead.find('.screen-reader-text' ).data( 'backstretch' ) );

	// Set the height of the masthead. We use this height below.
	$masthead.data( 'height', $masthead.outerHeight() );

	$window.on('scroll', function( e ) {

        var height = $masthead.data( 'height' );

		if ( $window.width() > 800 ) {
			var position = w.scrollY,
				bottom   = w.innerHeight - d.getElementById( 'colophon' ).offsetHeight,
				content  = $( '#content' ).offset().top,
				footer   = $( '#colophon' ).offset().top - position;

			if ( position > 0 && content > position && footer > bottom ) {
				if ( position < height ) {
					$masthead.css({
						'height' : height - position + 'px',
						'overflow' : 'hidden'
					});

					$siteBranding.css({
						'opacity' : ( 1 - position / height * 2 )
					});
				} else {
					$masthead.css({
						'height' : '0px'
					});
				}
			} else if ( position <= 0 ) {
				$masthead.css({
					'height' : height
				});

				$siteBranding.css({
					'opacity' : 1
				});
			}

		} else {
			$masthead.css({
				'height' : height + "px"
			});

			$siteBranding.css({
				'opacity' : 1
			});
        }
    });

}(window,  document, window.jQuery ));