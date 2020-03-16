export * from './lib/async';
export * from './lib/hash';
export * from './lib/number';


const {createUpwardServer} = require('@magento/upward-js');

export async function gUpwardApp() {
  const {app} = await createUpwardServer({
    upwardPath: 'spec.yml',
    bindLocal: false, // do not create http server
    logUrl: true,
  });

  return app;
}

