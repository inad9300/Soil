type Primitive = boolean | number | string | symbol | null | undefined

type IfEquals<X, Y, Then, Else> =
    (<T> () => T extends X ? 1 : 2) extends
        (<T> () => T extends Y ? 1 : 2)
            ? Then
            : Else

// TODO Automate.
type EventFunction = 'onabort' | 'onactive' | 'onaddtrack' | 'onafterprint' | 'onanimationcancel' | 'onanimationend' | 'onanimationiteration' | 'onanimationstart' | 'onaudioend' | 'onaudioprocess' | 'onaudiostart' | 'onauxclick' | 'onbeforeprint' | 'onbeforeunload' | 'onblocked' | 'onblur' | 'onbounce' | 'onboundary' | 'onbufferedamountlow' | 'oncached' | 'oncancel' | 'oncandidatewindowhide' | 'oncandidatewindowshow' | 'oncandidatewindowupdate' | 'oncanplay' | 'oncanplaythrough' | 'onchange' | 'onchecking' | 'onclick' | 'onclose' | 'oncompassneedscalibration' | 'oncomplete' | 'onconnectionstatechange' | 'oncontextmenu' | 'oncontrollerchange' | 'oncopy' | 'oncuechange' | 'oncut' | 'ondatachannel' | 'ondblclick' | 'ondevicechange' | 'ondevicelight' | 'ondevicemotion' | 'ondeviceorientation' | 'ondownloading' | 'ondrag' | 'ondragend' | 'ondragenter' | 'ondragexit' | 'ondragleave' | 'ondragover' | 'ondragstart' | 'ondrop' | 'ondurationchange' | 'onemptied' | 'onencrypted' | 'onend' | 'onended' | 'onenter' | 'onerror' | 'onexit' | 'onfinish' | 'onfocus' | 'onfullscreenchange' | 'onfullscreenerror' | 'ongatheringstatechange' | 'ongotpointercapture' | 'onhashchange' | 'onicecandidate' | 'onicecandidateerror' | 'oniceconnectionstatechange' | 'onicegatheringstatechange' | 'oninactive' | 'oninput' | 'oninvalid' | 'onisolationchange' | 'onkeydown' | 'onkeypress' | 'onkeyup' | 'onlanguagechange' | 'onload' | 'onloadeddata' | 'onloadedmetadata' | 'onloadend' | 'onloadstart' | 'onlocalcandidate' | 'onlostpointercapture' | 'onmark' | 'onmessage' | 'onmessageerror' | 'onmousedown' | 'onmouseenter' | 'onmouseleave' | 'onmousemove' | 'onmouseout' | 'onmouseover' | 'onmouseup' | 'onmousewheel' | 'onmsgesturechange' | 'onmsgesturedoubletap' | 'onmsgestureend' | 'onmsgesturehold' | 'onmsgesturestart' | 'onmsgesturetap' | 'onmsinertiastart' | 'onmsneedkey' | 'onmspointercancel' | 'onmspointerdown' | 'onmspointerenter' | 'onmspointerleave' | 'onmspointermove' | 'onmspointerout' | 'onmspointerover' | 'onmspointerup' | 'onMSVideoFormatChanged' | 'onMSVideoFrameStepCompleted' | 'onMSVideoOptimalLayoutChanged' | 'onmute' | 'onnegotiationneeded' | 'onnomatch' | 'onnoupdate' | 'onobsolete' | 'onoffline' | 'ononline' | 'onopen' | 'onorientationchange' | 'onoverconstrained' | 'onpagehide' | 'onpageshow' | 'onpaste' | 'onpause' | 'onplay' | 'onplaying' | 'onpointercancel' | 'onpointerdown' | 'onpointerenter' | 'onpointerleave' | 'onpointermove' | 'onpointerout' | 'onpointerover' | 'onpointerup' | 'onpopstate' | 'onprocessorerror' | 'onprogress' | 'onratechange' | 'onreadystatechange' | 'onrejectionhandled' | 'onremovetrack' | 'onreset' | 'onresize' | 'onresourcetimingbufferfull' | 'onresult' | 'onresume' | 'onscroll' | 'onsecuritypolicyviolation' | 'onseeked' | 'onseeking' | 'onselect' | 'onselectedcandidatepairchange' | 'onshippingaddresschange' | 'onshippingoptionchange' | 'onshow' | 'onsignalingstatechange' | 'onsoundend' | 'onsoundstart' | 'onspeechend' | 'onspeechstart' | 'onstalled' | 'onstart' | 'onstatechange' | 'onstatsended' | 'onstorage' | 'onsubmit' | 'onsuccess' | 'onsuspend' | 'ontimeout' | 'ontimeupdate' | 'ontoggle' | 'ontonechange' | 'ontouchcancel' | 'ontouchend' | 'ontouchmove' | 'ontouchstart' | 'ontrack' | 'ontransitioncancel' | 'ontransitionend' | 'ontransitionrun' | 'ontransitionstart' | 'onunhandledrejection' | 'onunload' | 'onunmute' | 'onupdatefound' | 'onupdateready' | 'onupgradeneeded' | 'onversionchange' | 'onvisibilitychange' | 'onvoiceschanged' | 'onvolumechange' | 'onvrdisplayactivate' | 'onvrdisplayblur' | 'onvrdisplayconnect' | 'onvrdisplaydeactivate' | 'onvrdisplaydisconnect' | 'onvrdisplayfocus' | 'onvrdisplaypointerrestricted' | 'onvrdisplaypointerunrestricted' | 'onvrdisplaypresentchange' | 'onwaiting' | 'onwheel' | 'onzoom'

/**
 * Roughly, ignore index signatures and read-only properties.
 */
type PropKeys<T extends Record<any, any>> = {
    [K in keyof T]: string extends K
        ? never
        : number extends K
            ? never
            : T[K] extends never
                ? never
                : T[K] extends Primitive
                    ? IfEquals<{[_ in K]: T[K]}, {-readonly [_ in K]: T[K]}, K, never>
                    : T[K] extends Function
                        ? K extends EventFunction
                            ? IfEquals<{[_ in K]: T[K]}, {-readonly [_ in K]: T[K]}, K, never>
                            : never
                        : IfEquals<T[K], {}, never, K>
} extends {[_ in keyof T]: infer U}
    ? U
    : never

type PickPropKeys<O extends Record<any, any>> = Pick<O, PropKeys<O>>

type _Props<T extends Record<any, any>> = {
    [P in keyof T]?: T[P] extends Function
        ? T[P]
        : T[P] extends Array<infer U>
            ? Array<_Props<U>>
            : T[P] extends ReadonlyArray<infer U>
                ? ReadonlyArray<_Props<U>>
                : T[P] extends Record<any, any>
                    ? _Props<PickPropKeys<T[P]>>
                    : T[P]
}

export type Props<E extends Element> = _Props<PickPropKeys<E>>
