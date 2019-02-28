/**
 * Signature for the listener functions called when an event is sent.
 */
type Listener<Msg> = (msg: Msg) => void

/**
 * Type-safe event mini-bus, or publisher/subscriber system. Useful for
 * communicating distant components.
 */
export function chan<Msg>() {

    let listeners: Listener<Msg>[] = []

    /**
     * Unsubscribe a listener from the channel.
     */
    function unsub(listener: Listener<Msg>): void {
        listeners = listeners.filter(l => l !== listener)
    }

    return {
        /**
         * Subscribe a listener to the channel. A function is returned which can be
         * called to unsubscribe that same listener. An optional second argument
         * may be passed to specify the maximum number of times the listener will
         * be notified before automatically unsubscribing it.
         */
        sub(listener: Listener<Msg>, times?: number): () => void {
            const timesIsDefined = times !== undefined

            const listenerWrapper = (msg: Msg) => {
                if (timesIsDefined && --times! === 0) {
                    unsub(listenerWrapper)
                }
                listener(msg)
            }

            listeners.push(listenerWrapper)
            return () => unsub(listenerWrapper)
        },

        /**
         * Send an event to all listeners, with a payload.
         */
        pub<M extends Msg = Msg>(msg: M): void {
            listeners.slice().forEach(l => l(msg))
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
