export default class {
    vertices: number[];
    x: number;
    y: number;
    constructor({ x, y, vertices }: IOption);
    setVertices(vertices: number[]): void;
}
interface IOption {
    x?: number;
    y?: number;
    vertices?: number[];
}
export {};
