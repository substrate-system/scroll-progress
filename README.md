# scroll progress
![tests](https://github.com/bicycle-codes/scroll-progress/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@bicycle-codes/scroll-progress?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

A progress bar that shows how far down the page you have scrolled, implemented as a web component.

## demonstration

See [bicycle-codes.github.io/scroll-progress](https://bicycle-codes.github.io/scroll-progress/) for an example with the default CSS.

## install

```sh
npm i -S @bicycle-codes/scroll-progress
```

## use
You've got options.

### Bundler
Use this with a bundler by using `import` syntax, and calling and `Tonic.add`:

```js
import Tonic from '@bicycle-codes/tonic'
import { ScrollProgress } from '@bicycle-codes/scroll-progress'
import '@bicycle-codes/scroll-progress/index.css'

function ScrollExample () {
    return this.html`
        <scroll-progress class="scroll example" id="example"></scroll-progress>
    `
}

Tonic.add(ScrollProgress)
Tonic.add(ScrollExample)
```

### pre-bundled
First copy the bundled file to a location that is accessible to your web server:

```sh
cp ./node_modules/@bicycle-codes/scroll-progress/dist/index.bundle.js ./public/scroll-progress.js
```

Then link to the bundled file, and you can use as an html element.

```html
<body>
    <scroll-example></scroll-example>
</div>
<script type="module" src="./scroll-progress.js"></script>
```

### pre-bundled + minifed
Copy the bundled and minified file to a location that is accessible to your web server:

```sh
cp ./node_modules/@bicycle-codes/scroll-progress/dist/index.bundle.min.js ./public/scroll-progress.min.js
```

Link to the minified file in HTML:

```html
<body>
    <scroll-example></scroll-example>
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

## examples

### JS

```js
// index.ts
import Tonic from '@bicycle-codes/tonic'
import { ScrollProgress } from '@bicycle-codes/scroll-progress'
import '@bicycle-codes/scroll-progress.css'
import '@bicycle-codes/scroll-progress'

function ScrollExample () {
    return this.html`
        <scroll-progress class="scroll example" id="example"></scroll-progress>
    `
}

Tonic.add(ScrollProgress)
Tonic.add(ScrollExample)

/*

in HTML, you would link to your compiled file, then use the root
element as an HTML element:
<div id="root">
    <scroll-example></scroll-example>
</div>
<script type="module" src="./index.ts"></script>

*/
```

### HTML
First copy a bundled file to a place where your webserver can access it.

```sh
cp ./node_modules/@bicycle-codes/scroll-progress/dist/index.bundle.min.js ./public/scroll-progress.js
```

Then include a script tag in HTML, and use the component like any other HTML element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
</head>
<body>
    <div id="root">
        <scroll-progress></scroll-progress>
    </div>
    <script type="module" src="./scroll-progress.js"></script>
</body>
</html>
```

## develop

Start a localhost server:

```sh
npm start
```
