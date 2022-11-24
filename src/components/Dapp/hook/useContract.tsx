import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

function useContract(
    address: string,
    abi: any
) {
    const Contract = async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const erc20 = new ethers.Contract(address, abi, provider);
    }
}

export default useContract