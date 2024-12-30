import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Typography, Paper, Button } from "@mui/material";

import { IReducer } from "../../interface/General";

import { uploadCode } from "../../server/actions/user.actions";
import { selector } from "../../server/selector";

const FormCode = () => {

    const [code, setCode] = useState<string[]>(Array(6).fill(""));
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((state: IReducer) => selector(state).user)

    const handleChange = (index: number, value: string) => {
        if (/^\d?$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
        if (event.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (event: React.ClipboardEvent) => {
        const pastedData = event.clipboardData.getData("Text").slice(0, 6);
        if (/^\d+$/.test(pastedData)) {
            const newCode = pastedData.split("").map((char) => char);
            setCode(newCode);
            inputRefs.current[pastedData.length - 1]?.focus();
        }
        event.preventDefault();
    };

    const handleSumbit = () => {

        let codeStr = ""

        for (let i = 0; i < code.length; i++) {
            codeStr += code[i]
        }

        dispatch(uploadCode({
            codeData: {
                code: codeStr
            },
            navigate,
            token: user.user.token!
        }) as any)
    }

    return (
        <Box display='flex' zIndex={16} justifyContent='center' width='100%' height='100vh' alignItems='center' position='fixed' top={0} left={0} sx={{
            background: 'rgba(0, 0, 0, 0.5)'
        }}>
            <Paper elevation={3} sx={{ p: 2, m: 1 }}>
                <Typography variant="body1" gutterBottom>Revisa tu correo electrónico y coloca el código de verificación.</Typography>
                <Box display="flex" justifyContent="center" alignItems="center" bgcolor="#ffffff" gap={1}>
                    {code.map((digit, index) => (
                        <TextField
                            key={index}
                            value={digit}
                            color="success"
                            inputRef={(el) => (inputRefs.current[index] = el)}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onPaste={handlePaste}
                            inputProps={{
                                maxLength: 1,
                                style: { textAlign: "center", fontSize: "1.5rem" },
                            }}
                            sx={{
                                '&:hover fieldset': {
                                    borderColor: '#33CC33 !important',
                                },
                                width: '3rem'
                            }}
                        />
                    ))}
                </Box>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2, fontSize: '1.225em' }}
                    color='success'
                    size='large'
                    onClick={handleSumbit}
                >
                    CONTINUAR
                </Button>
            </Paper>
        </Box>
    );
};

export default FormCode;
