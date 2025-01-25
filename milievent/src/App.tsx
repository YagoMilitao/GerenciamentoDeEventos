import React from "react";
import NewButton from "./components/button/Button";
import ButtonAppBar from "./components/toolbar/Toolbar";
import EnhancedTable from "./components/table/table";

const App: React.FC = () => {
  
  return (
    <div>
      <ButtonAppBar />
      <NewButton />
      <EnhancedTable />
    </div>
  );
};

export default App;
