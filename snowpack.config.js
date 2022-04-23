module.exports = {
  devOptions: { open: 'none' },
  exclude: ['server/**'],
  mount: { public: { url: '/', static: true }, client: { url: '/dist' } },
  plugins: ['@snowpack/plugin-typescript'],
}
