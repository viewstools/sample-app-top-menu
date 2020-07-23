import { ViewsFlow } from 'Logic/ViewsFlow.js';
import View from './view.js';
import React from 'react';

export default function Logic(props) {
  return (
    <ViewsFlow>
      <View {...props} />
    </ViewsFlow>
  );
}
