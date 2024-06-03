import { Button, Card, CardContent, Grid, Typography } from '@mui/material'

import { PublicEventPropsType } from '../../../types/events.types'

import { joinEventAction } from '../../../server/actions/event.actions'

const PublicEvent = ({ event, navigate, text, dispatch, user }: PublicEventPropsType) => {

    const joinEvent = () => {
        if(event.competitors!.find(e => e.user._id === user.user?._id! || user.user?._id! === event.admin!)) {
            navigate('/')
            return
        }

        dispatch(joinEventAction({
            id: event.id!,
            token: user.token!,
            navigate
        }))
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
                <Button fullWidth variant='contained' size='medium' color='success' onClick={joinEvent}>{text}</Button>
            </Card>
        </Grid>
    )
}

export default PublicEvent