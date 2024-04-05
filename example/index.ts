import Tonic from '@bicycle-codes/tonic'
import { ScrollProgress } from '../src/index.js'
import './index.css'
import '../src/index.css'

function ScrollExample () {
    return this.html`
        <scroll-progress class="scroll example" id="example"></scroll-progress>
    `
}

Tonic.add(ScrollProgress)
Tonic.add(ScrollExample)
