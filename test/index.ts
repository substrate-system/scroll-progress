import { test } from '@bicycle-codes/tapzero'
import { define, TAG } from '../src/index.js'

define()

test('scroll progress element', async t => {
    document.body.innerHTML = `
        <scroll-progress></scroll-progress>
    `

    const el = document.querySelector(TAG) as HTMLElement
    t.ok(el, 'should find the element by TAG value')
    const style = el.style.cssText
    t.ok(style.includes('--scroll'), 'should have a --scroll css variable')
})
