/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first element in a one-dimensional double-precision floating-point ndarray which is greater than a corresponding element in another one-dimensional double-precision floating-point ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-dfirst-index-greater-than
*
* @example
* var Float64Vector = require( '@stdlib/ndarray-vector-float64' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var dfirstIndexGreaterThan = require( '@stdlib/blas-ext-base-ndarray-dfirst-index-greater-than' );
*
* var x = new Float64Vector( [ 0.0, 0.0, 1.0, 0.0 ] );
* var y = new Float64Vector( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var idx = dfirstIndexGreaterThan( [ x, y, fromIndex ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
