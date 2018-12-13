type Nil = null | undefined

type Primitive = boolean | number | string | symbol | Nil

type IfEquals<X, Y, Then, Else> =
    (<T> () => T extends X ? 1 : 2) extends
        (<T> () => T extends Y ? 1 : 2)
            ? Then
            : Else

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends never
        ? never
        : T[P] extends Array<infer U>
            ? Array<DeepPartial<U>>
            : T[P] extends ReadonlyArray<infer U>
                ? ReadonlyArray<DeepPartial<U>>
                : T[P] extends Primitive | Function
                    ? T[P]
                    : DeepPartial<T[P]>
}

type PickDefined<O> = Pick<O, {
    [K in keyof O]: O[K] extends undefined ? never : K /* IfEquals<O[K], {}, never, K> */
}[keyof O]>

// FIXME
type DeepPickDefined<T> = PickDefined<{
    [P in keyof T]: /* T[P] extends Array<infer U>
        ? Array<DeepPickDefined<U>>
        : T[P] extends ReadonlyArray<infer U>
            ? ReadonlyArray<DeepPickDefined<U>>
            : */ T[P] extends Primitive | Function
                ? T[P]
                : DeepPickDefined<T[P]>
}>

type DPD = DeepPickDefined<{
    n?: never
    u?: undefined
    b?: boolean
    o?: {
        n?: never
        u?: undefined
        b?: boolean
        o?: {}
    }
}>
let dpd: DPD = {
    // n: undefined!,
    b: false,
    // u: undefined,
    o: {
        // n: undefined!,
        b: false,
        // u: undefined,
        // WAT: 666
    }
}

type KnownKeys<T> = {
    [K in keyof T]: string extends K
        ? never
        : number extends K
            ? never
            : K
} extends {[_ in keyof T]: infer U}
    ? U
    : never

// FIXME `{[k: string]: number, n: number}` becomes `{[k: string]: never, n: number}`, which is invalid (results in `{}`).
// type WithoutIndices<T> = {
//     [P in keyof T]: T[P] extends never
//         ? never
//         : P extends KnownKeys<T>
//             ? T[P] extends Array<infer U>
//                 ? Array<WithoutIndices<U>>
//                 : T[P] extends ReadonlyArray<infer U>
//                     ? ReadonlyArray<WithoutIndices<U>>
//                     : T[P] extends Primitive | Function
//                         ? T[P]
//                         : WithoutIndices<T[P]>
//             : never
// }

type WithoutIndices<T extends Record<any, any>> = Pick<T, KnownKeys<T>>

type EventFunction = 'onabort' | 'onactive' | 'onaddtrack' | 'onafterprint' | 'onanimationcancel' | 'onanimationend' | 'onanimationiteration' | 'onanimationstart' | 'onaudioend' | 'onaudioprocess' | 'onaudiostart' | 'onauxclick' | 'onbeforeprint' | 'onbeforeunload' | 'onblocked' | 'onblur' | 'onbounce' | 'onboundary' | 'onbufferedamountlow' | 'oncached' | 'oncancel' | 'oncandidatewindowhide' | 'oncandidatewindowshow' | 'oncandidatewindowupdate' | 'oncanplay' | 'oncanplaythrough' | 'onchange' | 'onchecking' | 'onclick' | 'onclose' | 'oncompassneedscalibration' | 'oncomplete' | 'onconnectionstatechange' | 'oncontextmenu' | 'oncontrollerchange' | 'oncopy' | 'oncuechange' | 'oncut' | 'ondatachannel' | 'ondblclick' | 'ondevicechange' | 'ondevicelight' | 'ondevicemotion' | 'ondeviceorientation' | 'ondownloading' | 'ondrag' | 'ondragend' | 'ondragenter' | 'ondragexit' | 'ondragleave' | 'ondragover' | 'ondragstart' | 'ondrop' | 'ondurationchange' | 'onemptied' | 'onencrypted' | 'onend' | 'onended' | 'onenter' | 'onerror' | 'onexit' | 'onfinish' | 'onfocus' | 'onfullscreenchange' | 'onfullscreenerror' | 'ongatheringstatechange' | 'ongotpointercapture' | 'onhashchange' | 'onicecandidate' | 'onicecandidateerror' | 'oniceconnectionstatechange' | 'onicegatheringstatechange' | 'oninactive' | 'oninput' | 'oninvalid' | 'onisolationchange' | 'onkeydown' | 'onkeypress' | 'onkeyup' | 'onlanguagechange' | 'onload' | 'onloadeddata' | 'onloadedmetadata' | 'onloadend' | 'onloadstart' | 'onlocalcandidate' | 'onlostpointercapture' | 'onmark' | 'onmessage' | 'onmessageerror' | 'onmousedown' | 'onmouseenter' | 'onmouseleave' | 'onmousemove' | 'onmouseout' | 'onmouseover' | 'onmouseup' | 'onmousewheel' | 'onmsgesturechange' | 'onmsgesturedoubletap' | 'onmsgestureend' | 'onmsgesturehold' | 'onmsgesturestart' | 'onmsgesturetap' | 'onmsinertiastart' | 'onmsneedkey' | 'onmspointercancel' | 'onmspointerdown' | 'onmspointerenter' | 'onmspointerleave' | 'onmspointermove' | 'onmspointerout' | 'onmspointerover' | 'onmspointerup' | 'onMSVideoFormatChanged' | 'onMSVideoFrameStepCompleted' | 'onMSVideoOptimalLayoutChanged' | 'onmute' | 'onnegotiationneeded' | 'onnomatch' | 'onnoupdate' | 'onobsolete' | 'onoffline' | 'ononline' | 'onopen' | 'onorientationchange' | 'onoverconstrained' | 'onpagehide' | 'onpageshow' | 'onpaste' | 'onpause' | 'onplay' | 'onplaying' | 'onpointercancel' | 'onpointerdown' | 'onpointerenter' | 'onpointerleave' | 'onpointermove' | 'onpointerout' | 'onpointerover' | 'onpointerup' | 'onpopstate' | 'onprocessorerror' | 'onprogress' | 'onratechange' | 'onreadystatechange' | 'onrejectionhandled' | 'onremovetrack' | 'onreset' | 'onresize' | 'onresourcetimingbufferfull' | 'onresult' | 'onresume' | 'onscroll' | 'onsecuritypolicyviolation' | 'onseeked' | 'onseeking' | 'onselect' | 'onselectedcandidatepairchange' | 'onshippingaddresschange' | 'onshippingoptionchange' | 'onshow' | 'onsignalingstatechange' | 'onsoundend' | 'onsoundstart' | 'onspeechend' | 'onspeechstart' | 'onstalled' | 'onstart' | 'onstatechange' | 'onstatsended' | 'onstorage' | 'onsubmit' | 'onsuccess' | 'onsuspend' | 'ontimeout' | 'ontimeupdate' | 'ontoggle' | 'ontonechange' | 'ontouchcancel' | 'ontouchend' | 'ontouchmove' | 'ontouchstart' | 'ontrack' | 'ontransitioncancel' | 'ontransitionend' | 'ontransitionrun' | 'ontransitionstart' | 'onunhandledrejection' | 'onunload' | 'onunmute' | 'onupdatefound' | 'onupdateready' | 'onupgradeneeded' | 'onversionchange' | 'onvisibilitychange' | 'onvoiceschanged' | 'onvolumechange' | 'onvrdisplayactivate' | 'onvrdisplayblur' | 'onvrdisplayconnect' | 'onvrdisplaydeactivate' | 'onvrdisplaydisconnect' | 'onvrdisplayfocus' | 'onvrdisplaypointerrestricted' | 'onvrdisplaypointerunrestricted' | 'onvrdisplaypresentchange' | 'onwaiting' | 'onwheel' | 'onzoom'

type WithoutFunctions<T> = {
    [P in keyof T]: T[P] extends never
        ? never
        : T[P] extends Array<infer U>
            ? Array<WithoutFunctions<U>>
            : T[P] extends ReadonlyArray<infer U>
                ? ReadonlyArray<WithoutFunctions<U>>
                : T[P] extends Function | Nil
                    ? P extends EventFunction
                        ? T[P]
                        : never
                    : T[P] extends Primitive
                        ? T[P]
                        : WithoutFunctions<T[P]>
}

type WithoutReadonly<T> = {
    [P in keyof T]: T[P] extends never
        ? never
        : T[P] extends Primitive | Function
            ? IfEquals<{[_ in P]: T[P]}, {-readonly [_ in P]: T[P]}, T[P], never>
            : T[P] extends Array<infer U>
                ? Array<WithoutReadonly<U>>
                : T[P] extends ReadonlyArray<infer U>
                    ? ReadonlyArray<WithoutReadonly<U>>
                    : WithoutReadonly<T[P]>
}

type ElementOptions<E extends Element> =
    PickDefined<
        DeepPartial<
            WithoutIndices<
                WithoutFunctions<
                    WithoutReadonly<
                        E>>>>>

function form(_props: ElementOptions<HTMLFormElement>): HTMLFormElement {
    return document.createElement('form')
}

// TODO Void elements.

form({
    // ooooooo: 'evt',
    onclick: (evt: MouseEvent) => console.log('WAT?', evt),
    style: {
        display: 'block',
        // parentRule: {},
        99: '99'
    }
})
