# scroll progress
[![tests](https://img.shields.io/github/actions/workflow/status/substrate-system/scroll-progress/nodejs.yml?style=flat-square)](https://github.com/substrate-system/scroll-progress/actions/workflows/nodejs.yml)
[![types](https://img.shields.io/npm/types/@substrate-system/scroll-progress?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/scroll-progress?cache-control=no-cache)](https://packagephobia.com/result?p=@substrate-system/scroll-progress)
[![gzip size](https://img.shields.io/bundlephobia/minzip/@substrate-system/scroll-progress?style=flat-square)](https://bundlephobia.com/package/@substrate-system/scroll-progress)
[![license](https://img.shields.io/badge/license-Big_Time-blue?style=flat-square)](LICENSE)


A progress bar that shows how far down the page you have scrolled,
as a web component.

This is implemented as a ["split component"](https://www.spicyweb.dev/web-components-ssr-node/),
meaning that it should be easy to render this to a string of HTML in node.

<details><summary><h2>Contents</h2></summary>
<!-- toc -->
</details>

## Install

```sh
npm i -S @substrate-system/scroll-progress
```

## Demonstration

See [substrate-system.github.io/scroll-progress](https://substrate-system.github.io/scroll-progress/)
for an example with the default CSS.

## Example

```js
// index.js
import { ScrollProgress } from '@substrate-system/scroll-progress'
```

```html
<!-- index.html -->
<body>
    <div id="root">
        <scroll-example></scroll-example>
    </div>

    <script type="module" src="./index.js"></script>
</body>
```

## ssr

In node or another servers-side runtime, import the `/ssr` path.

```js
import { html, outerHTML } from '@substrate-system/scroll-progress/ssr'

const innerHTML = html()
// does not include the custom element tag, only the inner HTML.

const element = outerHTML()
// => '<scroll-progress>...</scroll-progress>'
```

### Client-side

If you "pre-render" this servers-side, then you
can include the "light" version, which is just the client-side JS, no rendering
logic.

```js
import { define, TAG } from '@substrate-system/scroll-progress/client'

define()

// TAG is the element name
const els = document.querySelector(TAG)
```

## Modules

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### Bundler

Import as normal.

```js
import '@substrate-system/scroll-progress'
import '@substrate-system/scroll-progress/css'
// or minified css
import '@substrate-system/scroll-progress/min/css'
```

### pre-bundled

This is a bundle of the progress component and its one dependency,
[raf-scroll](https://github.com/bicycle-codes/raf-scroll).

```sh
cp ./node_modules/@substrate-system/scroll-progress/dist/index.min.js ./public/scroll-progress.min.js
```

Then link to the bundled file, and you can use the html element.

```html
<body>
    <scroll-progress></scroll-progress>
</div>
<script type="module" src="./scroll-progress.js"></script>
```

### pre-bundled + minifed
Copy the bundled and minified file to a location that is accessible to your web server:

```sh
cp ./node_modules/@substrate-system/scroll-progress/dist/index.bundle.min.js ./public/scroll-progress.min.js
```

Link to the minified file in HTML:

```html
<body>
    <scroll-progress></scroll-progress>
</div>
<script type="module" src="./scroll-progress.min.js"></script>
```

## css
Override the variable `--scroll-progress-color` to customize the color.

```css
.scroll-progress {
    --scroll-progress-color: pink;
}
```

### pre-bundled
First copy a bundled file to a place where your webserver can access it.

```sh
cp ./node_modules/@substrate-system/scroll-progress/dist/index.bundle.min.js ./public/scroll-progress.js
cp ./node_modules/@substrate-system/scroll-progress/dist/index.min.css ./public/scroll-progress.css
```

Then include a script tag in HTML, and use the component like any other HTML element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- link to the css -->
    <link rel="stylesheet" href="./scroll-progress.css">
    <title>Example</title>
</head>

<body>
    <div id="root">
        <scroll-progress></scroll-progress>
    </div>

    <!-- link to JS -->
    <script type="module" src="./scroll-progress.js"></script>
</body>
</html>
```

## develop

Start a localhost server:

```sh
npm start
```
