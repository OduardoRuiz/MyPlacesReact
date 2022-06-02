import React from "react";


import { INSERT_PLACES } from "../graphql/mutation";
import { useMutation } from "@apollo/client";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
export default function AddPlace() {

    const [dialog, setDialog] = React.useState(false);
    const [adress, setAdress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [link, setLink] = React.useState("");
    const [name, setName] = React.useState("");
    const [site, setSite] = React.useState("");



    const [addPlaces] = useMutation(INSERT_PLACES);




    async function handleAddPlace() {

        const addPlace = {
            adress: adress,
            city: city,
            country: country,
            link: link,
            name: name,
            site: site
        }
        addPlaces({
            variables: {
                adress: adress,
                city: city,
                country: country,
                link: link,
                name: name,
                site: site
            }
        });

        console.log(addPlace);
        setDialog(false);

    }



    return (
        <>
            <Dialog open={dialog} id="addPlace" tabIndex="-1">

                <DialogTitle>Adicione o lugar desejado</DialogTitle>

                <DialogContent style={{ textAlign: 'center', display: 'block' }}>


                    <DialogContentText style={{ textAlign: 'left', marginLeft: '10px', display: 'block' }} >Nome do local</DialogContentText>
                    <TextField style={{ width: '100%', margin: '5px' }} type="text" placeholder="Digite um name" value={name} onChange={(event) => setName(event.target.value)} />

                    <DialogContentText style={{ textAlign: 'left', marginLeft: '10px', display: 'block' }} >Endereço </DialogContentText>
                    <TextField style={{ width: '100%', margin: '5px' }} type="text" placeholder="Digite um adress" value={adress} onChange={(event) => setAdress(event.target.value)} />
                  
                    <DialogContentText style={{ textAlign: 'left', marginLeft: '10px', display: 'block' }} >Cidade </DialogContentText>
                    <TextField style={{ width: '100%', margin: '5px' }} type="text" placeholder="Digite um city" value={city} onChange={(event) => setCity(event.target.value)} />

                    <DialogContentText style={{ textAlign: 'left', marginLeft: '10px', display: 'block' }} >Pais</DialogContentText>
                    <TextField style={{ width: '100%', margin: '5px' }} type="text" placeholder="Digite um country" value={country} onChange={(event) => setCountry(event.target.value)} />

                    <DialogContentText style={{ textAlign: 'left', marginLeft: '10px', display: 'block' }} >Link do google maps</DialogContentText>
                    <TextField style={{ width: '100%', margin: '5px' }} type="text" placeholder="Digite um link" value={link} onChange={(event) => setLink(event.target.value)} />

                    <DialogContentText style={{ textAlign: 'left', marginLeft: '10px', display: 'block' }} >Link do google maps</DialogContentText>
                    <TextField style={{ width: '100%', margin: '5px' }} type="text" placeholder="Digite um site" value={site} onChange={(event) => setSite(event.target.value)} />
                </DialogContent>
                <DialogActions>

                    <Button color="error" onClick={() => setDialog(false)}>Cancelar</Button>
                    <Button color="primary" onClick={handleAddPlace}>Salvar</Button>

                </DialogActions>



            </Dialog>
            <Button onClick={() => setDialog(true)} color='primary' style={{ alignContent: 'left', margin: '10px' }} variant="contained">Adicione um lugar</Button>


        </>
    );
}