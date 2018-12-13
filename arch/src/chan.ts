/**
 * Signature for the listener functions called when an event is sent.
 */
type Listener<TMessage> = (message: TMessage) => void

/**
 * Type-safe event mini-bus, or publisher/subscriber system. Useful for
 * communicating distant components.
 */
export function chan<TMessage>() {

    let listeners: Listener<TMessage>[] = []

    /**
     * Unsubscribe a listener from the channel.
     */
    function unsub(listener: Listener<TMessage>): void {
        listeners = listeners.filter(l => l !== listener)
    }

    return {
        /**
         * Subscribe a listener to the channel. A function is returned which can be
         * called to unsubscribe that same listener. An optional second argument
         * may be passed to specify the maximum number of times the listener will
         * be notified before automatically unsubscribing it.
         */
        sub(listener: Listener<TMessage>, times?: number): () => void {
            const timesIsDefined = times !== undefined

            const listenerWrapper = (message: TMessage) => {
                if (timesIsDefined && --times! === 0) {
                    unsub(listenerWrapper)
                }
                listener(message)
            }

            listeners.push(listenerWrapper)
            return () => unsub(listenerWrapper)
        },

        /**
         * Send an event to all listeners, with a payload.
         */
        pub(message: TMessage): void {
            listeners.slice().forEach(l => l(message))
        },

        /**
         * Return the number of listeners on the channel.
         */
        get size(): number {
            return listeners.length
        },

        /**
         * Unsubscribe all listeners from the channel.
         */
        clear(): void {
            listeners = []
        }
    }
}
