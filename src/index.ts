import Tonic from '@bicycle-codes/tonic'
import { rafScroll } from '@bicycle-codes/raf-scroll'

export class ScrollProgress extends Tonic {
    state:{ initScroll:number } = { initScroll: 0 }
    next:(()=>any)|null = null

    constructor () {
        super()
        this.state.initScroll = scrollTop()

        // listen for scrolling
        rafScroll(() => {
            const scrolled = scrollTop()
            if (this.state.initScroll === scrolled) return

            // this is for if you scroll quickly, faster than the raf,
            // we will end up with a value for --scroll, even though we
            // are at 0
            if (!this.next) {
                this.next = () => setTimeout(() => {
                    const offset = (window.scrollY /
                        (document.body.offsetHeight - window.innerHeight))

                    // round to 2 decimal places
                    this.style.setProperty('--scroll',
                        (Math.round(offset * 100 * 100) / 100 + 'vw'))
                    this.next = null
                }, 10)
            }

            const offset = (window.scrollY /
                (document.body.offsetHeight - window.innerHeight))

            this.style.setProperty('--scroll',
                (Math.round(offset * 100 * 100) / 100 + 'vw'))

            this.next()
        })
    }

    render () {
        const classes = (['scroll-position'])
            .concat((this.props.class || '').split(' '))
            .filter(Boolean)
            .join(' ')

        console.log('classes', classes)

        return this.html`<div class="${classes}"></div>`
    }
}

function scrollTop () {
    return (document.documentElement.clientHeight ?
        document.documentElement.scrollTop :
        document.body.scrollTop)
}
