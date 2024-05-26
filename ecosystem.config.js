module.exports = {
    apps: [
      {
        name: 'NuxtApp',
        port: '3001',
        exec_mode: 'cluster',
        instances: 'max',
        script: './server/index.mjs'
      }
    ]
  }