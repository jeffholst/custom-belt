# vue-custom-belt

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jeffholst/vue-custom-belt/blob/main/LICENSE.md) [![npm version](https://img.shields.io/npm/v/vue-custom-belt)](https://www.npmjs.com/package/vue-custom-belt) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/jeffholst/custom-belt/pulls)

<h1 align="center">
 <br>
 <br>
  <img src="https://jeffholst.github.io/custom-belt/belts-animated.gif" alt="Animated Belts">
 <br>
 <br>
 <br>
</h1>

👋 Howdy and welcome to vue-custom-belt!

vue-custom-belt is a Vue 3 component which can be used to easily create any style martial arts belt in [SVG](https://en.wikipedia.org/wiki/SVG) format.

👀 [Demo](https://jeffholst.github.io/custom-belt/demo) and [Documentation](https://jeffholst.github.io/custom-belt/introduction/what-is-custom-belt.html)

🐞 [Report Bugs](https://github.com/jeffholst/custom-belt/issues/new?assignees=&labels=bug%3A+pending+triage&projects=&template=bug_report.yml) and 🚀 [Feature Requests](https://github.com/jeffholst/custom-belt/issues/new?assignees=&labels=&projects=&template=feature_request.yml)

## ✨ Highlights

- Vite + Vue + TypeScript = ❤️
- SVG vector images
- Predefined belts
- Random belt generator
- Clean and focused
- Actively maintained

## Install

```sh
npm install vue-custom-belt
```

## Example Usage

```html
<template>
  <CustomBelt :belt-props="whiteBelt" />
</template>

<script setup lang="ts">
  import { CustomBelt, getBeltPropsSolid } from "vue-custom-belt";

  const whiteBelt = getBeltPropsSolid("My Solid White Belt", "#FFFFFF");
</script>
```

For full usage and examples see the [Demo](https://jeffholst.github.io/custom-belt/demo) and [Documentation](https://jeffholst.github.io/custom-belt/introduction/what-is-custom-belt.html).

## 💻 NPM Commands

| Command         | Action                    |
| :-------------- | :------------------------ |
| `npm install`   | Installs all dependencies |
| `npm run build` | Rebuilds project          |
| `npm run dev`   | Starts local dev server   |
| `npm run lint`  | Run lint project          |
| `npm run test`  | Run all test cases        |
