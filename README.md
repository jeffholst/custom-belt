# [Custom Belt](https://jeffholst.github.io/custom-belt/)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jeffholst/custom-belt/blob/main/LICENSE.md) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/jeffholst/custom-belt/pulls) ![GitHub last commit](https://img.shields.io/github/last-commit/jeffholst/custom-belt) ![GitHub issues](https://img.shields.io/github/issues/jeffholst/custom-belt) ![GitHub pull requests](https://img.shields.io/github/issues-pr/jeffholst/custom-belt)

<h1 align="center">
 <br>
 <br>
  <img src="https://jeffholst.github.io/custom-belt/belts-animated.gif" alt="Animated Belts">
 <br>
 <br>
 <br>
</h1>

👋 Howdy and welcome!

Custom Belt is a JavaScript library and application to easily create any style martial arts belt in [SVG](https://en.wikipedia.org/wiki/SVG) format

- [Demo](https://jeffholst.github.io/custom-belt/demo.html): easily create custom belts online and download the images to be used directly in your own projects
- [Documentation](https://jeffholst.github.io/custom-belt/introduction/what-is-custom-belt.html): learn how the library can be used to programmatically create custom belts in your own applications

🐞 [Report Bugs](https://github.com/jeffholst/custom-belt/issues/new?assignees=&labels=bug%3A+pending+triage&projects=&template=bug_report.yml) and 🚀 [Feature Requests](https://github.com/jeffholst/custom-belt/issues/new?assignees=&labels=&projects=&template=feature_request.yml)

## ✨ Hightlights

- SVG vector images
- Predefined belts
- Random belt generator
- Clean and focused
- Actively maintained
- Easy to use
- Open Source (MIT license)

## 🧰️ Tooling

Custom Belt is built, maintained, and tested using industry standard best practices, and first in class tooling including:

[ESLint](https://eslint.org/),
[GitHub](https://github.com/),
[GitHub Pages](https://pages.github.com/),
[Gulp](https://gulpjs.com/),
[NPM](https://www.npmjs.com/),
[Prettier](https://prettier.io),
[Turborepo](https://turbo.build/),
[TypeDoc](https://typedoc.org/),
[TypeScript](https://www.typescriptlang.org/),
[Visual Studio Code](https://code.visualstudio.com/),
[Vite](https://vitejs.dev/),
[VitePress](https://vitepress.dev/),
[Vitest](https://vitest.dev/),
[Vue](https://vuejs.org/),
and more ...

## 📁 Project Structure

- [apps](https://github.com/jeffholst/custom-belt/tree/main/apps)
  - [docs](https://github.com/jeffholst/custom-belt/tree/main/apps/docs): a [VitePress](https://vitepress.dev/) documentation and demo site for Custom Library
  - [vue-playgound](https://github.com/jeffholst/custom-belt/tree/main/apps/vue-playground): quickly mock up and test vue library components
- [packages](https://github.com/jeffholst/custom-belt/tree/main/packages)
  - [custom-belt-lib](https://github.com/jeffholst/custom-belt/tree/main/packages/custom-belt-lib): the Custom Belt library
  - [vue-custom-belt](https://github.com/jeffholst/custom-belt/tree/main/packages/vue-custom-belt): Vue component for Custom Belt

## 💻 Turborepo Commands

The following monorepo wide commands can be run from /root

| Command              | Action                               |
| :------------------- | :----------------------------------- |
| `npm install`        | Installs all dependencies            |
| `npm run build`      | Rebuilds all projects                |
| `npm run build:docs` | Rebuild TypeDocs for custom-belt-lib |
| `npm run build:ghp`  | Used by github deploy.yml workflow   |
| `npm run dev`        | Starts local dev server              |
| `npm run format`     | Run prettier formatter               |
| `npm run lint`       | Run lint for all projects            |
| `npm run test`       | Run all test cases                   |

## 💬 Tips

- Navigate to individual **apps** or **packages** to see project specific README files.
- Be sure to run `npm install` from the root directory to install all dependencies.
- GitHub Pages build action is only triggered by **github-pages** branch commits.

## ⛓️ Turborepo Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
