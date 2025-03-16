import { registerWebModule, NativeModule } from 'expo';

import { ExpoConfigWriterModuleEvents } from './ExpoConfigWriter.types';

class ExpoConfigWriterModule extends NativeModule<ExpoConfigWriterModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoConfigWriterModule);
