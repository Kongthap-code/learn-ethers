import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";
import create from "zustand";

export interface ethers {
    activateWallet: () => void
    deactivate: () => void
    provider?: ethers.providers.Web3Provider | null;
    account?: string | null
}


const useEthers = create<ethers>((set, get) => {
    const activateWallet = async () => {
        try {
            const ethereum = await detectEthereumProvider();

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);

                await provider.send("eth_requestAccounts", []);
                const [account]: string[] = await provider.send("eth_accounts", []);

                const onConnect = async () => {
                    const [account]: string[] = await provider.send("eth_accounts", []);
                    set({ account: account ? account : null })
                };

                ethereum.on("accountsChanged", onConnect);

                set({
                    provider,
                    account: account ? account : null
                })
            }

        } catch (err) {
            throw err
        }
    }

    const deactivate = () => {
        set({
            account: null,
        })
    }

    return {
        provider: null,
        activateWallet,
        deactivate,
        account: null
    }
})

export default useEthers