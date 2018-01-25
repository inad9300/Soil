import {Component} from './Component'

/**
 * Function returning a `Component` with the dependencies it demands injected.
 *
 * This interface serves as help for humans more than for the compiler. In most situations, it is better to let
 * TypeScript infer the type rather than explicitly specifying it.
 */
export type ComponentFactory<TInput = any, TOutput = any> = (...dependencies: any[]) => Component<TInput, TOutput>
