var crypto = require('crypto');

module.exports = WebpackChunkHash;

function WebpackChunkHash(options)
{
  options = options || {};

  this.digest = options.digest || 'hex';
}

WebpackChunkHash.prototype.apply = function(compiler)
{
  var _plugin = this;

  compiler.plugin('compilation', function(compilation)
  {
    compilation.plugin('chunk-hash', function(chunk, chunkHash)
    {
      var source = chunk.modules.map(getModuleSource).reduce(concatenateSource, '')
        , hash   = crypto.createHash('md5').update(source)
        ;

      chunkHash.digest = function(digest)
      {
        return hash.digest(digest || _plugin.digest);
      };
    });
  });
};

// helpers

function getModuleSource(module)
{
  return (module._source || {})._value || '';
}

function concatenateSource(result, module_source)
{
  return result + module_source;
}
