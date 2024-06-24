import { ChangeEvent, FormEvent, useState } from "react"
import { Box, Button, Paper, TextField } from "@mui/material"

import CloseForm from "../../../general/CloseForm"

import { ICreateStatistic } from "../../../../interface/Event"
import { FormStatisticsPropsType } from "../../../../types/event.types"

import { createStatisticAction, updateStatisticAction } from "../../../../server/actions/event.actions"

const FormStatistics = ({ handleAddStatistics, dispatch, user, event, statisticInfo, isEdit, setIsEditStatistic }: FormStatisticsPropsType) => {

    const initialState: ICreateStatistic = {
        name: isEdit ? statisticInfo.name : ''
    }

    const [statisticData, setStatisticData] = useState<ICreateStatistic>(initialState)

    const { name } = statisticData

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setStatisticData({ ...statisticData, [name]: value })
    }

    const handleSumbit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        if (isEdit) {
            dispatch(updateStatisticAction({
                token: user.token!,
                statisticData,
                cid: event.competitors?.find(c => c.user._id === user.user?._id)?._id!,
                sid: statisticInfo._id,
                setIsEditStatistic
            }))
            return
        }

        dispatch(createStatisticAction({
            token: user.token!,
            cid: event.competitors?.find(c => c.user._id === user.user?._id)?._id!,
            eid: event._id!,
            statisticData,
            handleAddStatistics
        }))

    }

    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='fixed' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <CloseForm handleClose={isEdit ? () => setIsEditStatistic(false) : handleAddStatistics} />
                <Box component="form" noValidate sx={{ p: 4 }} onSubmit={handleSumbit}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Statistic name"
                        name="name"
                        autoFocus
                        color='success'
                        value={name}
                        sx={{
                            '&:hover fieldset': {
                                borderColor: '#33CC33 !important',
                            },
                        }}
                        onChange={handleChange}
                        autoComplete='off'
                        inputProps={{ maxLength: 40 }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                        color='success'
                        size='large'
                    >
                        {isEdit ? 'EDIT' : 'ADD'}
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default FormStatistics