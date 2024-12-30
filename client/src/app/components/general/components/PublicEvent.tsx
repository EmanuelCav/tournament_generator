import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

import { PublicEventPropsType } from '../../../types/events.types'

import { joinEventAction } from '../../../server/actions/event.actions'

const PublicEvent = ({ event, navigate, text, dispatch, user }: PublicEventPropsType) => {

    const joinEvent = () => {
        if (event.competitors!.find(e => e.user._id === user.user?._id! || user.user?._id! === event.admin!)) {
            navigate(`/events/${event._id}`)
            return
        }

        if (!user.token) {
            navigate('/auth')
            return
        }

        dispatch(joinEventAction({
            id: event.id!,
            token: user.token!,
            navigate
        }))
    }

    return (
        <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card>
                <CardMedia
                    component="img"
                    sx={{
                        height: { xs: 150, md: 275 },
                    }}
                    image={event.image?.image}
                    alt={event.event}
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {event.event}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        {event.description?.slice(0, 50)} {event.description?.length! > 75 && "..."}
                    </Typography>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ fontWeight: 600, py: 1 }}
                        onClick={joinEvent}
                    >
                        {text}
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default PublicEvent