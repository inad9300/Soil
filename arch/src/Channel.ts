/**
 * Signature for the listener functions called when an event is sent.
 */
type Listener<TMessage> = (message: TMessage) => void

/**
 * Type-safe event mini-bus, or publisher/subscriber system. Useful for
 * communicating distant components.
 */
export class Channel<TMessage> {

    private listeners: Listener<TMessage>[] = []

    /**
     * Return the number of listeners on the channel.
     */
    get length(): number {
        return this.listeners.length
    }

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
                this.unsub(listenerWrapper)
            }
            listener(message)
        }

        this.listeners.push(listenerWrapper)
        return () => this.unsub(listenerWrapper)
    }

    /**
     * Unsubscribe a listener from the channel.
     */
    private unsub(listener: Listener<TMessage>): void {
        this.listeners = this.listeners.filter(l => l !== listener)
    }

    /**
     * Send an event to all listeners, with a payload.
     */
    pub(message: TMessage): void {
        this.listeners.slice().forEach(l => l(message))
    }

    /**
     * Unsubscribe all listeners from the channel.
     */
    clear(): void {
        this.listeners = []
    }
}
