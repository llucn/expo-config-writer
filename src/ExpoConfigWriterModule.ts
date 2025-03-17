import { NativeModule, requireNativeModule } from 'expo';

declare class ExpoConfigWriterModule extends NativeModule {
}

export default requireNativeModule<ExpoConfigWriterModule>('ExpoConfigWriter');
