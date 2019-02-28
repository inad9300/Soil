import {Component} from './Component'

/**
 * Type for functions returning a `Component` with the dependencies it demands
 * injected.
 *
 * Note that in most situations it is better to let TypeScript infer the type
 * rather than explicitly specifying it. This type is mostly for documentation
 * purposes.
 */
export type ComponentFactory<I = any, O extends Element = Element> = (...dependencies: any[]) => Component<I, O>
