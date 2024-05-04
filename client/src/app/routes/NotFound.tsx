import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material"

const NotFound = () => {

    const navigate = useNavigate()

    const goToMainPage = () => {
        navigate('/')
    }

    return (
        <Box className="full-screen" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Box 
                component="img"
                alt="logo"
                src="/logo.png"
                width={312}
                height={312}
            />
            <Typography mt={2} variant="h4" color="#33CC33">Page not found</Typography>
            <Button sx={{ marginTop: 2 }} size="large" variant="text" color="success" onClick={goToMainPage}>Go to main page</Button>
        </Box>
    )
}

export default NotFound