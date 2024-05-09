import { Button, Card, CardContent, Grid, Typography } from '@mui/material'

import { PublicEventPropsType } from '../../../types/events.types'

const PublicEvent = ({ event, navigate, text }: PublicEventPropsType) => {

    const redirectEvent = () => {
        navigate(`/events/${event._id}`)
    }

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
                        {event.event}
                    </Typography>
                    <Typography variant="h6" align="center">
                        {event.description}
                    </Typography>
                </CardContent>
                <Button fullWidth variant='contained' size='medium' color='success' onClick={redirectEvent}>{text}</Button>
            </Card>
        </Grid>
    )
}

export default PublicEvent