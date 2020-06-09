interface IPoint {
    x: number;
    y: number;
}
declare class Point implements IPoint {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    set(x: number, y?: number): this;
}
export { Point, IPoint, };
