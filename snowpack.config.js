module.exports = {
  devOptions: { open: 'none' },
  exclude: ['server/**'],
  mount: { public: { url: '/', static: true }, client: { url: '/dist' } },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  plugins: ['@snowpack/plugin-typescript'],
}
