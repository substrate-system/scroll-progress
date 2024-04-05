import { test } from '@bicycle-codes/tapzero'
import { ScrollProgress } from '../src/index.js'
import Tonic from '@bicycle-codes/tonic'
Tonic.add(ScrollProgress)

test('example', async t => {
    document.body.innerHTML = `
        <scroll-progress></scroll-progress>
    `
    t.ok(document.querySelector('scroll-progress'), 'should find the element')
})
