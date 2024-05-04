import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Box } from "@mui/material"

import { IReducer } from "../../interface/General"

import { selector } from "../../server/selector"

const Loading = () => {

    const response = useSelector((state: IReducer) => selector(state).response)

    useEffect(() => {
        if(response.loading) {
            document.body.style.overflow = "hidden"
        }
    }, [response.loading])

    return (
        <>
            {
                response.loading && <Box className="no-select" display='flex' justifyContent="center" zIndex={18} top={0} left={0} alignItems="center" width='100%' position="fixed" height='100vh'
                    sx={{
                        background: 'rgba(0, 0, 0, 0.5)'
                    }}>
                    <Box component="img" src="/loading.gif" alt="loading..." />
                </Box>
            }
        </>
    )
}

export default Loading