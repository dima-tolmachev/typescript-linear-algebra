export default class Vector {
    _vec: number[] = [];

    constructor(vec: number[]) {
        if (vec && (vec.length == 0 || vec.length > 3)) throw new Error("Vector must be size of 2 or 3.");

        if (vec) {
            this._vec = vec;
        }
    }

    get value(): number[] {
        return this._vec;
    }

    set value(newValue: number[]) {
        if (newValue.length == 0 || newValue.length > 3) throw new Error("Vector must be size of 2 or 3.");
        this._vec = newValue;
    }

    get rows(): number {
        return this._vec.length;
    }

    public reset(): void {
        this._vec = this._vec.fill(0);
    }

    public at(index: number): number {
        return this._vec[index];
    }

    public setAt(index: number, value: number): void {
        if (index < 0 || index > this.rows) throw new Error(`Index must be in ragne of 0 and ${this.rows}.`);
        this._vec[index] = value;
    }

    public add(vec2: Vector): Vector {
        if (this.rows != vec2.rows) throw new Error("Those vectors are from different dimensions.");
        return this.implementToAllElements((v, i) => (v + vec2.at(i)));
    }

    public subtract(vec2: Vector): Vector {
        if (this.rows != vec2.rows) throw new Error("Those vectors are from different dimensions.");
        return this.implementToAllElements((v, i) => (v - vec2.at(i)));
    }

    public multiply(vec2: Vector): Vector {
        if (this.rows != vec2.rows) throw new Error("Those vectors are from different dimensions.");
        return this.implementToAllElements((v, i) => (v * vec2.at(i)));
    }

    public divide(vec2: Vector): Vector {
        if (this.rows != vec2.rows) throw new Error("Those vectors are from different dimensions.");
        return this.implementToAllElements((v, i) => {
            if (!vec2.at(i)) return v;
            return (v / vec2.at(i));
        });
    }

    public inverse(): void {
        this._vec = this.implementToAllElements((v, i) => v * -1).value;
    }

    public clone(): Vector {
        return new Vector(this.value);
    }

    public equals(vec2: Vector): boolean {
        if (this.rows != vec2.rows) throw new Error("Those vectors are from different dimensions.");
        if (this.at(0) != vec2.at(0)) return false;
        if (this.at(1) != vec2.at(1)) return false;
        if (this.at(2) != vec2.at(2)) return false;
        return true;
    }

    public scale(num: number): void {
        this.value = this.implementToAllElements((val) => (val * num)).value;
    }

    private implementToAllElements(func: (v: number, i: number) => number): Vector {
        return new Vector(this._vec.map(func));
    }
}