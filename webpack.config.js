const path = require( 'path' );
const webpack = require( 'webpack' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const ImageminPlugin = require( 'imagemin-webpack-plugin' ).default;
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const WebpackRTLPlugin = require( 'webpack-rtl-plugin' );
const ProgressBarPlugin = require( 'progress-bar-webpack-plugin' );
const { exec } = require( 'child_process' );

const inProduction = ( 'production' === process.env.NODE_ENV );

const config = {

	// Ensure modules like magnific know jQuery is external (loaded via WP).
	externals: {
		$: 'jQuery',
		jquery: 'jQuery',
		lodash: 'lodash',
		react: 'React',
		localStorage: 'localStorage',
	},
	devtool: 'source-map',
	module: {
		rules: [

			// Use Babel to compile JS.
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: [
					'babel-loader',
				],
			},

			// Create RTL styles.
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract( 'style-loader' ),
			},

			// SASS to CSS.
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract( {
					use: [ {
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					}, {
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							outputStyle: ( inProduction ? 'compressed' : 'nested' ),
						},
					} ],
				} ),
			},

			// Image files.
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]',
							publicPath: '../',
						},
					},
				],
			},

			// SVG files.
			{
				test: /.svg$/,
				use: [
					{
						loader: 'svg-react-loader',
					},
				],
			},
		],
	},

	// Plugins. Gotta have em'.
	plugins: [

		new ProgressBarPlugin( { clear: false } ),

		// Removes the "dist" folder before building.
		new CleanWebpackPlugin( [ 'assets/dist' ] ),

		new ExtractTextPlugin( 'css/[name].css' ),

		// Create RTL css.
		new WebpackRTLPlugin(),

		// Copy images and SVGs
		new CopyWebpackPlugin( [ { from: 'assets/src/images', to: 'images' } ] ),

		// Copy index.php to all dist directories.
		new CopyWebpackPlugin( [ { from: 'index.php', to: '.' } ] ),
		new CopyWebpackPlugin( [ { from: 'index.php', to: './js' } ] ),
		new CopyWebpackPlugin( [ { from: 'index.php', to: './css' } ] ),

		// Minify images.
		// Must go after CopyWebpackPlugin above: https://github.com/Klathmon/imagemin-webpack-plugin#example-usage
		new ImageminPlugin( { test: /\.(jpe?g|png|gif|svg)$/i } ),

	],
};

module.exports = [

	Object.assign( {
		entry: {
			blocks: './packages/blocks/index.js',
		},

		// Tell webpack where to output.
		output: {
			path: path.resolve( __dirname, './assets/dist/' ),
			filename: 'js/[name].js',
		},
	}, config ),

	Object.assign( {
		entry: {
			plugin: [ './assets/src/js/admin/plugin.js' ],
		},
		output: {
			path: path.resolve( __dirname, './assets/dist/' ),
			filename: 'js/[name].js',
		},
	}, config ),

];

// inProd?
if ( inProduction ) {

	exec( 'wp i18n make-pot . languages/wp-beb.pot --exclude=assets/dist' );

	// Uglify JS.
	config.plugins.push( new webpack.optimize.UglifyJsPlugin( { sourceMap: true } ) );

	// Minify CSS.
	config.plugins.push( new webpack.LoaderOptionsPlugin( { minimize: true } ) );

}
