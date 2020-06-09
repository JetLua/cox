import { Circle, Polygon } from './shape';
declare type Shape = Circle | Polygon;
export default function (shapeA: Shape, shapeB: Shape): boolean;
export {};
