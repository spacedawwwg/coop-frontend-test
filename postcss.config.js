module.exports = () => ({
  plugins: {
    'postcss-nested': {},
    'postcss-preset-env': {
      autoprefixer: {
        grid: true
      },
      preserve: false,
      stage: 1
    }
  }
});
