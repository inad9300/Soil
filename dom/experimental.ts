type Primitive = boolean | number | string | symbol | null | undefined

type IfEquals<X, Y, Then, Else> =
    (<T> () => T extends X ? 1 : 2) extends
        (<T> () => T extends Y ? 1 : 2)
            ? Then
            : Else

type Clean<T> = Pick<T, {
    [P in keyof T]: string extends P
        ? never
        : number extends P
            ? never
            : T[P] extends never
                ? never
                : IfEquals<T[P], {}, never, P>
} extends {[_ in keyof T]: infer U}
    ? U
    : never>

// FIXME?
type DeepClean<T> = Clean<{
    [P in keyof T]: T[P] extends never
        ? never
        : T[P] extends Array<infer U>
            ? Array<U>
            : T[P] extends ReadonlyArray<infer U>
                ? ReadonlyArray<U>
                : T[P] extends Primitive | Function
                    ? T[P]
                    : DeepClean<T[P]>
}>

let DC: DeepClean<{n: number, o: {b: boolean, n: never, o: {}}}> = {
    n: 9,
    o: {
        b: true
    }
}

type EventFunction = 'onabort' | 'onactive' | 'onaddtrack' | 'onafterprint' | 'onanimationcancel' | 'onanimationend' | 'onanimationiteration' | 'onanimationstart' | 'onaudioend' | 'onaudioprocess' | 'onaudiostart' | 'onauxclick' | 'onbeforeprint' | 'onbeforeunload' | 'onblocked' | 'onblur' | 'onbounce' | 'onboundary' | 'onbufferedamountlow' | 'oncached' | 'oncancel' | 'oncandidatewindowhide' | 'oncandidatewindowshow' | 'oncandidatewindowupdate' | 'oncanplay' | 'oncanplaythrough' | 'onchange' | 'onchecking' | 'onclick' | 'onclose' | 'oncompassneedscalibration' | 'oncomplete' | 'onconnectionstatechange' | 'oncontextmenu' | 'oncontrollerchange' | 'oncopy' | 'oncuechange' | 'oncut' | 'ondatachannel' | 'ondblclick' | 'ondevicechange' | 'ondevicelight' | 'ondevicemotion' | 'ondeviceorientation' | 'ondownloading' | 'ondrag' | 'ondragend' | 'ondragenter' | 'ondragexit' | 'ondragleave' | 'ondragover' | 'ondragstart' | 'ondrop' | 'ondurationchange' | 'onemptied' | 'onencrypted' | 'onend' | 'onended' | 'onenter' | 'onerror' | 'onexit' | 'onfinish' | 'onfocus' | 'onfullscreenchange' | 'onfullscreenerror' | 'ongatheringstatechange' | 'ongotpointercapture' | 'onhashchange' | 'onicecandidate' | 'onicecandidateerror' | 'oniceconnectionstatechange' | 'onicegatheringstatechange' | 'oninactive' | 'oninput' | 'oninvalid' | 'onisolationchange' | 'onkeydown' | 'onkeypress' | 'onkeyup' | 'onlanguagechange' | 'onload' | 'onloadeddata' | 'onloadedmetadata' | 'onloadend' | 'onloadstart' | 'onlocalcandidate' | 'onlostpointercapture' | 'onmark' | 'onmessage' | 'onmessageerror' | 'onmousedown' | 'onmouseenter' | 'onmouseleave' | 'onmousemove' | 'onmouseout' | 'onmouseover' | 'onmouseup' | 'onmousewheel' | 'onmsgesturechange' | 'onmsgesturedoubletap' | 'onmsgestureend' | 'onmsgesturehold' | 'onmsgesturestart' | 'onmsgesturetap' | 'onmsinertiastart' | 'onmsneedkey' | 'onmspointercancel' | 'onmspointerdown' | 'onmspointerenter' | 'onmspointerleave' | 'onmspointermove' | 'onmspointerout' | 'onmspointerover' | 'onmspointerup' | 'onMSVideoFormatChanged' | 'onMSVideoFrameStepCompleted' | 'onMSVideoOptimalLayoutChanged' | 'onmute' | 'onnegotiationneeded' | 'onnomatch' | 'onnoupdate' | 'onobsolete' | 'onoffline' | 'ononline' | 'onopen' | 'onorientationchange' | 'onoverconstrained' | 'onpagehide' | 'onpageshow' | 'onpaste' | 'onpause' | 'onplay' | 'onplaying' | 'onpointercancel' | 'onpointerdown' | 'onpointerenter' | 'onpointerleave' | 'onpointermove' | 'onpointerout' | 'onpointerover' | 'onpointerup' | 'onpopstate' | 'onprocessorerror' | 'onprogress' | 'onratechange' | 'onreadystatechange' | 'onrejectionhandled' | 'onremovetrack' | 'onreset' | 'onresize' | 'onresourcetimingbufferfull' | 'onresult' | 'onresume' | 'onscroll' | 'onsecuritypolicyviolation' | 'onseeked' | 'onseeking' | 'onselect' | 'onselectedcandidatepairchange' | 'onshippingaddresschange' | 'onshippingoptionchange' | 'onshow' | 'onsignalingstatechange' | 'onsoundend' | 'onsoundstart' | 'onspeechend' | 'onspeechstart' | 'onstalled' | 'onstart' | 'onstatechange' | 'onstatsended' | 'onstorage' | 'onsubmit' | 'onsuccess' | 'onsuspend' | 'ontimeout' | 'ontimeupdate' | 'ontoggle' | 'ontonechange' | 'ontouchcancel' | 'ontouchend' | 'ontouchmove' | 'ontouchstart' | 'ontrack' | 'ontransitioncancel' | 'ontransitionend' | 'ontransitionrun' | 'ontransitionstart' | 'onunhandledrejection' | 'onunload' | 'onunmute' | 'onupdatefound' | 'onupdateready' | 'onupgradeneeded' | 'onversionchange' | 'onvisibilitychange' | 'onvoiceschanged' | 'onvolumechange' | 'onvrdisplayactivate' | 'onvrdisplayblur' | 'onvrdisplayconnect' | 'onvrdisplaydeactivate' | 'onvrdisplaydisconnect' | 'onvrdisplayfocus' | 'onvrdisplaypointerrestricted' | 'onvrdisplaypointerunrestricted' | 'onvrdisplaypresentchange' | 'onwaiting' | 'onwheel' | 'onzoom'

type Props<E extends Element> = Clean<DeepProps<E>>

type DeepProps<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? U extends Primitive | Function
            ? Array<U>
            : Array<DeepProps<U>>
        : T[P] extends ReadonlyArray<infer U>
            ? U extends Primitive | Function
                ? ReadonlyArray<U>
                : ReadonlyArray<DeepProps<U>>
            : T[P] extends Function
                ? P extends EventFunction
                    ? IfEquals<{[_ in P]: T[P]}, {-readonly [_ in P]: T[P]}, T[P], never>
                    : never
                : T[P] extends Primitive
                    ? IfEquals<{[_ in P]: T[P]}, {-readonly [_ in P]: T[P]}, T[P], never>
                    : DeepProps<T>
}

type FormProps = Props<HTMLFormElement>

function form(_props: FormProps): HTMLFormElement {
    return document.createElement('form')
}

form({
    ooooooo: undefined,
    name: 'myForm',
    onclick: (evt: MouseEvent) => console.log('WAT?', evt),
    style: {
        display: 'block',
        parentRule: {},
        asdf: '99'
    }
})
