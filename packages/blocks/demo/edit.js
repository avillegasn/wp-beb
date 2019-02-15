const { _x } = wp.i18n;
const {
	Component,
	Fragment,
} = wp.element;
const { RichText } = wp.editor;

export default class DemoEdit extends Component {

	render() {

		const {
			attributes: {
				greeting,
			},
			setAttributes,
		} = this.props;

		return (

			<Fragment>

				<RichText
					tagName="p"
					className="greeting"
					value={ greeting }
					onChange={ value => setAttributes( { greeting: value } ) }
					placeholder={ _x( 'Say something', 'user', 'wp-beb' ) }
				/>

			</Fragment>

		);

	}//end render()

}//end class

