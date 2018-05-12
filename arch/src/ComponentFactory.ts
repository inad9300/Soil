import {Component} from './Component'

/**
 * Type for functions returning a `Component` with the dependencies it demands
 * injected.
 *
 * Note that in most situations it is better to let TypeScript infer the type
 * rather than explicitly specifying it.
 */
export type ComponentFactory<TInput = any, TOutput = any> = (...dependencies: any[]) => Component<TInput, TOutput>
