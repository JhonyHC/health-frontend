import { useEffect, useState } from "react";
import { getData } from "../helpers/ApiCalls";
import toast from "react-hot-toast";
import { Button, Card, CardContent, Skeleton, Typography } from "@mui/material";
import CardSinEntradas from "./CardSinEntradas";


function Comunidades() {
    const [entries, setEntries] = useState(null);

    useEffect(() => {
        // Mostrar datos iniciales al cargar el componente
        getData('/comunidad').then((data) => {
            if (!Array.isArray(data)) {
                throw new Error('No se pudo cargar los datos');
            }
            setEntries(data);
        }).catch((error) => {
            console.log(error);
            setEntries([]);
            toast.error('Error del servidor al cargar los datos 😢');
        });

    }, []);

    return (

        entries ?
            (
                entries.length === 0
                    ?
                    <CardSinEntradas />
                    :
                    entries.map((entry) => (
                        <Card key={entry.id}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {entry.nombreGrupo}
                                </Typography>
                                <Typography variant="p" sx={{ display: 'block' }} gutterBottom>
                                    <Typography variant="b">Descripción: </Typography>
                                    <Typography variant="span">{entry.descripcion}</Typography>
                                </Typography>
                                <Button type="submit" variant="contained" color="primary" disabled>
                                    Entrar a comunidad (proximamente)
                                </Button>
                            </CardContent>
                        </Card>
                    ))
            )
            :
            <Skeleton variant='rectangular' width={'100%'} height={200} />
    );
}

export default Comunidades;