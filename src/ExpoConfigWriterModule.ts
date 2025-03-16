import { NativeModule, requireNativeModule } from 'expo';

import { ExpoConfigWriterModuleEvents } from './ExpoConfigWriter.types';

declare class ExpoConfigWriterModule extends NativeModule<ExpoConfigWriterModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoConfigWriterModule>('ExpoConfigWriter');
