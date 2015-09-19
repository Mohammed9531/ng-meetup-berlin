System.config({
  transpiler: 'typescript',
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    'typescript': 'lib/typescript.js',
    'services/guest-service': 'services/guest-service.ts',
    'components/registration': 'components/registration.ts',
    'components/guest-list': 'components/guest-list.ts'
  }
});
System.import('hello-berlin-app.ts').catch(function(err) {
  console.error('Error loading app', err);
});
