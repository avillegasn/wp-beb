import '../../css/admin/plugin.scss';

import PluginComponent from './plugin-component.js';
import ElementIcon from '../../images/icon.svg';

const { registerPlugin } = wp.plugins;

registerPlugin( 'plugin-name', {
	icon: <ElementIcon />,
	render: PluginComponent,
} );
