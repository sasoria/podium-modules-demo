module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  optimize: {
    bundle: true,
    sourcemap: false,
  },
  packageOptions: {
    NODE_ENV: true,
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    clean: true,
  },
};
