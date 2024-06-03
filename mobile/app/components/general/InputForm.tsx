import { FormControl, Input } from "native-base"

import { InputFormPropsType } from "../../types/general.types"

const InputForm = ({ label }: InputFormPropsType) => {
    return (
        <FormControl isRequired>
            <FormControl.Label fontSize={'lg'} color={'emerald.700'}>{label}</FormControl.Label>
            <Input size='md' borderColor={'emerald.800'} borderWidth={1} borderStyle={'solid'} placeholder={label} bg={'white'}  _hover={{
                bg: "gray.100",
                borderColor: 'emerald.800',
                borderWidth: 1,
                borderStyle: 'solid'
            }} _focus={{
                bg: "gray.100",
                borderColor: 'emerald.800',
                borderWidth: 1,
                borderStyle: 'solid'
            }} />
            {/* {'name' in errors ? <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : <FormControl.HelperText>
        Name should contain atleast 3 character.
    </FormControl.HelperText>} */}
        </FormControl >
    )
}

export default InputForm