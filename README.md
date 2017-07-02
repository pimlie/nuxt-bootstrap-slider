# Vue.js Bootsrap Slider plugin for NUXT
[![npm](https://img.shields.io/npm/dt/nuxt-bootstrap-slider.svg?style=flat-square)](https://www.npmjs.com/package/nuxt-rfg-icon)
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-bootstrap-slider/latest.svg?style=flat-square)](https://www.npmjs.com/package/nuxt-rfg-icon)

> Easily use [Vue.js Bootstrap Slider](https://github.com/pimlie/vue-bootstrap-slider) in your Nuxt app

## Setup
- Install from npm `npm install --save nuxt-bootstrap-slider` or use yarn
- Add `nuxt-bootstrap-slider` to `modules` section of `nuxt.config.js'`

```js
  modules: [
   'nuxt-bootstrap-slider',
  ]
````

## Usage

```js
<template>
  <div>
    <b-form-slider :value="value"/>
    <p>Slider has value {{ value }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 5
    }
  }
}
</script>
```

See [Vue.js Bootstrap Slider](https://github.com/pimlie/vue-bootstrap-slider) for a list of all available options
