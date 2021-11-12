# **LATS (Linear Algebra library written in TypeScript)**

## **Installing (2 options):**

### - For the latest stable version: <br />
``` 
npm install lats 
```

### - Import from CDN:
```
<script src="https://unpkg.com/lats">
<!-- add this line above in the heading of your html file: -->
```

## **The example of usage:**

```
import { Vector, Matrix } from 'lats';

/*Vector*/
const vec1 = new Vector([1, 2, 3]);
const vec2 = new Vector([-1, -2, -3]);
const vec3 = vec1.add(vec2);

vec3.values; // returns [0, 0, 0];

/*Matrix*/
const mat = new Matrix(2, 2, [1, 2, 3, 4]);
mat.scale(9);

mat.values; // returns [[9, 18], [27, 36]]
mat.valuesLine; // returns [9, 18, 27, 36] 
```

## **Tests (Mocha + chai)**

to run tests:<br /> 1. clone this repository<br /> 2. install all development dependencies (`npm install`) <br /> 3. run command under this line
```
npm run test
```

## **Documentation**
### new Vector(values: number[]) 

property/method | return  | description
-------|---------|------------
values [getter] | array | without equal sign returns Vector's values as array
values [setter] |   | with equal sign changes Vector's values (new value must be in same dimension as actual)
rows [getter] | number | Vector's size
reset()  |   | replaces Vector's values with 0s
at(index: number) | number | returns Vector's value at position of index
setAt(index: number, value: number) |   | replaces Vector's value at position of index
add(vec2: Vector) | Vector | vec1 + vec2 returns new Vector *
subtract(vec2: Vector) | Vector | vec1 - vec2 returns new Vector *
multiply(vec2: Vector) | Vector | vec1 * vec2 returns new Vector *
divide(vec2: Vector) | Vector | vec1 / vec2 returns new Vector *
inverse() |  | replaces Vector's values with the opposite ([1, 2, 3] => [-1, -2, -3])
clone() | Vector | returns Vector with exactly the same values as parent have
equals(vec2: Vector) | boolean | compares values of vec1 and vec2 and returns true if they are the same, or returns false if they are not
scale(n: number) |  | replaces Vector's values with actual values multiplied by n
dot(vec2: Vector) | number | returns Vectors dot *
sqrdLength() | number | returns Vector's squared length
vlength() | number | returns Vector's length
noramalize() | Vector | returns new Vector that equal to normalized actual
cross(vec2: Vector) | Vector | returns new Vector equal to cross product of vec1 and vec2 *

\* Both vectors must have the same dimension.

### new Matrix(rows: number, columns: numbers, values: number[]) 

property/method | return  | description
-------|---------|------------
values [getter] | array | without equal sign returns values of Matrix  as array of array (like [[1, 2, 3], [4, 5, 6], [7, 8, 9]])
values [setter] |   | with equal sign changes values of Matrix (new value must be in same form and size as actual)
valuesLine [getter] | array | returns values of Matrix as array (like [1, 2, 3, 4, 5, 6, 7, 8, 9])
columns [getter] | number | returns count of columns of Matrix
rows [getter] | number | returns count of rows of Matrix
reset()  |   | replaces values of Matrix with 0s 
clone() | Matrix | returns Matrix with exactly the same values as parent have
at(rIndex: number, cIndex: number) | number | returns value of Matrix at position of indexes
add(mat2: Matrix) | Matrix | mat1 + mat2 returns new Matrix *
subtract(mat2: Matrix) | Matrix | mat1 - mat2 returns new Matrix *
multiply(mat2: Matrix) | Matrix | mat1 * mat2 returns new Matrix *
divide(mat2: Matrix) | Matrix | mat1 / mat2 returns new Matrix *
equals(mat2: Matrix) | boolean | compares values of mat1 and mat2 and returns true if they are the same, or returns false if they are not
square() | Matrix | returns new Matrix with values same as actual has but squared 
transpose() | Matrix | returns new Matrix with values same as actual has but transposed 
scale(n: number) |  | replaces values of Matrix with actual values multiplied by n
inverse() |  | replaces values of Matrix with the opposite ([1, 2, 3] => [-1, -2, -3])

\* Both matrices must have the same form and size.