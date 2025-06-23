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

- [Install](#install)
- [Demonstration](#demonstration)
- [Example](#example)
- [ssr](#ssr)
  * [Client-side](#client-side)
- [Modules](#modules)
  * [Bundler](#bundler)
  * [pre-bundled](#pre-bundled)
- [CSS](#css)
- [develop](#develop)

<!-- tocstop -->

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

ScrollProgress.define()
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

define()  // must call CustomElementRegistry.define()

// TAG is the element name
const els = document.querySelector(TAG)
```

## Modules

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### Bundler

Import as normal.

```js
// this is the full version, with rendering logic
import { ScrollProgress } from '@substrate-system/scroll-progress'
import '@substrate-system/scroll-progress/css'
// or minified css
import '@substrate-system/scroll-progress/min/css'

// must define the component
ScrollProgress.define()
```

### pre-bundled

This is a bundle of the progress component and its one dependency,
[raf-scroll](https://github.com/substrate-system/raf-scroll).

It is minifed, and can be directly included in the HTML. This will
define the component with its default name.

This is appropriate for SSR situations only. In the interest of keeping file
sizes small, this cannot render.

#### Copy

```sh
cp ./node_modules/@substrate-system/scroll-progress/dist/browser.min.js ./public/scroll-progress.min.js
```

#### Link

```html
<body>
    <scroll-progress></scroll-progress>
</div>
<script type="module" src="./scroll-progress.min.js"></script>
```

----------------------------------------------------------------------


## CSS

Override the variable `--scroll-progress-color` to customize the color.

```css
.scroll-progress {
    --scroll-progress-color: pink;
}
```

## develop

Start a localhost server:

```sh
npm start
```
