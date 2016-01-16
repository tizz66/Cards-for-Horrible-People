import React from 'react';

export function renderDevTools(store) {
  if (__DEV__) {
    const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
    return (
		<DebugPanel top={ true } right={ true } bottom={ true }>
			<DevTools store={ store } monitor={ LogMonitor } />
		</DebugPanel>
    );
  }
  return null;
}
