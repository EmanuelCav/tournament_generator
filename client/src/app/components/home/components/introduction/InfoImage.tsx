import { CardMedia, Grid } from '@mui/material'

const InfoImage = () => {
    return (
        <Grid item xs={12} md={6} p={2}>
            <CardMedia
                component="img"
                image="/image-2.png"
                alt="Organiza tu torneo"
            />
        </Grid>
    )
}

export default InfoImage