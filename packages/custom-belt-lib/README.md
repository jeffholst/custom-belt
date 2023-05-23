# [custom-belt-lib](https://github.com/jeffholst/custom-belt/tree/main/packages/custom-belt-lib)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jeffholst/custom-belt/blob/main/LICENSE.md) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/jeffholst/custom-belt/pulls) ![GitHub pull requests](https://img.shields.io/github/issues-pr/jeffholst/custom-belt)

[custom-belt-lib](https://github.com/jeffholst/custom-belt/tree/main/packages/custom-belt-lib) is part of the [Custom Belt](https://github.com/jeffholst/custom-belt) **Turborepo**. It is a JavaScript library containing all the core functionality of **Custom Belt** and is meant to be imported by other UI packages such as [vue-custom-belt](https://github.com/jeffholst/custom-belt/tree/main/packages/vue-custom-belt).

<h1 align="center">
 <br>
 <br>
  <img src="https://jeffholst.github.io/custom-belt/belts-animated.gif" alt="Animated Belts">
 <br>
 <br>
 <br>
</h1>

🐞 [Report Bugs](https://github.com/jeffholst/custom-belt/issues/new?assignees=&labels=bug%3A+pending+triage&projects=&template=bug_report.yml) and 🚀 [Feature Requests](https://github.com/jeffholst/custom-belt/issues/new?assignees=&labels=&projects=&template=feature_request.yml)

## 💻 NPM Commands

| Command              | Action                    |
| :------------------- | :------------------------ |
| `npm install`        | Installs all dependencies |
| `npm run build`      | Rebuilds project          |
| `npm run build:docs` | Rebuild TypeDocs          |
| `npm run lint`       | Run lint for project      |
| `npm run test`       | Run all test cases        |

## 💬 Tips

- running ```npm run build:docs``` will generate the TypeDocs for this package and use
gulp to replace the files at ../../apps/docs/docs/typedoc for inclusion with the
VitePress site.
