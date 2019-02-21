export type Primitive = boolean | number | string | symbol | null | undefined | void

type IfEquals<X, Y, Then, Else> =
    (<T> () => T extends X ? 1 : 2) extends
        (<T> () => T extends Y ? 1 : 2)
            ? Then
            : Else

// TODO Automate.
type EventFunction = 'onabort' | 'onactive' | 'onaddtrack' | 'onafterprint' | 'onanimationcancel' | 'onanimationend' | 'onanimationiteration' | 'onanimationstart' | 'onaudioend' | 'onaudioprocess' | 'onaudiostart' | 'onauxclick' | 'onbeforeprint' | 'onbeforeunload' | 'onblocked' | 'onblur' | 'onbounce' | 'onboundary' | 'onbufferedamountlow' | 'oncached' | 'oncancel' | 'oncandidatewindowhide' | 'oncandidatewindowshow' | 'oncandidatewindowupdate' | 'oncanplay' | 'oncanplaythrough' | 'onchange' | 'onchecking' | 'onclick' | 'onclose' | 'oncompassneedscalibration' | 'oncomplete' | 'onconnectionstatechange' | 'oncontextmenu' | 'oncontrollerchange' | 'oncopy' | 'oncuechange' | 'oncut' | 'ondatachannel' | 'ondblclick' | 'ondevicechange' | 'ondevicelight' | 'ondevicemotion' | 'ondeviceorientation' | 'ondownloading' | 'ondrag' | 'ondragend' | 'ondragenter' | 'ondragexit' | 'ondragleave' | 'ondragover' | 'ondragstart' | 'ondrop' | 'ondurationchange' | 'onemptied' | 'onencrypted' | 'onend' | 'onended' | 'onenter' | 'onerror' | 'onexit' | 'onfinish' | 'onfocus' | 'onfullscreenchange' | 'onfullscreenerror' | 'ongatheringstatechange' | 'ongotpointercapture' | 'onhashchange' | 'onicecandidate' | 'onicecandidateerror' | 'oniceconnectionstatechange' | 'onicegatheringstatechange' | 'oninactive' | 'oninput' | 'oninvalid' | 'onisolationchange' | 'onkeydown' | 'onkeypress' | 'onkeyup' | 'onlanguagechange' | 'onload' | 'onloadeddata' | 'onloadedmetadata' | 'onloadend' | 'onloadstart' | 'onlocalcandidate' | 'onlostpointercapture' | 'onmark' | 'onmessage' | 'onmessageerror' | 'onmousedown' | 'onmouseenter' | 'onmouseleave' | 'onmousemove' | 'onmouseout' | 'onmouseover' | 'onmouseup' | 'onmousewheel' | 'onmsgesturechange' | 'onmsgesturedoubletap' | 'onmsgestureend' | 'onmsgesturehold' | 'onmsgesturestart' | 'onmsgesturetap' | 'onmsinertiastart' | 'onmsneedkey' | 'onmspointercancel' | 'onmspointerdown' | 'onmspointerenter' | 'onmspointerleave' | 'onmspointermove' | 'onmspointerout' | 'onmspointerover' | 'onmspointerup' | 'onMSVideoFormatChanged' | 'onMSVideoFrameStepCompleted' | 'onMSVideoOptimalLayoutChanged' | 'onmute' | 'onnegotiationneeded' | 'onnomatch' | 'onnoupdate' | 'onobsolete' | 'onoffline' | 'ononline' | 'onopen' | 'onorientationchange' | 'onoverconstrained' | 'onpagehide' | 'onpageshow' | 'onpaste' | 'onpause' | 'onplay' | 'onplaying' | 'onpointercancel' | 'onpointerdown' | 'onpointerenter' | 'onpointerleave' | 'onpointermove' | 'onpointerout' | 'onpointerover' | 'onpointerup' | 'onpopstate' | 'onprocessorerror' | 'onprogress' | 'onratechange' | 'onreadystatechange' | 'onrejectionhandled' | 'onremovetrack' | 'onreset' | 'onresize' | 'onresourcetimingbufferfull' | 'onresult' | 'onresume' | 'onscroll' | 'onsecuritypolicyviolation' | 'onseeked' | 'onseeking' | 'onselect' | 'onselectedcandidatepairchange' | 'onshippingaddresschange' | 'onshippingoptionchange' | 'onshow' | 'onsignalingstatechange' | 'onsoundend' | 'onsoundstart' | 'onspeechend' | 'onspeechstart' | 'onstalled' | 'onstart' | 'onstatechange' | 'onstatsended' | 'onstorage' | 'onsubmit' | 'onsuccess' | 'onsuspend' | 'ontimeout' | 'ontimeupdate' | 'ontoggle' | 'ontonechange' | 'ontouchcancel' | 'ontouchend' | 'ontouchmove' | 'ontouchstart' | 'ontrack' | 'ontransitioncancel' | 'ontransitionend' | 'ontransitionrun' | 'ontransitionstart' | 'onunhandledrejection' | 'onunload' | 'onunmute' | 'onupdatefound' | 'onupdateready' | 'onupgradeneeded' | 'onversionchange' | 'onvisibilitychange' | 'onvoiceschanged' | 'onvolumechange' | 'onvrdisplayactivate' | 'onvrdisplayblur' | 'onvrdisplayconnect' | 'onvrdisplaydeactivate' | 'onvrdisplaydisconnect' | 'onvrdisplayfocus' | 'onvrdisplaypointerrestricted' | 'onvrdisplaypointerunrestricted' | 'onvrdisplaypresentchange' | 'onwaiting' | 'onwheel' | 'onzoom'

type PropKeys<E extends Record<any, any>> = {
    [P in keyof E]: string extends P
        ? never
        : number extends P
            ? never
            : E[P] extends never
                ? never
                : E[P] extends Primitive
                    ? IfEquals<{[_ in P]: E[P]}, {-readonly [_ in P]: E[P]}, P, never>
                    : E[P] extends Function
                        ? P extends EventFunction
                            ? IfEquals<{[_ in P]: E[P]}, {-readonly [_ in P]: E[P]}, P, never>
                            : never
                        : P
} extends {[_ in keyof E]: infer U}
    ? U
    : never

type PickPropKeys<O extends Record<any, any>> = Pick<O, PropKeys<O>>

type _Props<E extends Record<any, any>> = {
    [P in keyof E]?: E[P] extends Function
        ? E[P]
        : E[P] extends Array<infer U>
            ? Array<_Props<U>>
            : E[P] extends ReadonlyArray<infer U>
                ? ReadonlyArray<_Props<U>>
                : E[P] extends Record<any, any>
                    ? _Props<PickPropKeys<E[P]>>
                    : E[P]
}

/**
 * From a given `Element`, pick those properties that can be used when creating
 * them. That means recursively ignoring:
 * - Index signatures.
 * - Functions (except those accepting a callback).
 * - Read-only primitive properties.
 * - TODO Read-only non-primitive properties whose properties cannot be
 *   modified at creation time, e.g. `readonly form: HTMLFormElement | null`.
 * - TODO Deprecated fields.
 * - TODO Properties which, after ignoring all properties above, are left with
 *   an empty interface.
 */
export type Props<E extends Partial<Element>> = _Props<PickPropKeys<E>>
