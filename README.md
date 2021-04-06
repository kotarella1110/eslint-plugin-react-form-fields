<div align="center">

<h1>eslint-plugin-react-form-fields</h1>

<h3>React Form Fields specific linting rules for ESLint</h3>

[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Actions Status](https://github.com/kotarella1110/eslint-plugin-react-form-fields/workflows/CI/badge.svg)](https://github.com/kotarella1110/eslint-plugin-react-form-fields/actions?query=workflow%3ACI)
[![NPM Version](https://img.shields.io/npm/v/eslint-plugin-react-form-fields?style=flat-square)](https://www.npmjs.com/package/eslint-plugin-react-form-fields)
[![Downloads Month](https://img.shields.io/npm/dm/eslint-plugin-react-form-fields?style=flat-square)](https://www.npmjs.com/package/eslint-plugin-react-form-fields)
[![Downloads Total](https://img.shields.io/npm/dt/eslint-plugin-react-form-fields?style=flat-square)](https://www.npmjs.com/package/eslint-plugin-react-form-fields)
[![Dependencies Status](https://david-dm.org/kotarella1110/eslint-plugin-react-form-fields.svg?style=flat-square)](https://david-dm.org/kotarella1110/eslint-plugin-react-form-fields)
[![Semantic Release](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg?style=flat-square)](CONTRIBUTING.md)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

</div>

## Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally. (Note that locally, per project, is strongly preferred)

```sh
$ npm install eslint --save-dev
```

If you installed ESLint globally, you have to install React plugin globally too. Otherwise, install it locally.

```sh
$ npm install eslint-plugin-react-form-fields --save-dev
```

## Configuration

Use our preset to get reasonable defaults:

```json
  "extends": [
    "eslint:recommended",
    "plugin:react-form-fields/recommended"
  ]
```

If you do not use a preset you will need to specify individual rules and add extra configuration.

Add "react-form-fields" to the plugins section.

```json
{
  "plugins": ["react-form-fields"]
}
```

Enable the rules that you would like to use.

```json
  "rules": {
    "react-form-fields/no-mix-controlled-with-uncontrolled": "error",
    "react-form-fields/no-only-value-prop": "error"
  }
```

See also [Configuring ESLint](https://eslint.org/docs/user-guide/configuring).

## Rules

<!--RULE_TABLE_BEGIN-->

### Possible Errors

| Rule ID                                                                                                      | Description                                                                               |     |
| :----------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- | :-: |
| [react-form-fields/no-mix-controlled-with-uncontrolled](./docs/rules/no-mix-controlled-with-uncontrolled.md) | Forbid to specify both value/checked and defaultValue/defaultChecked props to form fields | ⭐️ |
| [react-form-fields/no-only-value-prop](./docs/rules/no-only-value-prop.md)                                   | Forbid to specify only value/checked without onChange and readOnly props to form fields   | ⭐️ |

<!--RULE_TABLE_END-->

## Semantic Versioning Policy

This plugin follows [Semantic Versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## Contributing

Welcome your contribution!

See also [ESLint Contribution Guide](https://eslint.org/docs/developer-guide/contributing/).

### Development Tools

- `npm test` runs tests.
- `npm run update` updates the package version. And it updates `src/configs/recommended.ts`, `lib/index.ts`, and `README.md`'s rule table. See also [npm version CLI command](https://docs.npmjs.com/cli/version).
- `npm run add-rule <RULE_ID>` creates three files to add a new rule.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://qiita.com/kotarella1110"><img src="https://avatars.githubusercontent.com/u/12913947?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kotaro Sugawara</b></sub></a><br /><a href="https://github.com/kotarella1110/eslint-plugin-react-form-fields/commits?author=kotarella1110" title="Code">💻</a> <a href="https://github.com/kotarella1110/eslint-plugin-react-form-fields/commits?author=kotarella1110" title="Documentation">📖</a> <a href="#ideas-kotarella1110" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-kotarella1110" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kotarella1110/eslint-plugin-react-form-fields/commits?author=kotarella1110" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

[MIT](./LICENSE) © [Kotaro Sugawara](https://twitter.com/kotarella1110)
