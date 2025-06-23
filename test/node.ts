import { test } from '@substrate-system/tapzero'
import { html, outerHTML } from '../src/ssr.js'

test('create a string', t => {
    const element = html()
    t.equal(typeof element, 'string', 'should return an HTML string')
    console.log('element...', element)
    t.ok(element.includes('div class="scroll-progress"'),
        'should have the inner html')
})

test('outer HTML', t => {
    const el = outerHTML()
    t.ok(el.includes('<scroll-progress'), 'should include the tag name')
})
