// Reexport the native module. On web, it will be resolved to ExpoConfigWriterModule.web.ts
// and on native platforms to ExpoConfigWriterModule.ts
export { default } from './ExpoConfigWriterModule';
export { default as ExpoConfigWriterView } from './ExpoConfigWriterView';
export * from  './ExpoConfigWriter.types';
