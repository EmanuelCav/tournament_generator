import { Button, Card, List, ListItem, ListItemText, Typography } from "@mui/material"

import { ISubscription } from "../../../../interface/User"

const CardSubscription = ({ showSubscription }: { showSubscription: ISubscription }) => {
    return (
        <Card sx={{ width: 415, p: 6 }}>
            <Typography color='#1b5e20' variant="h3" align="center" my={1}>{showSubscription.subscription}</Typography>
            <Typography color='#2e7d32' variant="h4" align="center" my={1}>${showSubscription.price.toFixed(2)}</Typography>
            <List>
                {
                    showSubscription.descriptions.map((description: string, index: number) => {
                        return <ListItem divider key={index}>
                            <ListItemText primary={description} primaryTypographyProps={{
                                color: 'black',
                                fontWeight: 'medium',
                                variant: 'body1',
                            }} />
                        </ListItem>
                    })
                }
            </List>
            <Button sx={{ mt: 2 }} fullWidth size="large" variant="contained" color="success">
                SUBSCRIBE
            </Button>
        </Card>
    )
}

export default CardSubscription