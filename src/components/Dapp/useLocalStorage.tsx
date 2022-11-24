import { useEffect, useState } from "react"

function getItem(key: string) {
    const item = window.localStorage.getItem(key)
    if (item !== null) {
        try {
            return JSON.parse(item)
        } catch {
        }
    }
}

function setItem(key: string, value: any) {
    const toStore = JSON.stringify(value)
    window.localStorage.setItem(key, toStore)
    return JSON.parse(toStore)
}

export function useLocalStorage() {
    const [value, setValue] = useState(() => getItem("shouldConnectMetamask"))

    useEffect(() => {
        setValue(getItem("shouldConnectMetamask"))
    }, ["shouldConnectMetamask"])

    useEffect(() => {
        setItem("shouldConnectMetamask", value)
    }, [value])

    return [value, setValue, () => getItem("shouldConnectMetamask")] as const
}