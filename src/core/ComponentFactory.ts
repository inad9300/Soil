import {Component, BaseInput, BaseOutput} from './Component'

/**
 * Function returning a Component with the dependencies it demands injected. In most situations, it is better let
 * TypeScript figure out the type than explicitely specifying it.
 */
export type ComponentFactory<TInput extends BaseInput, TOutput extends BaseOutput>
    = (...dependencies: Object[]) => Component<TInput, TOutput>