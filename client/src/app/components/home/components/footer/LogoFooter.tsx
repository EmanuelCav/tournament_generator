import { Box, Typography } from "@mui/material"

const LogoFooter = () => {
    return (
        <Box>
            <Box
                component="img"
                src="/header.png"
                alt="logo"
                className="no-select"
            />
            <Typography mt={1} color={'#ffffff'} variant="h6">The boost your event needs</Typography>
        </Box>
    )
}

export default LogoFooter