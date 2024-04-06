import Tonic from '@bicycle-codes/tonic'
import { rafScroll } from '@bicycle-codes/raf-scroll'

export class ScrollProgress extends Tonic {
    next:(()=>any)|null = null
    ticking = false

    constructor () {
        super()
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

    render () {
        const classes = (['scroll-progress'])
            // @ts-expect-error broken upstream
            .concat((this.props.class || '').split(' '))
            .filter(Boolean)
            .join(' ')

        return this.html`<div class="${classes}"></div>`
    }
}
