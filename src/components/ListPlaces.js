import { useQuery } from "@apollo/client";
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { GET_PLACES } from "../graphql/query";
import DeleteIcon from '@mui/icons-material/Delete';
import { DELETE_PLACE } from "../graphql/mutation";
import { useMutation } from '@apollo/client';
import { PlaceContext } from "../App";
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';



function ListPlaces() {
    const [isCheck, setIsCheck] = React.useState(false);

    const { loading, error, data } = useQuery(GET_PLACES);
    const [deletePlace] = useMutation(DELETE_PLACE);

    const { currentPlace, placeDispatch } = React.useContext(PlaceContext);
    //  placeDispatch({ type: 'CHECK_PLACE', payload: 'CHECK' });

    function handlecheckDischek() {
        placeDispatch({ type: currentPlace.isCheck ? "PAUSE_SONG" : "PLAY_SONG" });
        if (!isCheck)
            setIsCheck(true);
        if (isCheck)
            setIsCheck(false);


    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>an error occurred...</p>;
    }
    async function handleDeletePlace(id) {

        try {
            await deletePlace({
                variables: {

                    id: id
                }
            });

        } catch (e) {
            alert("Erro ao apagar lugar! " + e.message);
        }

        alert("Lugar apagado! atualize a pagina ");


    }
    function Place({ place }) {
        const { adress, city, country, created_at, link, name, site, id } = place;

        return (<Card style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
            <CardMedia place={name} style={{ objectFit: 'cover', width: '140px', height: '140px' }} />
            <div style={{ display: 'flex', width: '80%', justifyContent: 'space-between' }}>
                <CardContent>
                    <Typography variant='h5' component="h2">Endereço : {adress}</Typography>
                    <Typography variant='subtitle1' component="h3">Cidade : {city}</Typography>
                    <Typography variant='subtitle1' component="h3">País : {country}</Typography>
                    <Typography variant='subtitle1' component="h3">Link Maps : {link}</Typography>
                    <Typography variant='subtitle1' component="h3">Link Site : {site}</Typography>
                    <Typography variant='subtitle1' component="h3">Criado em : {created_at}</Typography>

                </CardContent>
                <CardActions>

                    <Button onClick={() => handlecheckDischek()} style={{ marginTop: '100px', marginLeft: '35px' }}>
                    Já fui ?    {isCheck ? <CheckIcon color="success" /> : <DoNotDisturbAltIcon  color="warning" />}
                    </Button>

                    <Button onClick={() => handleDeletePlace(id)} style={{ marginTop: '100px', marginLeft: '35px' }}>
                        <DeleteIcon color="error" />
                    </Button>
                </CardActions>
                <div style={{ display: 'block' }}>

                 


                </div>
            </div>
        </Card>);
    }


    return (
        <div>
            {data.place.map((place) => {
                return (<Place key={place.id} place={place} />)
            })}
        </div>
    )

}

export default ListPlaces;