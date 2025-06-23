import { rafScroll } from '@bicycle-codes/raf-scroll'

export const TAG = 'scroll-progress'

export class ScrollProgress extends HTMLElement {
    private next:(()=>any)|null = null
    private ticking = false

    static NAME = TAG

    static define = define

    connectedCallback () {
        const offset = (window.scrollY /
        (document.body.offsetHeight - window.innerHeight))

        this.style.setProperty('--scroll',
            (Math.round(offset * 100 * 100) / 100 + 'vw'))

        // listen for scrolling
        rafScroll(() => {
            // this is for if you scroll quickly, faster than the raf,
            // we will end up with a value for --scroll, even though we
            // are at 0
            if (!this.ticking) {
                this.next = () => setTimeout(() => {
                    const offset = (window.scrollY /
                        (document.body.offsetHeight - window.innerHeight))

                    // round to 2 decimal places
                    this.style.setProperty('--scroll',
                        (Math.round(offset * 100 * 100) / 100 + 'vw'))
                    this.ticking = false
                }, 20)

                this.ticking = true
            }

            const offset = (window.scrollY /
                (document.body.offsetHeight - window.innerHeight))

            this.style.setProperty('--scroll',
                (Math.round(offset * 100 * 100) / 100 + 'vw'))

            this.next && this.next()
        })
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
