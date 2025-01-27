import React from "react";
import EnhancedTable from "../components/table/table";
import NewButton from "../components/button/Button";
import { Button, Toolbar } from "@mui/material";
import ButtonAppBar from "../components/toolbar/Toolbar";
import ScreenButton from "../components/button/Button";



function MyEvents() {
    return (
        <div>
            <ButtonAppBar />
            <h1>Meus Eventos</h1>
            <EnhancedTable />
            <div>
                <Button>Salvar</Button>
                <Button>Novo Evento</Button>
            </div>
        </div>
    );
}   
export default MyEvents;