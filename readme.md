Minimal example demonstrating use of prop-types with Preact.

Uses a modified version of `babel-plugin-transform-react-remove-prop-types` to remove prop types from production builds.

`npm run dev` runs a development build using prop types and includes an additional prop-type package `react-style-proptype`.

`npm run prod` sets `NODE_ENV=production`. Observe in the output bundle:
* The packages `prop-types` and `react-style-proptype` are not included in the build.
* `propTypes` defined on the `Button` component have been removed.
