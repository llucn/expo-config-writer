import * as React from 'react';

import { ExpoConfigWriterViewProps } from './ExpoConfigWriter.types';

export default function ExpoConfigWriterView(props: ExpoConfigWriterViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
