import { expectType } from './test-utils.tspec.js'
import * as O from '.'
import { ArrayExpected as ArrayExpectedE } from './elems.js'
import { ArrayExpected, TraversalExpected } from './partsOf.js'

describe('partsOf', () => {
  it('not a traversal', () => {
    const optic = O.partsOf('foo', 'bar', 'baz')
    expectType<TraversalExpected>()(optic)()
  })

  const lens = O.partsOf(O.elems)

  it('get - source not compatible with the traversal', () => {
    const result = O.get(lens, true)
    expectType<ArrayExpectedE<boolean>>()(result)()
  })

  it('set - source not compatible with the traversal', () => {
    const result = O.set(lens, ['foo'], 123)
    expectType<ArrayExpectedE<number>>()(result)()
  })

  it('set - value not an array', () => {
    const result = O.set(lens, 123, ['foo'])
    expectType<ArrayExpected<number>>()(result)()
  })
})