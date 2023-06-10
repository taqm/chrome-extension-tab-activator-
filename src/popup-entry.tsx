import * as React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <h1>Hello World</h1>;
}

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(<App />);