/**
 * Interface that objects representing UI components implement. The word "component" in this context refers to pieces
 * of code whose (only) purpose is to render HTML elements on the screen and control the user interaction with these.
 *
 * Components should be designed to resemble native HTML elements, as custom components should be considered special
 * cases of native components (as in Web Components).
 *
 * This interface serves as help for humans more than for the compiler. In most situations, it is better to let
 * TypeScript infer the type rather than explicitly specifying it.
 */
export type Component<TInput = any, TOutput = any> = (input: TInput) => TOutput
