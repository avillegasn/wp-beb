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
* change `WP_BEB_` to `EXAMPLE_ME_`

To build the code execute the following:

```
npm install && npm run build
```

It's safe to activate the plugin at this point. The Boilerplate adds a demo block and a demo plugin for the editor with its own demo sidebar. There will be no additional menu items, meta boxes, settings, or custom post types until you write the code for them.

You will want to change the content inside readme.txt with your own information before public distribution.

## Build Process

// TODO

## Contents

The WordPress Block Editor Boilerplate includes the following files:

// TODO

## Features

* The Boilerplate is based on the [Plugin API](http://codex.wordpress.org/Plugin_API), [Coding Standards](http://codex.wordpress.org/WordPress_Coding_Standards), and [Documentation Standards](https://make.wordpress.org/core/handbook/best-practices/inline-documentation-standards/php/).
* All files, functions, and variables are documented so that you know what you need to change.
* The Boilerplate includes all packages and dependencies to build the code using modern technologies.
* The Boilerplate uses a strict file organization scheme that makes it easy to organize the files that compose the plugin.
* The project includes a `.pot` file as a starting point for internationalization.

## License

The WordPress Block Editor Boilerplate is licensed under the GPL v2 or later.

> This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License, version 2, as published by the Free Software Foundation.

> This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

> You should have received a copy of the GNU General Public License along with this program; if not, write to the Free Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA

A copy of the license is included in the root of the plugin’s directory. The file is named `LICENSE`.

## Important Notes

### Licensing

The WordPress Block Editor Boilerplate is licensed under the GPL v2 or later; however, if you opt to use third-party code that is not compatible with v2, then you may need to switch to using code that is GPL v3 compatible.

For reference, [here's a discussion](http://make.wordpress.org/themes/2013/03/04/licensing-note-apache-and-gpl/) that covers the Apache 2.0 License used by [Bootstrap](http://twitter.github.io/bootstrap/).

### Includes

// TODO

# Credits

The WordPress Block Editor Boilerplate (`wp-beb`) was started in 2018 and released publicly in February 2019 by [Antonio Villegas](http://twitter.com/avillegasn/) and [David Aguilera](http://twitter.com/davilera/) from [Nelio Software](https://neliosoftware.com/) in order to serve as a basis for future plugin developments including that extend the WordPress Block Editor (aka Gutenberg). The Boilerplate adds a modern build process using `npm` as the key tool.

All the content in this repository is inspired by the following projects:

* The [WordPress Plugin Boilerplate](https://github.com/DevinVinson/WordPress-Plugin-Boilerplate): was started in 2011 by [Tom McFarlin](http://twitter.com/tommcfarlin/) and has since included a number of great contributions by Tom, [Devin Vinson](https://github.com/DevinVinson), [Josh Eaton](https://twitter.com/jjeaton), [Ulrich Pogson](https://twitter.com/grapplerulrich), and [Brad Vincent](https://twitter.com/themergency).

* [`create-guten-block`](https://github.com/ahmadawais/create-guten-block): a zero-configuration dev-toolkit (#0CJS) by [Ahmad Awais](https://ahmadawais.com) to develop WordPress Gutenberg blocks in a matter of minutes without configuring React, Webpack, Modern JavaScript (ES6, ES7, ES8, …) ESLint, Babel, etc.

* [`gutenblock`](https://github.com/zackify/gutenblock): a Gutenberg plugin creator + reusable inspector components with hot loading and code splits built in by [Zach Silveira](https://github.com/zackify).

## Documentation, FAQs, and More

If you’re interested in writing any documentation or creating tutorials please [let us know](https://neliosoftware.com/contact/).

