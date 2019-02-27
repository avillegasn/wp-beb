# WordPress Block Editor Boilerplate

A standardized, organized, modern foundation for building high-quality WordPress Plugins that extend the block editor.

## Installation

The Boilerplate can be download directly into your plugins folder "as-is".

```
git clone https://github.com/avillegasn/wp-beb.git
```

You will want to rename it and the content inside of it to fit your needs. For example, if your plugin is named 'example-me' then:

* rename files from `wp-beb` to `example-me`
* change `wp-beb` to `example-me`
* change `wp_beb` to `example_me`
* change `WP_BEB` to `EXAMPLE_ME`

To build the code execute the following:

```
npm install && npm run build
```

It's safe to activate the plugin at this point. The Boilerplate adds a demo block and a demo plugin for the editor with its own demo sidebar. There will be no additional blocks, editor plugins, menu items, meta boxes, settings, or custom post types until you write the code for them.

You will want to change the content inside [readme.txt](./readme.txt) with your own information before public distribution.

## Build Process

Requirements:

* [Node.js](https://nodejs.org) v8.9.1 or later.
* [npm](https://www.npmjs.com/get-npm) v5.5.1 or later.
* [Composer](https://getcomposer.org/) v1.8.1 or later.

To compile and generate the build files just execute the following command on your terminal:

```
npm run start
```
This will download the Node.js and PHP dependencies under `node_modules` and `vendor` folders respectively. Once executed, the previous command will continuously watch any change in JS/CSS files and re-build them.

The Boilerplate provides these additional commands:

* `npm run dev` Build files and watch for changes.
* `npm run build` Build files and minify JSS and CSS.
* `npm run lint-php` Run PHP_CodeSniffer on PHP files to detect errors.
* `npm run lint-php:fix` Run phpcbf to try to fix PHP errors.
* `npm run lint-css` Run `stylelint` on SCSS files to detect errors.
* `npm run lint-css:fix` Try to fix errors on SCSS files.
* `npm run lint-js` Run `eslint` on JS files to detect errors.
* `npm run lint-js:fix` Try to fix errors on JS files.
* `npm run lint` Run linting process on PHP, SCSS and JS files.
* `npm run update:packages` Update package dependencies in Node.js.

## Contents

The WordPress Block Editor Boilerplate includes the following files:

* `.babelrc`. [Babel](https://babeljs.io/docs/en/config-files) config file.
* `.editorconfig`. [EditorConfig](https://editorconfig.org/) file that helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.
* `.eslintignore`. Used to exclude certain files from [ESLint](https://eslint.org/) linting process.
* `.eslintrc`. [ESLint](https://eslint.org/docs/user-guide/configuring) config file.
* `.gitattributes`. [Text file](https://git-scm.com/docs/gitattributes) that gives attributes to pathnames in Git.
* `.gitignore`. Used to exclude certain files from the repository.
* `composer.json`. Describes the [PHP dependencies](https://getcomposer.org/doc/01-basic-usage.md) of the project and may contain other metadata as well.
* `composer.lock`. Used to lock multiple developers working on the same project to the same versions of PHP dependencies.
* `index.php`. To hide the inner file structure in the server whatever that be.
* `LICENSE.txt`. Copy of the [GNU GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html) license.
* `package-lock.json`. Used to [lock multiple developers](https://docs.npmjs.com/files/package-lock.json.html) working on the same project to the same versions of NPM dependencies.
* `package.json`. [Manifest file](https://docs.npmjs.com/files/package.json.html) for the project. Central repository of configuration where you will find the names of the packages required and the CLI commands you can use to manage the project.
* `phpcs.ruleset.xml`. [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage#using-a-default-configuration-file) config file.
* `postcss.config.js`. [PostCSS](https://github.com/postcss/postcss-loader) config file.
* `README.md`. The file that you’re currently reading.
* `readme.txt`. The template for the [WordPress plugin readme](https://developer.wordpress.org/plugins/wordpress-org/how-your-readme-txt-works/) file.
* `webpack.config.js`. Config file for [webpack](https://webpack.js.org/configuration/).
* `wp-beb.php`. Main file of the WordPress plugin.
* An `assets` directory that contains CSS, JS and image resources.
* A `languages` directory that contains the translation files for [i18n](https://codex.wordpress.org/I18n_for_WordPress_Developers).
* A `packages` directory that contains block definitions to extend the WordPress block editor.

## Features

* The Boilerplate is based on the [Plugin API](http://codex.wordpress.org/Plugin_API), [Coding Standards](http://codex.wordpress.org/WordPress_Coding_Standards), and [Documentation Standards](https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/php/).
* All files, functions, and variables are documented so that you know what you need to change.
* The Boilerplate includes all packages and dependencies to build the code using modern technologies.
* The Boilerplate uses a strict file organization scheme that makes it easy to organize the files that compose the plugin.
* The project includes a `.pot` file as a starting point for internationalization inside `languages` folder.

## License

The WordPress Block Editor Boilerplate is licensed under the GPL v2 or later.

> This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License, version 2, as published by the Free Software Foundation.
>
> This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
>
> You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA

A copy of the license is included in the root of the plugin’s directory. The file is named `LICENSE`.

## Important Notes

### Licensing

The WordPress Block Editor Boilerplate is licensed under the GPL v2 or later; however, if you opt to use third-party code that is not compatible with v2, then you may need to switch to using code that is GPL v3 compatible.

For reference, [here's a discussion](http://make.wordpress.org/themes/2013/03/04/licensing-note-apache-and-gpl/) that covers the Apache 2.0 License used by [Bootstrap](http://twitter.github.io/bootstrap/).

### Includes

Note that if you plan to extend the block editor, the files should be placed in the following locations:

* `packages/blocks` is where custom block definitions reside. You will find a `demo` block that serves as an example of custom block that you can delete or modify. Remember to import your blocks in the file `packages/blocks/index.js` so that they are built properly.
* `assets/src/js/admin` is for all admin-specific functionality. You will find an example of editor plugin in `plugin.js` that extends the block editor. You can delete it or modify such plugin.
* `wp-beb.php` contains the function `enqueue_block_editor_assets` where you should enqueue the new files you create in `assets/src/js` and `assets/src/css` that compile into `assets/dist/js` and `assets/dist/css`, respectively.

# Credits

The WordPress Block Editor Boilerplate (`wp-beb`) was started in 2018 and released publicly in February 2019 by [Antonio Villegas](http://twitter.com/avillegasn/) and [David Aguilera](http://twitter.com/davilera/) from [Nelio Software](https://neliosoftware.com/) in order to serve as a basis for future plugin developments including that extend the WordPress Block Editor (aka Gutenberg). The Boilerplate adds a modern build process using `npm` as the key tool.

All the content in this repository is inspired by the following projects:

* The [WordPress Plugin Boilerplate](https://github.com/DevinVinson/WordPress-Plugin-Boilerplate): was started in 2011 by [Tom McFarlin](http://twitter.com/tommcfarlin/) and has since included a number of great contributions by Tom, [Devin Vinson](https://github.com/DevinVinson), [Josh Eaton](https://twitter.com/jjeaton), [Ulrich Pogson](https://twitter.com/grapplerulrich), and [Brad Vincent](https://twitter.com/themergency).

* [`create-guten-block`](https://github.com/ahmadawais/create-guten-block): a zero-configuration dev-toolkit (#0CJS) by [Ahmad Awais](https://ahmadawais.com) to develop WordPress Gutenberg blocks in a matter of minutes without configuring React, Webpack, Modern JavaScript (ES6, ES7, ES8, …) ESLint, Babel, etc.

* [`gutenblock`](https://github.com/zackify/gutenblock): a Gutenberg plugin creator + reusable inspector components with hot loading and code splits built in by [Zach Silveira](https://github.com/zackify).

## Documentation, FAQs, and More

If you’re interested in writing any documentation or creating tutorials please [let us know](https://neliosoftware.com/contact/).

