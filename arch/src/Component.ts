/**
 * Interface that objects representing UI components should implement. The word
 * "component" in this context refers to pieces of code whose (only) purpose is
 * to render HTML elements on the screen and control the user interaction with
 * these.
 *
 * Components implementing this interface will resemble native HTML elements –
 * custom elements can be considered special cases of native ones (as in Web
 * Components).
 *
 * Note that in most situations it is better to let TypeScript infer the type
 * rather than explicitly specifying it. This type is mostly for documentation
 * purposees.
 */
export type Component<TInput = any, TOutput = any> = (input: TInput) => TOutput
