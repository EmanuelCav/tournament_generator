import { Box, Typography } from "@mui/material"

const CopyRight = () => {
    return (
        <Box sx={{ textAlign: 'center', marginTop: 4, borderTop: 1 }} pt={4}>
            <Typography variant="body2">
                © {new Date().getFullYear()} CupCraft. Todos los derechos reservados.
            </Typography>
        </Box>
    )
}

export default CopyRight