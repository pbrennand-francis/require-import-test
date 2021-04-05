const foo = require('./foo')

/**
 * TO REPRODUCE:
 * 1. Trigger quickfix on require.
 * 2. Hit "convert 'require' to 'import'"
 * ACTUAL: import foo = require('./foo')
 * EXPECTED: import {foo} from "./foo"
 */

console.log(foo)