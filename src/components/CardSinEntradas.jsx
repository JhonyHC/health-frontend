import { Card, CardContent, Typography } from "@mui/material";

export default function CardSinEntradas() {
    return (
        <Card style={{ margin: '10px 0' }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    No hay entradas
                </Typography>
            </CardContent>
        </Card>
    );
}