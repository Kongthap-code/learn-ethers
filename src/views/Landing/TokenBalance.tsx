import { Box, Flex } from "@chakra-ui/react";
import MetamaskConnect from "./ButtonConnect";
import { AccountIcon } from "./AccountIcon";
import useEthers from "../../components/Dapp/hook/useEthers";

function TokenBalance() {
  const { account } = useEthers();

  return account ? (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="row"
      fontSize="12"
    >
      <Flex
        px={2}
        py={1}
        direction="row"
        alignItems="center"
        borderRadius={10}
      // shadow="#fff5 0px 5px 0px 0px"
      // bg="white"
      >
        <Box mr={2} >
          {/* {tokenBalance
            ? formatEther(tokenBalance) + " KC "
            : account && <Spinner />} */}
        </Box>
        <Flex
          px={2}
          py={1}
          borderRadius={10}
          bg="box"
          justifyContent="center"
          alignItems="center"
          _hover={{ background: "box", cursor: "pointer" }}
          onClick={() => window.open(`https://rinkeby.etherscan.io/address/${account && account}`, "_blank")}
        >
          <Box mr="1"><AccountIcon account={account} /></Box>
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`
          }
        </Flex>

      </Flex>
      <MetamaskConnect />
    </Flex>
  ) : (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
    >
      <Box>
        <MetamaskConnect />
      </Box>
    </Flex>
  );
}

export default TokenBalance;
