import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faSignOut } from "@fortawesome/free-solid-svg-icons";
import useEthers from "../../components/Dapp/hook/useEthers";

export default function MetamaskConnect() {
  const { activateWallet,deactivate, account } = useEthers();
  return (
    <>
      {!account && (
        <Button
          mx="3"
          h="9"
          px="3"
          bg="accent-sub"
          borderRadius="12"
          shadow="sh"
          color="fg"
          fontSize="12"
          _hover={{
            transform: "all 0.4s",
            mt: "2px",
            shadow: "sh-hover",
          }}
          onClick={activateWallet}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
          >
            <Box mr="2" fontSize="17"><FontAwesomeIcon icon={faGamepad} /></Box>
            <Text >Connect Wallet</Text>
          </Flex>
        </Button>
      )}

      {account && (
        <Button
          mx="3"
          h="9"
          px="3"
          bg="accent-sub"
          borderRadius="12"
          shadow="sh"
          color="fg"
          fontSize="12"
          _hover={{
            transform: "all 0.4s",
            mt: "2px",
            shadow: 'sh-hover',
          }}
          onClick={deactivate}
        >
          <Flex
            justifyContent="center"
            alignItems="center"
          >
            <Box mr="2" fontSize="17"><FontAwesomeIcon icon={faSignOut} /></Box>
            <Text >Disconnect</Text>
          </Flex>
        </Button>
      )}
    </>
  );
};
