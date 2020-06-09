export default class Vec3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    set(x: number, y?: number, z?: number): void;
    clone(): Vec3;
    static cross(v1: Vec3, v2: Vec3): Vec3;
}
