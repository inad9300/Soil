/**
 * Signature for the functions that are called when an event is sent.
 */
export type Listener<TMessage> = (message: TMessage) => void

/**
 * Type-safe event mini-bus, or publisher/subscriber system. It is a useful mechanism for establishing communication
 * between components which are far away in the shared component hierarchy.
 */
export class Channel<TMessage> {

    private listeners: Listener<TMessage>[] = []

    /**
     * Return the number of entities listening on the channel.
     */
    get length(): number {
        return this.listeners.length
    }

    /**
     * Subscribe a listener to the event channel. A function is returned which can be called to unsubscribe the same
     * listener.
     */
    do(listener: Listener<TMessage>): () => void {
        this.listeners.push(listener)
        return () => this.stop(listener)
    }

    /**
     * Subscribe a listener to the event channel, and unsubscribe from it once the event has been emitted for the first
     * time after the subscription. A function is returned which can be called to unsubscribe the listener even before
     * this happens automatically.
     */
    once(listener: Listener<TMessage>): () => void {
        const listenerWrapper = (message: TMessage) => {
            this.stop(listenerWrapper)
            listener(message)
        }
        return this.do(listenerWrapper)
    }

    /**
     * Unsubscribe a listener from the event channel.
     */
    stop(listener: Listener<TMessage>): void {
        this.listeners = this.listeners.filter(l => l !== listener)
    }

    /**
     * Send an event to all listeners, with a payload.
     */
    echo(message: TMessage): void {
        this.listeners.slice().forEach(l => l(message))
    }

    /**
     * Unsubscribe all listeners from the event channel.
     */
    close(): void {
        this.listeners = []
    }
}