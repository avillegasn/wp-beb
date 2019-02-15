const { RichText } = wp.editor;

const DemoSave = props => {

	const { greeting } = props.attributes;

	return (

		<RichText.Content
			tagName="p"
			className="greeting"
			value={ greeting }
		/>

	);

};

export default DemoSave;
