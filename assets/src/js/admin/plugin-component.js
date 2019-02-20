const { _x } = wp.i18n;
const { Fragment } = wp.element;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { dispatch } = wp.data;
const { createBlock } = wp.blocks;
const {
	Button,
	ColorPicker,
	PanelBody,
} = wp.components;

function addDemoBlock() {
	const demoBlock = createBlock( 'wp-beb/demo', {
		greeting: 'Hey there!',
		className: 'is-style-awesome',
	} );
	dispatch( 'core/editor' ).insertBlock( demoBlock );
}//end addDemoBlock()

const PluginComponent = () => (

	<Fragment>
		<PluginSidebarMoreMenuItem target="sidebar-name">
			My Sidebar
		</PluginSidebarMoreMenuItem>
		<PluginSidebar name="sidebar-name" title="My Sidebar">

			<PanelBody title={ _x( 'Color', 'text', 'wp-beb' ) }>
				<ColorPicker
					onChangeComplete={ ( value ) => console.log( `The selected color was: ${ value.hex }` ) }
				/>
			</PanelBody>

			<PanelBody title={ _x( 'Content', 'text', 'wp-beb' ) }>
				<Button
					className="wp-beb-plugin-button"
					isLarge
					onClick={ () => addDemoBlock() }
				>
					{ _x( 'Add a demo block', 'text', 'wp-beb' ) }
				</Button>
			</PanelBody>

		</PluginSidebar>
	</Fragment>
);
export default PluginComponent;
