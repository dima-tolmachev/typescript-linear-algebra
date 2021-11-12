export default class Matrix {
    _rows: number = 0;
    _columns: number = 0;
    _mat: number[][] = [];

    constructor(rows: number, columns: number, val: number[]) {
        if (rows < 1 || columns < 1) throw new Error("Rows and columns must be greater than 0");
        if (rows * columns != val.length) throw new Error("Wrong amount of values");
        this._columns = columns;
        this._rows = rows;
        this._mat = Matrix.convertToMatrix(rows, columns, val);
    }

    get columns(): number {
        return this._columns;
    }

    get rows(): number {
        return this._rows;
    }

    get values(): number[][] {
        return this._mat;
    }

    get valuesLine(): number[] {
        return Matrix.convertToLine(this.values);
    }

    set values(val: number[][]) {
        if (val.length != this.rows || val[0].length != this.columns) throw new Error("Columns and rows in value must be the same size as in the matrix you are going to change.");
        this._mat = val;
    }

    public at(row: number, column: number): number {
        if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) throw new Error("Row or column is out of bounds.");
        return this.values[row][column];
    }

    public reset(): void {
        this.values = this.values.map((row) => row.map(() => 0));
    }

    public clone(): Matrix {
        return new Matrix(this.rows, this.columns, this.valuesLine);
    }

    public add(mat: Matrix): Matrix {
        if (this.columns != mat.columns || this.rows != mat.rows) throw new Error("Columns and rows in one matrix must be the same size as in the other.");

        var result: number[] = [];
        for (let i: number = 0; i < this.columns * this.rows; i++) {
            result.push(this.valuesLine[i] + mat.valuesLine[i]);
        }
        return new Matrix(this.rows, this.columns, result);
    }

    public subtract(mat: Matrix): Matrix {
        if (this.columns != mat.columns || this.rows != mat.rows) throw new Error("Columns and rows in one matrix must be the same size as in the other.");

        var result: number[] = [];
        for (let i: number = 0; i < this.columns * this.rows; i++) {
            result.push(this.valuesLine[i] - mat.valuesLine[i]);
        }
        return new Matrix(this.rows, this.columns, result);
    }

    public multiply(mat: Matrix): Matrix {
        if (this.columns != mat.columns || this.rows != mat.rows) throw new Error("Columns and rows in one matrix must be the same size as in the other.");

        var result: number[] = [];
        for (let i: number = 0; i < this.columns * this.rows; i++) {
            result.push(this.valuesLine[i] * mat.valuesLine[i]);
        }
        return new Matrix(this.rows, this.columns, result);
    }

    public divide(mat: Matrix): Matrix {
        if (this.columns != mat.columns || this.rows != mat.rows) throw new Error("Columns and rows in one matrix must be the same size as in the other.");

        var result: number[] = [];
        for (let i: number = 0; i < this.columns * this.rows; i++) {
            result.push(this.valuesLine[i] / mat.valuesLine[i]);
        }
        return new Matrix(this.rows, this.columns, result);
    }

    public equals(mat: Matrix): boolean {
        if (this.columns != mat.columns || this.rows != mat.rows) return false;
        if (JSON.stringify(this.valuesLine) !== JSON.stringify(mat.valuesLine)) return false;
        return true;
    }

    public square(): Matrix {
        return new Matrix(this.rows, this.columns, this.valuesLine.map(v => v * v));
    }

    public transpose(): Matrix {
        var transposed: Matrix = this.clone();
        for (var i = 0; i < transposed.values.length; i++) {
            for (var j = 0; j < i; j++) {
                [transposed.values[i][j], transposed.values[j][i]] = [transposed.values[j][i], transposed.values[i][j]];
            }
        }

        return new Matrix(transposed.columns, transposed.rows, transposed.valuesLine);
    }

    public scale(num: number): void {
        this.values = this.values.map((row) => row.map((v) => v * num));
    }

    public inverse(): void {
        this.values = this.values.map((row) => row.map((v) => v * -1));
    }

    static convertToMatrix(rows: number, columns: number, line: number[]): number[][] {
        var result: number[][] = [];
        for (let i: number = 0; i < rows; i++) {
            var row: number[] = [];
            for (let j: number = 0; j < columns; j++) {
                row.push(line[i * columns + j]);
            }
            result.push(row);
            row = [];
        }

        return result;
    }

    static convertToLine(mat: number[][]): number[] {
        var result: number[] = [];
        for (let i: number = 0; i < mat.length; i++) {
            for (let j: number = 0; j < mat[0].length; j++) {
                result.push(mat[i][j]);
            }
        }

        return result;
    }
}