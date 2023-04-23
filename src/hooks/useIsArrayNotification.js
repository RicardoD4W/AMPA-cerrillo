import { useErrorNotify } from '../hooks/Notifications'


export const useIsArrayNotification = (message) => {
    Array.isArray(message)
        ? message.map((msg) => useErrorNotify(msg))
        : useErrorNotify(message)
}

