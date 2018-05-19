const {suite, test} = intern.getInterface('tdd')
const {assert} = intern.getPlugin('chai')
import {createElement} from '../../../support/testing/createElement'
import {elementsAreEqual} from '../../../support/testing/elementsAreEqual'

import {s} from './s'

const globalProps = {
    id: 'c',
    tabIndex: 2,
    'aria-label': 'An accessible label.',
    dataset: {x: 'y'},
    style: {color: 'black'},
    className: {baseVal: 'b'}
}

const globalAttrs = `
    id="c"
    tabindex="2"
    aria-label="An accessible label."
    data-x="y"
    style="color: black;"
    class="b"
`

suite('s()', () => {

    test('all elements', () => {

        const _a: s.A = s.a(globalProps, [])
        elementsAreEqual(_a, createElement(`<a ${globalAttrs}></a>`, true))

        const _circle: s.Circle = s.circle(globalProps, [])
        elementsAreEqual(_circle, createElement(`<circle ${globalAttrs}></circle>`, true))

        const _clipPath: s.ClipPath = s.clipPath(globalProps, [])
        elementsAreEqual(_clipPath, createElement(`<clipPath ${globalAttrs}></clipPath>`, true))

        const _defs: s.Defs = s.defs(globalProps, [])
        elementsAreEqual(_defs, createElement(`<defs ${globalAttrs}></defs>`, true))

        const _desc: s.Desc = s.desc(globalProps, [])
        elementsAreEqual(_desc, createElement(`<desc ${globalAttrs}></desc>`, true))

        const _ellipse: s.Ellipse = s.ellipse(globalProps, [])
        elementsAreEqual(_ellipse, createElement(`<ellipse ${globalAttrs}></ellipse>`, true))

        const _feBlend: s.FeBlend = s.feBlend(globalProps, [])
        elementsAreEqual(_feBlend, createElement(`<feBlend ${globalAttrs}></feBlend>`, true))

        const _feColorMatrix: s.FeColorMatrix = s.feColorMatrix(globalProps, [])
        elementsAreEqual(_feColorMatrix, createElement(`<feColorMatrix ${globalAttrs}></feColorMatrix>`, true))

        const _feComponentTransfer: s.FeComponentTransfer = s.feComponentTransfer(globalProps, [])
        elementsAreEqual(_feComponentTransfer, createElement(`<feComponentTransfer ${globalAttrs}></feComponentTransfer>`, true))

        const _feComposite: s.FeComposite = s.feComposite(globalProps, [])
        elementsAreEqual(_feComposite, createElement(`<feComposite ${globalAttrs}></feComposite>`, true))

        const _feConvolveMatrix: s.FeConvolveMatrix = s.feConvolveMatrix(globalProps, [])
        elementsAreEqual(_feConvolveMatrix, createElement(`<feConvolveMatrix ${globalAttrs}></feConvolveMatrix>`, true))

        const _feDiffuseLighting: s.FeDiffuseLighting = s.feDiffuseLighting(globalProps, [])
        elementsAreEqual(_feDiffuseLighting, createElement(`<feDiffuseLighting ${globalAttrs}></feDiffuseLighting>`, true))

        const _feDisplacementMap: s.FeDisplacementMap = s.feDisplacementMap(globalProps, [])
        elementsAreEqual(_feDisplacementMap, createElement(`<feDisplacementMap ${globalAttrs}></feDisplacementMap>`, true))

        const _feDistantLight: s.FeDistantLight = s.feDistantLight(globalProps, [])
        elementsAreEqual(_feDistantLight, createElement(`<feDistantLight ${globalAttrs}></feDistantLight>`, true))

        const _feFlood: s.FeFlood = s.feFlood(globalProps, [])
        elementsAreEqual(_feFlood, createElement(`<feFlood ${globalAttrs}></feFlood>`, true))

        const _feFuncA: s.FeFuncA = s.feFuncA(globalProps, [])
        elementsAreEqual(_feFuncA, createElement(`<feFuncA ${globalAttrs}></feFuncA>`, true))

        const _feFuncB: s.FeFuncB = s.feFuncB(globalProps, [])
        elementsAreEqual(_feFuncB, createElement(`<feFuncB ${globalAttrs}></feFuncB>`, true))

        const _feFuncG: s.FeFuncG = s.feFuncG(globalProps, [])
        elementsAreEqual(_feFuncG, createElement(`<feFuncG ${globalAttrs}></feFuncG>`, true))

        const _feFuncR: s.FeFuncR = s.feFuncR(globalProps, [])
        elementsAreEqual(_feFuncR, createElement(`<feFuncR ${globalAttrs}></feFuncR>`, true))

        const _feGaussianBlur: s.FeGaussianBlur = s.feGaussianBlur(globalProps, [])
        elementsAreEqual(_feGaussianBlur, createElement(`<feGaussianBlur ${globalAttrs}></feGaussianBlur>`, true))

        const _feImage: s.FeImage = s.feImage(globalProps, [])
        elementsAreEqual(_feImage, createElement(`<feImage ${globalAttrs}></feImage>`, true))

        const _feMerge: s.FeMerge = s.feMerge(globalProps, [])
        elementsAreEqual(_feMerge, createElement(`<feMerge ${globalAttrs}></feMerge>`, true))

        const _feMergeNode: s.FeMergeNode = s.feMergeNode(globalProps, [])
        elementsAreEqual(_feMergeNode, createElement(`<feMergeNode ${globalAttrs}></feMergeNode>`, true))

        const _feMorphology: s.FeMorphology = s.feMorphology(globalProps, [])
        elementsAreEqual(_feMorphology, createElement(`<feMorphology ${globalAttrs}></feMorphology>`, true))

        const _feOffset: s.FeOffset = s.feOffset(globalProps, [])
        elementsAreEqual(_feOffset, createElement(`<feOffset ${globalAttrs}></feOffset>`, true))

        const _fePointLight: s.FePointLight = s.fePointLight(globalProps, [])
        elementsAreEqual(_fePointLight, createElement(`<fePointLight ${globalAttrs}></fePointLight>`, true))

        const _feSpecularLighting: s.FeSpecularLighting = s.feSpecularLighting(globalProps, [])
        elementsAreEqual(_feSpecularLighting, createElement(`<feSpecularLighting ${globalAttrs}></feSpecularLighting>`, true))

        const _feSpotLight: s.FeSpotLight = s.feSpotLight(globalProps, [])
        elementsAreEqual(_feSpotLight, createElement(`<feSpotLight ${globalAttrs}></feSpotLight>`, true))

        const _feTile: s.FeTile = s.feTile(globalProps, [])
        elementsAreEqual(_feTile, createElement(`<feTile ${globalAttrs}></feTile>`, true))

        const _feTurbulence: s.FeTurbulence = s.feTurbulence(globalProps, [])
        elementsAreEqual(_feTurbulence, createElement(`<feTurbulence ${globalAttrs}></feTurbulence>`, true))

        const _filter: s.Filter = s.filter(globalProps, [])
        elementsAreEqual(_filter, createElement(`<filter ${globalAttrs}></filter>`, true))

        const _foreignObject: s.ForeignObject = s.foreignObject(globalProps, [])
        elementsAreEqual(_foreignObject, createElement(`<foreignObject ${globalAttrs}></foreignObject>`, true))

        const _g: s.G = s.g(globalProps, [])
        elementsAreEqual(_g, createElement(`<g ${globalAttrs}></g>`, true))

        const _gradient: s.Gradient = s.gradient(globalProps, [])
        elementsAreEqual(_gradient, createElement(`<gradient ${globalAttrs}></gradient>`, true))

        const _image: s.Image = s.image(globalProps, [])
        elementsAreEqual(_image, createElement(`<image ${globalAttrs}></image>`, true))

        const _line: s.Line = s.line(globalProps, [])
        elementsAreEqual(_line, createElement(`<line ${globalAttrs}></line>`, true))

        const _linearGradient: s.LinearGradient = s.linearGradient(globalProps, [])
        elementsAreEqual(_linearGradient, createElement(`<linearGradient ${globalAttrs}></linearGradient>`, true))

        const _marker: s.Marker = s.marker(globalProps, [])
        elementsAreEqual(_marker, createElement(`<marker ${globalAttrs}></marker>`, true))

        const _mask: s.Mask = s.mask(globalProps, [])
        elementsAreEqual(_mask, createElement(`<mask ${globalAttrs}></mask>`, true))

        const _metadata: s.Metadata = s.metadata(globalProps, [])
        elementsAreEqual(_metadata, createElement(`<metadata ${globalAttrs}></metadata>`, true))

        const _path: s.Path = s.path(globalProps, [])
        elementsAreEqual(_path, createElement(`<path ${globalAttrs}></path>`, true))

        const _pattern: s.Pattern = s.pattern(globalProps, [])
        elementsAreEqual(_pattern, createElement(`<pattern ${globalAttrs}></pattern>`, true))

        const _polygon: s.Polygon = s.polygon(globalProps, [])
        elementsAreEqual(_polygon, createElement(`<polygon ${globalAttrs}></polygon>`, true))

        const _polyline: s.Polyline = s.polyline(globalProps, [])
        elementsAreEqual(_polyline, createElement(`<polyline ${globalAttrs}></polyline>`, true))

        const _radialGradient: s.RadialGradient = s.radialGradient(globalProps, [])
        elementsAreEqual(_radialGradient, createElement(`<radialGradient ${globalAttrs}></radialGradient>`, true))

        const _rect: s.Rect = s.rect(globalProps, [])
        elementsAreEqual(_rect, createElement(`<rect ${globalAttrs}></rect>`, true))

        const _script: s.Script = s.script(globalProps, [])
        elementsAreEqual(_script, createElement(`<script ${globalAttrs}></script>`, true))

        const _stop: s.Stop = s.stop(globalProps, [])
        elementsAreEqual(_stop, createElement(`<stop ${globalAttrs}></stop>`, true))

        const _style: s.Style = s.style(globalProps, [])
        elementsAreEqual(_style, createElement(`<style ${globalAttrs}></style>`, true))

        const _svg: s.Svg = s.svg(globalProps, [])
        elementsAreEqual(_svg, createElement(`<svg ${globalAttrs}></svg>`, true))

        const _switch: s.Switch = s.switch_(globalProps, [])
        elementsAreEqual(_switch, createElement(`<switch ${globalAttrs}></switch>`, true))

        const _symbol: s.Symbol = s.symbol(globalProps, [])
        elementsAreEqual(_symbol, createElement(`<symbol ${globalAttrs}></symbol>`, true))

        const _text: s.Text = s.text(globalProps, [])
        elementsAreEqual(_text, createElement(`<text ${globalAttrs}></text>`, true))

        const _textPath: s.TextPath = s.textPath(globalProps, [])
        elementsAreEqual(_textPath, createElement(`<textPath ${globalAttrs}></textPath>`, true))

        const _title: s.Title = s.title(globalProps, [])
        elementsAreEqual(_title, createElement(`<title ${globalAttrs}></title>`, true))

        const _tspan: s.Tspan = s.tspan(globalProps, [])
        elementsAreEqual(_tspan, createElement(`<tspan ${globalAttrs}></tspan>`, true))

        const _use: s.Use = s.use(globalProps, [])
        elementsAreEqual(_use, createElement(`<use ${globalAttrs}></use>`, true))

        const _view: s.View = s.view(globalProps, [])
        elementsAreEqual(_view, createElement(`<view ${globalAttrs}></view>`, true))
    })

    test('event listeners', () => {
        const $count = s.tspan({id: 'count'}, ['0'])
        const $counter = s.tspan({}, [
            s.tspan({
                id: 'increment-btn',
                onclick: () => $count.textContent = '' + (parseInt($count.textContent as string) + 1)
            }),
            $count,
            s.tspan({
                id: 'decrement-btn',
                onclick: () => $count.textContent = '' + (parseInt($count.textContent as string) - 1)
            })
        ])

        document.body.appendChild($counter)

        const countFromDom = document.getElementById('count') as any as s.Tspan
        const incrementBtn = document.getElementById('increment-btn') as any as s.Tspan
        const decrementBtn = document.getElementById('decrement-btn') as any as s.Tspan

        click(incrementBtn) // 1
        click(incrementBtn) // 2
        click(decrementBtn) // 1
        click(incrementBtn) // 2
        click(decrementBtn) // 1
        click(decrementBtn) // 0
        click(incrementBtn) // 1
        click(incrementBtn) // 2
        click(incrementBtn) // 3

        assert.strictEqual(countFromDom.textContent, '3', 'count is 3')

        function click(target: SVGElement) {
            const event = document.createEvent('SVGEvents')
            event.initEvent('click', true, true)
            target.dispatchEvent(event)
        }
    })
})
