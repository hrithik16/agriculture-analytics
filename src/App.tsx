import "@mantine/core/styles.css";
import React from "react";
import DataTable from "./components/DataTable";

import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Greycliff CF, sans-serif' }
});

const App: React.FC = () => {
  return (
    <MantineProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>India Agriculture Data Visualization</h1>
          <DataTable />
        </header>
      </div>
    </MantineProvider>
  );
};

export default App;
