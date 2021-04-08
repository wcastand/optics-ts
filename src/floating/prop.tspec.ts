import { expectType } from './test-utils.tspec'
import * as O from '.'
import { NoSuchProperty } from './prop'

type Source = { foo: number; bar: { baz: string } }
declare const s: Source

describe('prop', () => {
  it('error', () => {
    const result = O.get(O.prop('invalid'))(s)
    expectType<NoSuchProperty<'invalid', Source>>()(result)()
  })

  it('error - composed', () => {
    const result = O.get(O.compose('bar', 'baz', 'invalid'))(s)
    expectType<NoSuchProperty<'invalid', string>>()(result)()
  })
})
