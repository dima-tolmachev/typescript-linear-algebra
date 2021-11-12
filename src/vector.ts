export default class Vector {
    _vec: number[] = [];

    constructor(vec: number[]) {
        if (vec && (vec.length == 0 || vec.length > 3)) throw new Error("Vector must be size of 2 or 3.");

        if (vec) {
            this._vec = vec;
        }
    }

    get values(): number[] {
        return this._vec;
    }

    set values(newValue: number[]) {
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
        this._vec = this.implementToAllElements((v, i) => v * -1).values;
    }

    public clone(): Vector {
        return new Vector(this.values);
    }

    public equals(vec2: Vector): boolean {
        if (this.rows != vec2.rows) throw new Error("Those vectors are from different dimensions.");
        if (this.at(0) != vec2.at(0)) return false;
        if (this.at(1) != vec2.at(1)) return false;
        if (this.at(2) != vec2.at(2)) return false;
        return true;
    }

    public scale(num: number): void {
        this.values = this.implementToAllElements((val) => (val * num)).values;
    }

    public dot(vec2: Vector): number {
        if (this.rows != vec2.rows) throw new Error("Those vectors are from different dimensions.");
        return this.values.reduce((res, v, i) => res + (v * vec2.at(i)), 0);
    }

    public sqrdLength(): number {
        return this.dot(this);
    }

    public vlength(): number {
        return Math.abs(Math.sqrt(this.sqrdLength()));
    }

    public noramalize(): Vector {
        return this.implementToAllElements((v) => {
            if (v == 0) return 0;
            return v / this.vlength();
        });
    }

    public cross(vec2: Vector): Vector {
        if (this.rows != 3 || vec2.rows != 3) throw new Error('Operation requires 3 dimensional vectors only.');
        var result: number[] = [];
        result[0] = this.at(1) * vec2.at(2) - this.at(2) * vec2.at(1);
        result[1] = this.at(2) * vec2.at(0) - this.at(0) * vec2.at(2);
        result[2] = this.at(0) * vec2.at(1) - this.at(1) * vec2.at(0);
        return new Vector(result);
    }

    /**
     * Tricky iterator used for many other methods.
     */
    private implementToAllElements(func: (v: number, i: number) => number): Vector {
        return new Vector(this._vec.map(func));
    }
}