import { useState } from 'react';
import { Button, Center, VStack } from 'native-base';

import InputForm from '../general/InputForm';
import Description from './components/Description';

const FormCreate = () => {

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const [status, setStatus] = useState<string>('')
    const [category, setCategory] = useState<string>('')

    return (
        <Center flex={1} justifyContent={'center'} alignItems={'center'}>
            <VStack width="90%" mx="3">
                {/* <FormControl isRequired isInvalid={'name' in errors}> */}
                <InputForm label='Title' />
                <Description label='Description' />
                <Button mt="5" colorScheme="emerald">
                    Submit
                </Button>
            </VStack>
        </Center>
  )
}

export default FormCreate