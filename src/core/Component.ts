/**
 * Base shape of the input a component takes. It is defined as a map to resemble the way native HTML elements are
 * created, as components should be considered special cases of those (as in Web Components).
 */
type BaseInput = {
    [argName: string]: any
}

/**
 * Minimum list of properties a component shall return.
 *
 * Notice that in TypeScript, interfaces inheriting from one with readonly properties are not obliged to defined those
 * properties as readonly. Nevertheless, the `$el` property should ideally be readonly, as it is a resource handled by
 * a component which should not be manipulated by external agents.
 */
type BaseOutput = {
    readonly $el: HTMLElement
}

/**
 * Interface that objects representing UI components implement. The word "component" in this context refers to pieces
 * of code whose (only) purpose is to render HTML elements on the screen and control the user interaction with these.
 */
export type Component<TInput extends BaseInput, TOutput extends BaseOutput>
    = (args: TInput) => TOutput