import { describe, expect, it } from 'vitest'
import { a } from '@starter-monorepo/core'

describe('export ', () => {
  it('test number eql', () => {
    expect(a).eql(1)
  })
})
