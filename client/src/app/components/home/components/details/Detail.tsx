import { Card, CardContent, Typography } from '@mui/material'

import { ITournament } from '../../../../interface/General'

const Detail = ({ detail }: { detail: ITournament }) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 3 }}>
            {detail.Icon}
            <CardContent>
                <Typography variant="h5" component="div" align="center" gutterBottom fontWeight={500} color="#2e7d32">
                    {detail.title}
                </Typography>
                <Typography variant="body1" align="center">
                    {detail.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Detail