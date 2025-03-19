function render(element, container) {
    //codigo aqui
    const mensaje = document.createElement(element.type);
    for (let valor of Object.keys(element.props)) {
        console.log(valor);
        mensaje.setAttribute(valor, element.props[valor]);
    }
    mensaje.innerHTML = element.children;
    container.appendChild(mensaje)


}

const element = {
    type: 'a',
    props: {
        href: 'https://react.dev/',
    },
    children: 'Leer mas acerca de React'
}

const container = document.querySelector('#root');

render(element, container);