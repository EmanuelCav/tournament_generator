import { useState } from "react"
import { Box, Button, Paper, Typography } from "@mui/material"

import FormPlayerData from "./components/formEditPlayerData/FormPlayerData"

import { FormEditPlayerDataPropsType } from "../../types/event.types"

import { IStatistic } from "../../interface/Event"

const FormEditPlayerData = ({ dispatch, user, playerInfo, event, setIsEditPlayerData }: FormEditPlayerDataPropsType) => {

    const [isEditValue, setIsEditValue] = useState<boolean>(false)
    const [statisticInfo, setStatisticInfo] = useState<IStatistic | null>(null)

    const handleEditValue = (statistic: IStatistic) => {
        setIsEditValue(!isEditValue)
        setStatisticInfo(statistic)
    }

    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='fixed' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            {
                isEditValue && <FormPlayerData dispatch={dispatch} user={user} statistic={statisticInfo!} event={event} 
                setIsEditValue={setIsEditValue} setIsEditPlayerData={setIsEditPlayerData} />
            }
            <Paper elevation={3} sx={{ p: 2, width: '37.33%' }}>
                <Typography color='#33CC33' variant="h5">Update the player data</Typography>
                <Box justifyContent='space-evenly' display={'flex'} alignItems={'center'} flexDirection={'column'}>
                    {
                        playerInfo.statistics.map((statistic: IStatistic) => {
                            return <Button
                                key={statistic._id}
                                variant="contained"
                                sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                                color='primary'
                                size='large'
                                onClick={() => handleEditValue(statistic)}
                            >
                                {statistic.name}
                            </Button>
                        })
                    }
                    <Button
                        variant="contained"
                        sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                        color='success'
                        size='large'
                        fullWidth
                        onClick={() => setIsEditPlayerData(false)}
                    >
                        Accept
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default FormEditPlayerData