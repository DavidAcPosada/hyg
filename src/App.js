import React from 'react';
import { ThemeProvider, Typography } from '@material-ui/core';

import Layout from './components/Layout';
import theme from './utils/theme';

import WaterForm from './views/WaterForm'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <WaterForm />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
