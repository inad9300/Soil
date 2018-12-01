const {h} = soil

document.body.appendChild(
    h.button({onclick: () => alert('Clicked!')}, ['Click me!'])
)
