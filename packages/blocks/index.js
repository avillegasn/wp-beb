/**
 * Import the blocks.
 */

import * as demo from './demo';

const {
	registerBlockType,
	registerBlockStyle,
} = wp.blocks;

[
	demo,

	// Add more custom blocks here.

].forEach( block => {

	if ( ! block ) {
		return;
	}//end if

	// Register the block in the editor.
	const { name, settings } = block;
	registerBlockType( name, settings );

	// Register new block styles.
	const styles = block.styles || [];
	styles.forEach( style => registerBlockStyle( name, style ) );

} );
