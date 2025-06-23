import { html } from './ssr.js'
import { ScrollProgressLight } from './client.js'
export * from './client.js'

/**
 * Full size component -- render and event listening.
 */
export class ScrollProgress extends ScrollProgressLight {
    connectedCallback () {
        super.connectedCallback()

        if (!this.innerHTML) {
            this.render()
        }
    }

    render () {
        this.innerHTML = html()
    }
}
