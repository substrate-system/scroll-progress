import { test } from '@bicycle-codes/tapzero'
import '../src/index.js'

test('example', async t => {
    document.body.innerHTML = `
        <scroll-progress></scroll-progress>
    `
    t.ok(document.querySelector('scroll-progress'), 'should find the element')
})
