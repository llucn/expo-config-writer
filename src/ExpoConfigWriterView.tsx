import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoConfigWriterViewProps } from './ExpoConfigWriter.types';

const NativeView: React.ComponentType<ExpoConfigWriterViewProps> =
  requireNativeView('ExpoConfigWriter');

export default function ExpoConfigWriterView(props: ExpoConfigWriterViewProps) {
  return <NativeView {...props} />;
}
