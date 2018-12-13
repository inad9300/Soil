const {h} = soil.dom

document.body.appendChild(
    h.button({onclick: () => alert('Clicked!')}, ['Click me!'])
)
