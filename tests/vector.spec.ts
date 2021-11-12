import 'mocha';
import { expect } from 'chai';
import Vector from '../src/vector';

describe('Creating objects with valid and invalid arguments', () => {
    it('creating Vector without any values throws an error', () => {
        expect(() => new Vector([])).to.throw('Vector must be size of 2 or 3.');
    });

    it('creating valid Vector (2 dimensional)', () => {
        expect(() => new Vector([1, -3])).to.not.throw('Vector must be size of 2 or 3.');
    });

    it('creating valid Vector (3 dimensional)', () => {
        expect(() => new Vector([1, -3, 0])).to.not.throw('Vector must be size of 2 or 3.');
    });

    it('creating invalid Vector throws an error (4 dimensional)', () => {
        expect(() => new Vector([1, -3, 0])).to.not.throw('Vector must be size of 2 or 3.');
    });
});

describe('valuess getter and setter', () => {
    it('valuess getter (1 dimensional vector)', () => {
        expect(JSON.stringify(new Vector([1]).values)).to.equal(JSON.stringify([1]));
    });

    it('valuess getter (2 dimensional vector)', () => {
        expect(JSON.stringify(new Vector([1, 2]).values)).to.equal(JSON.stringify([1, 2]));
    });

    it('valuess getter (3 dimensional vector)', () => {
        expect(JSON.stringify(new Vector([1, 2, 3]).values)).to.equal(JSON.stringify([1, 2, 3]));
    });

    it('valuess setter (3 dimensional vector)', () => {
        const vec = new Vector([1, 2, 3]);
        vec.values = [1, 2, 5];
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([1, 2, 5]));
    });

    it('valuess setter replacing 3 dimensional vector with 2 dimensional vector', () => {
        const vec = new Vector([1, 2, 3]);
        vec.values = [-10, 100];
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([-10, 100]));
    });

    it('valuess setter replacing 3 dimensional vector with 1 dimensional vector', () => {
        const vec = new Vector([1, 2, 3]);
        vec.values = [0];
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([0]));
    });

    it('valuess setter replacing 3 dimensional vector with invalid valuess', () => {
        const vec = new Vector([1, 2, 3]);
        expect(() => vec.values = [1, 1, 1, 1, 1, 1, 1, 1]).to.throw('Vector must be size of 2 or 3.');
    });
});

describe('valuess getter and setter', () => {
    it('valuess getter (1 dimensional vector)', () => {
        expect(JSON.stringify(new Vector([1]).values)).to.equal(JSON.stringify([1]));
    });

    it('valuess getter (2 dimensional vector)', () => {
        expect(JSON.stringify(new Vector([1, 2]).values)).to.equal(JSON.stringify([1, 2]));
    });

    it('valuess getter (3 dimensional vector)', () => {
        expect(JSON.stringify(new Vector([1, 2, 3]).values)).to.equal(JSON.stringify([1, 2, 3]));
    });

    it('valuess setter (3 dimensional vector)', () => {
        const vec = new Vector([1, 2, 3]);
        vec.values = [1, 2, 5];
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([1, 2, 5]));
    });

    it('valuess setter replacing 3 dimensional vector with 2 dimensional vector', () => {
        const vec = new Vector([1, 2, 3]);
        vec.values = [-10, 100];
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([-10, 100]));
    });

    it('valuess setter replacing 3 dimensional vector with 1 dimensional vector', () => {
        const vec = new Vector([1, 2, 3]);
        vec.values = [0];
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([0]));
    });

    it('valuess setter replacing 3 dimensional vector with invalid valuess', () => {
        const vec = new Vector([1, 2, 3]);
        expect(() => vec.values = [1, 1, 1, 1, 1, 1, 1, 1]).to.throw('Vector must be size of 2 or 3.');
    });
});

describe('rows getter', () => {
    it('1 dimensional vector', () => {
        expect(new Vector([-10101010]).rows).to.equal(1);
    });

    it('2 dimensional vector', () => {
        expect(new Vector([9, -9]).rows).to.equal(2);
    });

    it('3 dimensional vector', () => {
        expect(new Vector([1, 2, 3]).rows).to.equal(3);
    });
});

describe('reset()', () => {
    it('1 dimensional vector', () => {
        const vec = new Vector([10]);
        vec.reset();
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([0]));
    });

    it('2 dimensional vector', () => {
        const vec = new Vector([10, 20]);
        vec.reset();
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([0, 0]));
    });

    it('3 dimensional vector', () => {
        const vec = new Vector([10, 20, 30]);
        vec.reset();
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([0, 0, 0]));
    });
});

describe('at()', () => {
    it('1 dimensional vector', () => {
        const vec = new Vector([10]);
        expect(vec.at(0)).to.equal(10);
    });

    it('2 dimensional vector', () => {
        const vec = new Vector([10, 20]);
        expect(vec.at(1)).to.equal(20);
    });

    it('3 dimensional vector', () => {
        const vec = new Vector([10, 20, 30]);
        expect(vec.at(vec.rows - 1)).to.equal(30);
    });

    it('1 dimensional vector, but the index is outside the range', () => {
        const vec = new Vector([10]);
        expect(vec.at(1)).to.equal(undefined);
    });

    it('2 dimensional vector, but the index is outside the range', () => {
        const vec = new Vector([10, 20]);
        expect(vec.at(-1)).to.equal(undefined);
    });

    it('3 dimensional vector, but the index is outside the range', () => {
        const vec = new Vector([10, 20, 30]);
        expect(vec.at(vec.rows)).to.equal(undefined);
    });
});

describe('setAt()', () => {
    it('1 dimensional vector', () => {
        const vec = new Vector([10]);
        vec.setAt(0, -1);
        expect(vec.at(0)).to.equal(-1);
    });

    it('2 dimensional vector', () => {
        const vec = new Vector([10, 20]);
        vec.setAt(1, 20);
        expect(vec.at(1)).to.equal(20);
    });

    it('3 dimensional vector', () => {
        const vec = new Vector([10, 20, 30]);
        vec.setAt(2, 10000000000);
        expect(vec.at(vec.rows - 1)).to.equal(10000000000);
    });

    it('Attempt to set a values outside the actual vector length throw an error', () => {
        const vec = new Vector([10, 20]);
        expect(() => vec.setAt(4, 30)).to.throw(`Index must be in ragne of 0 and ${vec.rows}.`);
    });
});

describe('add()', () => {
    it('1 dimensional vector + another one', () => {
        const vec = new Vector([10]);
        expect(JSON.stringify(vec.add(new Vector([20])).values)).to.equal(JSON.stringify(new Vector([30]).values));
    });

    it('2 dimensional vector + another one', () => {
        const vec = new Vector([10, 10]);
        expect(JSON.stringify(vec.add(new Vector([20, 20])).values)).to.equal(JSON.stringify((new Vector([30, 30]).values)));
    });

    it('3 dimensional vector + another one', () => {
        const vec = new Vector([10, -1, 0]);
        expect(JSON.stringify(vec.add(new Vector([0, -9, 1])).values)).to.equal(JSON.stringify(new Vector([10, -10, 1]).values));
    });

    it('Attempt to add 2 demensional vector to 3 demensional throw an error', () => {
        const vec = new Vector([10, 20, -1000]);
        expect(() => vec.add(new Vector([0, -9]))).to.throw(`Those vectors are from different dimensions.`);
    });
});

describe('subtract()', () => {
    it('1 dimensional vector - another one', () => {
        const vec = new Vector([10]);
        expect(JSON.stringify(vec.subtract(new Vector([20])).values)).to.equal(JSON.stringify(new Vector([-10]).values));
    });

    it('2 dimensional vector - another one', () => {
        const vec = new Vector([10, 10]);
        expect(JSON.stringify(vec.subtract(new Vector([20, 20])).values)).to.equal(JSON.stringify((new Vector([-10, -10]).values)));
    });

    it('3 dimensional vector - another one', () => {
        const vec = new Vector([10, -1, 0]);
        expect(JSON.stringify(vec.subtract(new Vector([0, -9, 1])).values)).to.equal(JSON.stringify(new Vector([10, 8, -1]).values));
    });

    it('Attempt to substuct 2 demensional vector from 3 demensional throw an error', () => {
        const vec = new Vector([10, 20, -1000]);
        expect(() => vec.subtract(new Vector([0, -9]))).to.throw(`Those vectors are from different dimensions.`);
    });
});

describe('multiply()', () => {
    it('1 dimensional vector * another one', () => {
        const vec = new Vector([10]);
        expect(JSON.stringify(vec.multiply(new Vector([20])).values)).to.equal(JSON.stringify(new Vector([200]).values));
    });

    it('2 dimensional vector * another one', () => {
        const vec = new Vector([10, 10]);
        expect(JSON.stringify(vec.multiply(new Vector([20, 20])).values)).to.equal(JSON.stringify((new Vector([200, 200]).values)));
    });

    it('3 dimensional vector * another one', () => {
        const vec = new Vector([10, -1, 0]);
        expect(JSON.stringify(vec.multiply(new Vector([0, -9, 1])).values)).to.equal(JSON.stringify(new Vector([0, 9, 0]).values));
    });

    it('Attempt to multiply 2 demensional vector by 3 demensional throw an error', () => {
        const vec = new Vector([10, 20, -1000]);
        expect(() => vec.multiply(new Vector([0, -9]))).to.throw(`Those vectors are from different dimensions.`);
    });
});

describe('divide()', () => {
    it('1 dimensional vector / another one', () => {
        const vec = new Vector([20]);
        expect(JSON.stringify(vec.divide(new Vector([20])).values)).to.equal(JSON.stringify(new Vector([1]).values));
    });

    it('2 dimensional vector / another one', () => {
        const vec = new Vector([100, 100]);
        expect(JSON.stringify(vec.divide(new Vector([5, 20])).values)).to.equal(JSON.stringify((new Vector([20, 5]).values)));
    });

    it('3 dimensional vector / another one', () => {
        const vec = new Vector([10, -1, 0]);
        expect(JSON.stringify(vec.divide(new Vector([1, 1, 1])).values)).to.equal(JSON.stringify(new Vector([10, -1, 0]).values));
    });

    it('Attempt to divide 2 demensional vector by 2 demensional witch has "0" values', () => {
        const vec = new Vector([-11, 11, 99]);
        expect(JSON.stringify(vec.divide(new Vector([0, 0, 9])).values)).to.equal(JSON.stringify(new Vector([-11, 11, 11]).values));
    });

    it('Attempt to divide 2 demensional vector by 3 demensional throw an error', () => {
        const vec = new Vector([10, 20, -1000]);
        expect(() => vec.divide(new Vector([0, -9]))).to.throw(`Those vectors are from different dimensions.`);
    });
});

describe('inverse()', () => {
    it('inversing 1 dimensional vector', () => {
        const vec = new Vector([20]);
        vec.inverse();
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([-20]));
    });

    it('inversing 2 dimensional vector', () => {
        const vec = new Vector([100, 100]);
        vec.inverse();
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([-100, -100]));
    });

    it('inversing 3 dimensional vector', () => {
        const vec = new Vector([10, -1, 0]);
        vec.inverse();
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([-10, 1, 0]));
    });
});

describe('clone()', () => {
    it('cloning 1 dimensional vector', () => {
        const vec = new Vector([20]);
        const vec2 = vec.clone();
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify(vec2.values));
    });

    it('cloning 2 dimensional vector', () => {
        const vec = new Vector([100, 100]);
        const vec2 = vec.clone();
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify(vec2.values));
    });

    it('cloning 3 dimensional vector', () => {
        const vec = new Vector([10, -1, 0]);
        const vec2 = vec.clone();
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify(vec2.values));
    });
});

describe('equals()', () => {
    it('comparing 2 equal 1 dimensional vector', () => {
        const vec = new Vector([20]);
        expect(vec.equals(new Vector([20]))).to.be.true;
    });

    it('comparing 2 different 2 dimensional vector', () => {
        const vec = new Vector([100, 100]);
        expect(vec.equals(new Vector([200, -291]))).to.be.false;
    });

    it('comparing 2 equal 3 dimensional vector', () => {
        const vec = new Vector([10, -1, 0]);
        expect(vec.equals(new Vector([10, -1, 0]))).to.be.true;
    });

    it('comparing 3 dimensional vector and 2 dimensional vector', () => {
        const vec = new Vector([10, -1, 0]);
        expect(() => vec.equals(new Vector([10, -1]))).to.throw(`Those vectors are from different dimensions.`);
    });
});

describe('scale()', () => {
    it('scaling 1 dimensional vector', () => {
        const vec = new Vector([10]);
        vec.scale(1000);
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([10000]));
    });

    it('scaling 2 dimensional vector', () => {
        const vec = new Vector([10, 20]);
        vec.scale(-2);
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([-20, -40]));
    });

    it('scaling 3 dimensional vector', () => {
        const vec = new Vector([10, 20, 30]);
        vec.scale(0);
        expect(JSON.stringify(vec.values)).to.equal(JSON.stringify([0, 0, 0]));
    });
});

describe('dot()', () => {
    it('dot product of 1 dimensional vectors', () => {
        const vec1 = new Vector([10]);
        const vec2 = new Vector([2])
        expect(vec1.dot(vec2)).to.equal(20);
    });

    it('dot product of 2 dimensional vectors', () => {
        const vec1 = new Vector([-90, 20]);
        const vec2 = new Vector([-1, 2])
        expect(vec1.dot(vec2)).to.equal(130);
    });

    it('dot product of 3 dimensional vectors', () => {
        const vec1 = new Vector([-9, -9, -9]);
        const vec2 = new Vector([1, 1, 1])
        expect(vec1.dot(vec2)).to.equal(-27);
    });

    it('try to find the dot product of vectors of different dimensions', () => {
        const vec1 = new Vector([10, 20, 30]);
        const vec2 = new Vector([-8, 2])
        expect(() => vec1.dot(vec2)).to.throw('Those vectors are from different dimensions.');
    });
});

describe('sqrdLength()', () => {
    it('squared length of 1 dimensional vector', () => {
        const vec = new Vector([10]);
        expect(vec.sqrdLength()).to.equal(100);
    });

    it('squared length of 2 dimensional vector', () => {
        const vec = new Vector([-90, 20]);
        expect(vec.sqrdLength()).to.equal(8500);
    });

    it('squared length of 3 dimensional vector', () => {
        const vec = new Vector([-9, -9, -9]);
        expect(vec.sqrdLength()).to.equal(243);
    });
});

describe('vlength()', () => {
    it('length of 1 dimensional vector', () => {
        const vec = new Vector([-87]);
        expect(vec.vlength()).to.equal(87);
    });

    it('length of 2 dimensional vector', () => {
        const vec = new Vector([-90, -20]);
        expect(Math.round(vec.vlength())).to.equal(92);
    });

    it('length of 3 dimensional vector', () => {
        const vec = new Vector([-9, -9, -9]);
        expect(Math.round(vec.vlength())).to.equal(16);
    });
});

describe('noramalize()', () => {
    it('noramalize 1 dimensional vector', () => {
        const vec = new Vector([-87]);
        expect(JSON.stringify(vec.noramalize().values)).to.equal(JSON.stringify(new Vector([-87/87]).values));
    });

    it('noramalize 2 dimensional vector', () => {
        const vec = new Vector([4, 3]);
        expect(JSON.stringify(vec.noramalize().values)).to.equal(JSON.stringify(new Vector([4/5, 3/5]).values));
    });

    it('noramalize 3 dimensional vector', () => {
        const vec = new Vector([0, 0, 0]);
        expect(JSON.stringify(vec.noramalize().values)).to.equal(JSON.stringify(new Vector([0, 0, 0]).values));
    });
});

describe('cross()', () => {
    it('try to cross 1 dimensional vector with another one', () => {
        const vec1 = new Vector([3]);
        const vec2 = new Vector([2]);
        expect(() => vec1.cross(vec2)).to.throw('Operation requires 3 dimensional vectors only.');
    });

    it('try to cross 2 dimensional vector with another one', () => {
        const vec1 = new Vector([3, 5]);
        const vec2 = new Vector([2, 5]);
        expect(() => vec1.cross(vec2)).to.throw('Operation requires 3 dimensional vectors only.');
    });

    it('cross 3 dimensional vectors', () => {
        const vec1 = new Vector([3, 5, 3]);
        const vec2 = new Vector([2, 5, 2]);
        expect(JSON.stringify(vec1.cross(vec2).values)).to.equal(JSON.stringify(new Vector([-5, 0, 5]).values));
    });
});