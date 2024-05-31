import { Dimensions } from 'react-native'
import { Box, Center, Pressable, Text } from 'native-base'

import { CardActionHomePropsType } from '../../../../../types/home.types'

const CardActionHome = ({ text, Icon, icon, handleRedirect }: CardActionHomePropsType) => {
    return (
        <Center w="64" bg="white" rounded="lg" shadow={3}>
            <Pressable width={'100%'} onPress={handleRedirect}>
                {({
                    isHovered,
                    isPressed
                }) => {
                    return (
                        <Box p={4} width={'100%'} bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'white'} justifyContent={'center'} alignItems={'center'}>
                            <Text fontSize='4xl' color={'emerald.900'} fontWeight={'medium'}>{text}</Text>
                            <Icon name={icon} size={Dimensions.get("window").height / 22} color={'#065f46'} />
                        </Box>
                    )
                }}
            </Pressable>
        </Center>
    )
}

export default CardActionHome