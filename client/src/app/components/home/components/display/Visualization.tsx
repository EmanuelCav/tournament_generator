import { Card, CardContent, Typography } from '@mui/material'

import { ITournament } from '../../../../interface/General'

const Visualization = ({ option }: { option: ITournament }) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 3, my: 2 }}>
            {option.Icon}
            <CardContent>
                <Typography variant="h5" component="div" align="center" gutterBottom fontWeight={500} color="#2e7d32">
                    {option.title}
                </Typography>
                <Typography variant="body1" align="center">
                    {option.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Visualization