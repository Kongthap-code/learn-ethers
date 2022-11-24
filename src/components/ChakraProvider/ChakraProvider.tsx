import { ChakraProvider as Chakra } from '@chakra-ui/react'
import { ReactNode } from 'react';
import { theme } from './theme/theme';

interface ChakraProviderProps {
    children : ReactNode
}

function ChakraProvider(props: ChakraProviderProps){
    return (
        <Chakra theme={theme}>
            {props.children}
        </Chakra>
    )
}

export default ChakraProvider