const { _x } = wp.i18n;
const {
	Component,
} = wp.element;
const { RichText } = wp.editor;
const { Dashicon } = wp.components;

export default class DemoEdit extends Component {

	render() {

		const {
			attributes: {
				greeting,
			},
			setAttributes,
			className,
		} = this.props;

		return (

			<div className={ className }>

				<Dashicon icon="heart" />
				<RichText
					tagName="p"
					className="greeting"
					value={ greeting }
					onChange={ value => setAttributes( { greeting: value } ) }
					placeholder={ _x( 'Say something', 'user', 'wp-beb' ) }
				/>

			</div>

		);

	}//end render()

}//end class

