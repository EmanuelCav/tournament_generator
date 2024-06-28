import { NavigateFunction } from "react-router-dom"
import { Box, Typography } from "@mui/material"

const NavFooter = ({ navigate }: { navigate: NavigateFunction }) => {

    const redirectFooter = (route: string) => {
        navigate(`${route}`)
    }

    return (
        <Box p={4} sx={{ borderLeft: '1px solid #ffffff' }} m={4}>
            <Typography variant="h6" color={'#ffffff'} mt={1} onClick={() => redirectFooter("/events")} className="nav-footer no-select">Events</Typography>
            {/* <Typography variant="h6" color={'#ffffff'} mt={1} onClick={() => redirectFooter("/contact")} className="nav-footer no-select">Contact</Typography> */}
            <Typography variant="h6" color={'#ffffff'} mt={1} onClick={() => redirectFooter("/auth")} className="nav-footer no-select">Login</Typography>
        </Box>
    )
}

export default NavFooter