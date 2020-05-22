const webpackMerge = require('webpack-merge');

const addPresets = (env = { presets: [] }) => {
  const presets = env.presets || [];
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`./presets/${presetName}`)(env)
  );
  return webpackMerge({}, ...mergedConfigs);
};

module.exports = addPresets;
