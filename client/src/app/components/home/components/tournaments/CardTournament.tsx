import { Card, CardContent, Typography } from "@mui/material"

import { ITournament } from "../../../../interface/General"

const CardTournament = ({ tournament }: { tournament: ITournament }) => {
    return (
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 3
        }}>
            {tournament.Icon}
            <CardContent>
                <Typography variant="h5" component="div" align="center" gutterBottom fontWeight={500} color="#2e7d32">
                    {tournament.title}
                </Typography>
                <Typography variant="body1" align="center">
                    {tournament.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardTournament