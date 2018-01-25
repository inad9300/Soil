import {counter} from './counter'

const $counter = counter({value: 0})
$counter.value++

document.body.appendChild($counter)