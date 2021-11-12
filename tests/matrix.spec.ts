import 'mocha';
import { expect } from 'chai';
import Matrix from '../src/matrix';

const hundred = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

describe('Creating objects with valid and invalid arguments', () => {
    it('creating Matrix with rows = 0 or columns = 0 throws an error', () => {
        expect(() => new Matrix(0, 0, [])).to.throw('Rows and columns must be greater than 0');
    });

    it('creating Matrix with the number of values more than rows * columns throws an error', () => {
        expect(() => new Matrix(0, 0, [])).to.throw('Rows and columns must be greater than 0');
    });

    it('creating valid Matrix 1 row, 1 column', () => {
        expect(JSON.stringify(new Matrix(1, 1, [1]).values)).to.equal(JSON.stringify([[1]]));
    });

    it('creating valid Matrix 2 row, 1 column', () => {
        expect(JSON.stringify(new Matrix(2, 1, [1, 1]).values)).to.equal(JSON.stringify([[1], [1]]));
    });

    it('creating valid Matrix 1 row, 2 column', () => {
        expect(JSON.stringify(new Matrix(1, 2, [1, 1]).values)).to.equal(JSON.stringify([[1, 1]]));
    });

    it('creating valid Matrix 3 row, 2 column', () => {
        expect(JSON.stringify(new Matrix(3, 2, [1, 2, 3, 4, 5, 6]).values)).to.equal(JSON.stringify([[1, 2], [3, 4], [5, 6]]));
    });
});

describe('values getter and setter', () => {
    it('try to change value to Matrix with different size rows of colums count throws an error', () => {
        var mat = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(() => mat.values = [[9, 7], [6, 4], [3, 1]]).to.throw('Columns and rows in value must be the same size as in the matrix you are going to change.');
    });

    it('changing value', () => {
        var mat = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        mat.values = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
        expect(JSON.stringify(mat.values)).to.equal(JSON.stringify([[9, 8, 7], [6, 5, 4], [3, 2, 1]]));
    });
});

describe('at()', () => {
    it('getting value outside bounds of matrix', () => {
        var mat = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(() => mat.at(4, 4)).to.throw('Row or column is out of bounds.');
    });

    it('getting value inside matrix', () => {
        var mat = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(mat.at(2, 2)).to.equal(9);
    });
});

describe('reset()', () => {
    it('reset 2x4 matrix', () => {
        var mat = new Matrix(2, 4, [1, 2, 3, 4, 5, 6, 7, 8]);
        mat.reset();
        expect(JSON.stringify(mat.values)).to.equal(JSON.stringify([[0, 0, 0, 0], [0, 0, 0, 0]]));
    });
});

describe('clone()', () => {
    it('cloning 1x1 matrix', () => {
        var mat = new Matrix(1, 1, [-9]);
        var mat2 = mat.clone();
        expect(JSON.stringify(mat.values)).to.equal(JSON.stringify(mat2.values));
    });

    it('cloning 2x4 matrix', () => {
        var mat = new Matrix(2, 4, [1, 2, 3, 4, 5, 6, 7, 8]);
        var mat2 = mat.clone();
        expect(JSON.stringify(mat.values)).to.equal(JSON.stringify(mat2.values));
    });

    it('cloning 10x10 matrix', () => {
        var mat = new Matrix(10, 10, hundred);
        var mat2 = mat.clone();
        expect(JSON.stringify(mat.values)).to.equal(JSON.stringify(mat2.values));
    });
});

describe('add()', () => {
    it('try to add 1x1 matrix to 2x2 matrix throws error', () => {
        var mat = new Matrix(1, 1, [-9]);
        var mat2 = new Matrix(2, 2, [1, 2, 3, 4]);
        expect(() => mat.add(mat2)).to.throw("Columns and rows in one matrix must be the same size as in the other.");
    });

    it('2x4 matrix + 2x4 matrix', () => {
        var mat = new Matrix(2, 4, [1, 2, 3, 4, 5, 6, 7, 8]);
        var mat2 = new Matrix(2, 4, [9, 8, 7, 6, 5, 4, 3, 2]);
        var ans = mat.add(mat2);
        expect(JSON.stringify(ans.valuesLine)).to.equal(JSON.stringify([10, 10, 10, 10, 10, 10, 10, 10]));
    });
});

describe('subtract()', () => {
    it('try to subtract 1x1 matrix from 2x2 matrix throws error', () => {
        var mat = new Matrix(1, 1, [-9]);
        var mat2 = new Matrix(2, 2, [1, 2, 3, 4]);
        expect(() => mat.subtract(mat2)).to.throw("Columns and rows in one matrix must be the same size as in the other.");
    });

    it('2x4 matrix - 2x4 matrix', () => {
        var mat = new Matrix(2, 4, [1, 2, 3, 4, 5, 6, 7, 8]);
        var mat2 = new Matrix(2, 4, [9, 8, 7, 6, 5, 4, 3, 2]);
        var ans = mat.subtract(mat2);
        expect(JSON.stringify(ans.valuesLine)).to.equal(JSON.stringify([-8, -6, -4, -2, 0, 2, 4, 6]));
    });
});

describe('multiply()', () => {
    it('try to multiply 1x1 matrix by 2x2 matrix throws error', () => {
        var mat = new Matrix(1, 1, [-9]);
        var mat2 = new Matrix(2, 2, [1, 2, 3, 4]);
        expect(() => mat.multiply(mat2)).to.throw("Columns and rows in one matrix must be the same size as in the other.");
    });

    it('2x4 matrix * 2x4 matrix', () => {
        var mat = new Matrix(2, 4, [1, 2, 3, 4, 5, 6, 7, 8]);
        var mat2 = new Matrix(2, 4, [9, 8, 7, 6, 5, 4, 3, 2]);
        var ans = mat.multiply(mat2);
        expect(JSON.stringify(ans.valuesLine)).to.equal(JSON.stringify([9, 16, 21, 24, 25, 24, 21, 16]));
    });
});

describe('divide()', () => {
    it('try to multiply 1x1 matrix by 2x2 matrix throws error', () => {
        var mat = new Matrix(1, 1, [-9]);
        var mat2 = new Matrix(2, 2, [1, 2, 3, 4]);
        expect(() => mat.multiply(mat2)).to.throw("Columns and rows in one matrix must be the same size as in the other.");
    });

    it('2x4 matrix / 2x4 matrix', () => {
        var mat = new Matrix(2, 4, [1, 2, 3, 4, 5, 6, 7, 8]);
        var mat2 = new Matrix(2, 4, [9, 8, 7, 6, 5, 4, 3, 2]);
        var ans = mat.divide(mat2);
        expect(JSON.stringify(ans.valuesLine)).to.equal(JSON.stringify([1 / 9, 2 / 8, 3 / 7, 4 / 6, 1, 6 / 4, 7 / 3, 4]));
    });
});

describe('equals()', () => {
    it('implementing "equals" to non-equal different size matrices', () => {
        var mat = new Matrix(1, 1, [-9]);
        var mat2 = new Matrix(2, 2, [1, 2, 3, 4]);
        expect((mat.equals(mat2))).to.equal(false);
    });

    it('implement "equals" to non-equal same size matrices', () => {
        var mat = new Matrix(1, 1, [-9]);
        var mat2 = new Matrix(1, 1, [9]);
        expect((mat.equals(mat2))).to.equal(false);
    });

    it('2x4 matrix == 2x4 matrix', () => {
        var mat = new Matrix(2, 4, [1, 2, 3, 4, 5, 6, 7, 8]);
        var mat2 = new Matrix(2, 4, [1, 2, 3, 4, 5, 6, 7, 8]);
        expect((mat.equals(mat2))).to.equal(true);
    });
});

describe('square()', () => {
    it('2x4 matrix ** 2', () => {
        var mat = new Matrix(2, 4, [1, 2, 3, 4, 5, 6, 7, 8]);
        var ans = mat.square();
        expect(JSON.stringify(ans.values)).to.equal(JSON.stringify([[1, 4, 9, 16], [25, 36, 49, 64]]));
    });
});

describe('transpose()', () => {
    it('transpose 1x1 matrix', () => {
        var mat = new Matrix(1, 1, [-3921]);
        var ans = mat.transpose();
        expect(JSON.stringify(ans.values)).to.equal(JSON.stringify([[-3921]]));
    });

    it('transpose 2x4 matrix', () => {
        var mat = new Matrix(2, 4, [1, 2, 3, 4, 5, 6, 7, 8]);
        var ans = mat.transpose();
        expect(JSON.stringify(ans.values)).to.equal(JSON.stringify([[1, 5], [3, 4], [2, 6], [7, 8]]));
    });

    it('transpose 3x3 matrix', () => {
        var mat = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        var ans = mat.transpose();
        expect(JSON.stringify(ans.values)).to.equal(JSON.stringify([[1, 4, 7], [2, 5, 8], [3, 6, 9]]));
    });
});

describe('scale()', () => {
    it('scale 1x1 matrix by 1/2', () => {
        var mat = new Matrix(1, 1, [400]);
        mat.scale(1 / 2);
        expect(JSON.stringify(mat.values)).to.equal(JSON.stringify([[200]]));
    });

    it('scale 2x4 matrix by 2', () => {
        var mat = new Matrix(2, 4, [1, 2, 3, 4, 5, 6, 7, 8]);
        mat.scale(2);
        expect(JSON.stringify(mat.valuesLine)).to.equal(JSON.stringify([2, 4, 6, 8, 10, 12, 14, 16]));
    });

    it('scale 3x3 matrix by -1', () => {
        var mat = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        mat.scale(-1);
        expect(JSON.stringify(mat.valuesLine)).to.equal(JSON.stringify([-1, -2, -3, -4, -5, -6, -7, -8, -9]));
    });
});

describe('inverse()', () => {
    it('inverse 1x1 matrix', () => {
        var mat = new Matrix(1, 1, [400]);
        mat.inverse();
        expect(JSON.stringify(mat.values)).to.equal(JSON.stringify([[-400]]));
    });

    it('inverse 2x4 matrix', () => {
        var mat = new Matrix(2, 4, [1, 2, 3, 4, 5, 6, 7, 8]);
        mat.inverse();
        expect(JSON.stringify(mat.valuesLine)).to.equal(JSON.stringify([-1, -2, -3, -4, -5, -6, -7, -8]));
    });

    it('inverse 3x3 matrix', () => {
        var mat = new Matrix(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        mat.inverse();
        expect(JSON.stringify(mat.valuesLine)).to.equal(JSON.stringify([-1, -2, -3, -4, -5, -6, -7, -8, -9]));
    });
});