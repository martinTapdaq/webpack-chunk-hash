# webpack-chunk-hash

Plugin to replace a standard webpack chunk hashing with custom (md5) one.

_Note: It's a clone of [webpack-md5-hash](https://www.npmjs.com/package/webpack-md5-hash) plugin, but without sorting provided chunks (unobtrusive),
and using native crypto module (performance)._

## Install

```
npm install --save-dev webpack-chunk-hash
```

## Example

Just add this plugin as usual.

```javascript

// webpack.config.js

var WebpackChunkHash = require('webpack-chunk-hash');

module.exports = {
  // ...
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  plugins: [
    new WebpackChunkHash({algorithm: 'md5'}) // 'md5' is default value
  ]
};

```

## License

WebpackChunkHash plugin is released under the [MIT](License) license.
