/**
 * Import the blocks
 */

import * as demo from './demo';

const {
	registerBlockType,
	registerBlockStyle,
} = wp.blocks;

[
	demo,
].forEach( block => {

	if ( ! block ) {
		return;
	}//end if

	const { name, settings } = block;
	registerBlockType( name, settings );

	const styles = block.styles || [];
	styles.forEach( style => registerBlockStyle( name, style ) );

} );
