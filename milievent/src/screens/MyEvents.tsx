import React from "react";
import EnhancedTable from "../components/table/table";
import NewButton from "../components/button/Button";
import { Toolbar } from "@mui/material";



function MyEvents() {
    return (
        <div>
            <Toolbar />
            <h1>Meus Eventos</h1>
            <EnhancedTable />
            <NewButton />
            <NewButton />
        </div>
    );
}   
export default MyEvents;