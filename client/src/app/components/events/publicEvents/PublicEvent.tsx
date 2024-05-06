import { Button, Card, CardContent, Grid, Typography } from '@mui/material'

import { IEvent } from '../../../interface/Tournament'

const PublicEvent = ({ event }: { event: IEvent }) => {
    return (
        <Grid item xs={4}>
            <Card sx={{
                boxShadow: "0 0 2px 1px #33cc33 inset",
                p: 2,
                minHeight: 360,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <CardContent>
                    <Typography variant="h5" color='#33cc33' align="center">
                        {event.title}
                    </Typography>
                    <Typography variant="h6" align="center">
                        {event.description}
                    </Typography>
                </CardContent>
                <Button fullWidth variant='contained' size='medium' color='success'>Join</Button>
            </Card>
        </Grid>
    )
}

export default PublicEvent