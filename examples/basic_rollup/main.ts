import {h} from '@soil/dom'
// import {extend} from '@soil/arch'

document.body.appendChild(
    h.button({onclick: () => alert('Clicked!')}, ['Click me?'])
)
