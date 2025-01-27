import React from "react";
import ButtonAppBar from "../components/toolbar/Toolbar";
import HelperTextAligned from "../components/textField/TextField";
import Button from "@mui/material/Button/Button";
import NewButton from "../components/button/Button";


const NewEvent = () => {

    return (
        <>
            <ButtonAppBar />
            <h1>Cadastrar Evento</h1>
            <div>
                <HelperTextAligned helperText = "meu evento"id="" label="nome evento " />
            
                <div>
                    <HelperTextAligned helperText="Hora inicio" id="" label="Hora inicio" />
                    <HelperTextAligned helperText="Hora fim" id="" label="Hora fim" />
                </div>
                    <HelperTextAligned helperText="traje" id="" label="vai com qualquer roupa cara" />
                    <HelperTextAligned helperText="preço" id="" label="R$4,00" />
                <div>
                    <HelperTextAligned helperText="local" id="" label="ex: rep bar100Lona" />
                    <HelperTextAligned helperText="data" id="" label="data" />
                </div>
                <h4>calendar icon</h4>
                <p>event link</p>
            </div>
            
            <div>
            <HelperTextAligned helperText="descrição" id="" label="Escreva um breve texto sobre o local" />
            </div>
            <Button />
            <div>
                <h4>dropdown</h4>
                <h4>Contato Organizador1</h4>
            </div>
            <div>
                <p>add organizador icon</p>
                <p>zap icon</p>
                <p>email icon</p>
                <p>Instagram icon</p>
                <p>Facebook icon</p>
                <p>X icon</p>
            </div>
            <div>
                <NewButton />
            </div>
            
            
        </>
    );
}

export default NewEvent;