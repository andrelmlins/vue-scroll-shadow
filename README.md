# Vue Scroll Shadow

[![npm version](https://badge.fury.io/js/vue-scroll-shadow.svg)](https://www.npmjs.com/package/vue-scroll-shadow) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/vue-scroll-shadow/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/vue-scroll-shadow.svg?branch=master)](https://travis-ci.com/andrelmlins/vue-scroll-shadow) &bull; [![Dependencies](https://david-dm.org/andrelmlins/vue-scroll-shadow.svg)](https://david-dm.org/andrelmlins/vue-scroll-shadow)

Component that customizes the scroll and inserts shadow when scrolling exists

## Installation

### NPM

```
npm i vue-scroll-shadow
# or
yarn add vue-scroll-shadow
```

### CDN

```html
<script src="https://unpkg.com/vue-scroll-shadow"></script>
```

### Manual

You can also download and import it manually

```html
<script src="/vue-scroll-shadow/dist/vue-scroll-shadow.min.js"></script>
```

## Module import

```js
import Vue from 'vue';
import ScrollShadow from 'vue-scroll-shadow';

Vue.component('scroll-shadow', ScrollShadow);
```

## Examples

An example of how to use the library:

```vue
<template>
  <scroll-shadow>
    <ul>
      <li>Abarth</li>
      <li>Alfa Romeo</li>
      <li>Aston Martin</li>
      <li>Audi</li>
      <li>Bentley</li>
      <li>BMW</li>
      <li>Bugatti</li>
      <li>Cadillac</li>
    </ul>
  </scroll-shadow>
</template>
```

## Properties

Component props:

| Name              | Description              | Type      | Required | Default                                                                 |
| ----------------- | ------------------------ | --------- | -------- | ----------------------------------------------------------------------- |
| styleContainer    | -                        | `String`  | `false`  | -                                                                       |
| styleSubcontainer | -                        | `String`  | `false`  | -                                                                       |
| scrollColor       | Scroll color             | `String`  | `false`  | #c5c5c5                                                                 |
| scrollPadding     | Left scroll padding      | `String`  | `false`  | 0px                                                                     |
| scrollWidth       | Scroll Width             | `String`  | `false`  | 8px                                                                     |
| scrollColorHover  | Scroll color when hover  | `String`  | `false`  | #a6a6a6                                                                 |
| shadow            | -                        | `String`  | `false`  | 0 2px 4px rgba(0, 0, 0, 0.2) inset, 0 -2px 4px rgba(0, 0, 0, 0.2) inset |
| isShadow          | Verify shadow is visible | `Boolean` | `false`  | true                                                                    |

## Demo [Link](https://vue-scroll-shadow.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/vue-scroll-shadow.git
cd vue-scroll-shadow
npm install && npm run start
```

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/vue-scroll-shadow.png)](https://nodei.co/npm/vue-scroll-shadow/)

## License

Vue Scroll Shadow is open source software [licensed as MIT](https://github.com/andrelmlins/vue-scroll-shadow/blob/master/LICENSE).
