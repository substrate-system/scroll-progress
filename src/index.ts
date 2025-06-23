import { html } from './ssr.js'
import { ScrollProgress as ScrollProgressLight, TAG } from './client.js'
export { TAG } from './client.js'

/**
 * Full size component -- rendering and event listening.
 */
export class ScrollProgress extends ScrollProgressLight {
    connectedCallback () {
        super.connectedCallback()

        console.log('innher html', this.innerHTML)

        if (!this.innerHTML) {
            this.render()
        }
    }

    render () {
        this.innerHTML = html()
    }
}

export function define (name?:string) {
    if (!window) return
    if (!('customElements' in window)) return

    if (!isRegistered(name || TAG)) {
        window.customElements.define(name || TAG, ScrollProgress)
    }
}

function isRegistered (elName:string):boolean {
    return document.createElement(elName).constructor !== window.HTMLElement
}

