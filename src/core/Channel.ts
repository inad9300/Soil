/**
 * Signature for the listener functions called when an event is sent.
 */
export type Listener<TMessage> = (message: TMessage) => void

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
    listen(listener: Listener<TMessage>, times?: number): () => void {
        const timesIsDefined = times !== undefined

        const listenerWrapper = (message: TMessage) => {
            if (timesIsDefined && --(times as number) === 0) {
                this.clear(listenerWrapper)
            }
            listener(message)
        }

        this.listeners.push(listenerWrapper)
        return () => this.clear(listenerWrapper)
    }

    /**
     * Send an event to all listeners, with a payload.
     */
    send(message: TMessage): void {
        this.listeners.slice().forEach(l => l(message))
    }

    /**
     * Unsubscribe a listener from the channel. If none is provided,
     * unsubscribe all listeners.
     */
    clear(listener?: Listener<TMessage>): void {
        if (listener === undefined) {
            this.listeners = []
        } else {
            this.listeners = this.listeners.filter(l => l !== listener)
        }
    }
}
