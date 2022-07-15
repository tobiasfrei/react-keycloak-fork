![React Keycloak](/art/react-keycloak-logo.png?raw=true 'React Keycloak Logo')

# React Keycloak (Keycloak >=v17 Fork) <!-- omit in toc -->

> React bindings for [Keycloak](https://www.keycloak.org/). Fork of https://github.com/react-keycloak/react-keycloak.git with updated packages for keycloak >=17 support.

[![NPM (scoped)](https://img.shields.io/npm/v/@react-keycloak-fork/core?label=npm%20%7C%20core)](https://www.npmjs.com/package/@react-keycloak-fork/core)
[![NPM (scoped)](https://img.shields.io/npm/v/@react-keycloak-fork/web?label=npm%20%7C%20web)](https://www.npmjs.com/package/@react-keycloak-fork/web)
[![NPM (scoped)](https://img.shields.io/npm/v/@react-keycloak-fork/ssr?label=npm%20%7C%20ssr)](https://www.npmjs.com/package/@react-keycloak-fork/ssr)
[![NPM (scoped)](https://img.shields.io/npm/v/@react-keycloak-fork/native?label=npm%20%7C%20native)](https://www.npmjs.com/package/@react-keycloak-fork/native)

[![License](https://img.shields.io/github/license/tobiasfrei/react-keycloak-fork.svg)](https://github.com/tobiasfrei/react-keycloak-fork/blob/master/LICENSE.md)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![GitHub contributors](https://img.shields.io/github/contributors/tobiasfrei/react-keycloak-fork)](https://github.com/tobiasfrei/react-keycloak-fork/graphs/contributors)
[![Github Issues](https://img.shields.io/github/issues/tobiasfrei/react-keycloak-fork.svg)](https://github.com/tobiasfrei/react-keycloak-fork/issues) ![npm](https://img.shields.io/npm/dm/@react-keycloak-fork/core)

[![Gitter](https://img.shields.io/gitter/room/react-keycloak/community)](https://gitter.im/react-keycloak/community)

---

## Table of Contents <!-- omit in toc -->

- [Integrations](#integrations)
  - [React](#react)
  - [SSR](#ssr)
  - [React Native](#react-native)
- [Support](#support)
- [Examples](#examples)
- [Alternatives](#alternatives)
- [Contributing](#contributing)
- [License](#license)

---

## Integrations

### React

React Keycloak for Web requires:

- React **16.0** or later
- `keycloak-js` **17.0.0** or later

```shell
yarn add @react-keycloak-fork/web
```

or

```shell
npm install --save @react-keycloak-fork/web
```

or as a `UMD` package through `unpkg`

See `@react-keycloak-fork/web` package [README](https://github.com/tobiasfrei/react-keycloak-fork/blob/master/packages/web/README.md) for complete documentation.

### SSR

React Keycloak for SSR frameworks requires:

- React **16.0** or later
- SSR Framework:
  - NextJS **9** or later
  - Razzle **3** or later
- `keycloak-js` **17.0.0** or later

```shell
yarn add @react-keycloak-fork/ssr
```

or

```shell
npm install --save @react-keycloak-fork/ssr
```

See `@react-keycloak-fork/ssr` package [README](https://github.com/tobiasfrei/react-keycloak-fork/blob/master/packages/ssr/README.md) for complete documentation.

### React Native

React Keycloak for React Native requires React Native **61.0** or later

To install run

```shell
yarn add @react-keycloak-fork/native
```

or

```shell
npm install --save @react-keycloak-fork/native
```

See `@react-keycloak-fork/native` package [README](https://github.com/react-keycloak/react-native-keycloak/blob/master/README.md) for complete documentation.

## Support

| version | keycloak-js version |
| ------- | ------------------- |
| v4.0.1+ | 17.0.0+             | (fork)
| v2.0.0+ | 9.0.2+              |
| v1.x    | >=8.0.2 <9.0.2      |

## Examples

See [`@react-keycloak-fork/react-keycloak-examples`](https://github.com/react-keycloak/react-keycloak-examples) repository for various demo implementing this library main features.

## Alternatives

If you need to connect using a more generic OIDC client instead of `keycloak.js`, consider using one of the following libraries:

- [bjerkio/oidc-react](https://github.com/bjerkio/oidc-react)
- [thchia/react-oidc](https://github.com/thchia/react-oidc)
- [@axa-fr/react-oidc](https://github.com/AxaGuilDEv/react-oidc)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

If you found this project to be helpful, please consider buying me a coffee.

[![buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoff.ee/4f18nT0Nk)
