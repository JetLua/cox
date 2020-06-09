import { IPoint } from './Point';
export default class Vec implements IPoint {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    set(x: number, y?: number): void;
    clone(): Vec;
    mul(v: number): this;
    normalize(): this;
    static dot(v1: IPoint, v2: IPoint): number;
}
