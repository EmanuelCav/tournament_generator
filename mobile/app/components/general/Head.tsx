import { Heading } from 'native-base'

const Head = ({ text }: { text: string }) => {
    return (
        <Heading fontSize="3xl" p="4" pb="3" color={'emerald.900'} fontWeight={'medium'}>
            {text}
        </Heading>
    )
}

export default Head