export type MetaType = {
    [key: string]: string | number;
};
export type ErrorSpec = {
    message: string;
    type: string;
    meta: MetaType;
};
/**
 * SuccessTargetError - Indicates that insufficient pages loaded to meet
 * a specified success target. Contains information about each error that caused
 * problems and the URLs they affect.
 */
export declare class SuccessTargetError extends Error {
    readonly isSuccessTargetError: boolean;
    readonly urlErrors: {
        [url: string]: ErrorSpec;
    };
    constructor(urlErrors: {
        [url: string]: UrlError;
    });
}
/**
 * Base class for URL specific errors, which can be bundled inside a
 * SuccessTargetError.
 */
export declare class UrlError extends Error {
    readonly type: string;
    readonly meta: MetaType;
    constructor(type: string, meta: MetaType, message: string);
}
/**
 * HttpError - Indicates an HTTP request has failed with a non-2xx status code.
 */
export declare class HttpError extends UrlError {
    constructor({ url, code }: {
        url: string;
        code: number;
    });
}
/**
 * UnknownError - Indicates that fetch() threw an error with its own error string.
 * Contains a raw (and difficult to translate) error message generated by fetch.
 */
export declare class UnknownError extends UrlError {
    constructor({ url, message }: {
        url: string;
        message: string;
    });
}
/**
 * CrossDomainError - Indicates that a requested URL failed due to CORS / security
 * limitations imposed by the browser.
 */
export declare class CrossDomainError extends UrlError {
    constructor({ url }: {
        url: string;
    });
}
/**
 * LoadTimeoutError - Indicates that an HTTP request failed due to a timeout.
 */
export declare class LoadTimeoutError extends UrlError {
    constructor({ url }: {
        url: string;
    });
}
/**
 * RedirectError - Indicates that a requested URL failed due to an HTTP redirection of that url.
 */
export declare class RedirectError extends UrlError {
    constructor({ url, redirectUrl }: {
        url: string;
        redirectUrl: string;
    });
}
/**
 * UrlVerifyError - Indicates that a provided BrowserInterface verifyUrl
 * callback returned false for a page which was otherwise loaded successfully.
 */
export declare class UrlVerifyError extends UrlError {
    constructor({ url }: {
        url: string;
    });
}
/**
 * EmptyCSSError - Indicates that a requested URL does not have any CSS in its external style sheet(s) and therefore Critical CSS could not be generated.
 */
export declare class EmptyCSSError extends UrlError {
    constructor({ url }: {
        url: string;
    });
}
/**
 * XFrameDenyError - Indicates that a requested URL failed due to x-frame-options deny configuration
 */
export declare class XFrameDenyError extends UrlError {
    constructor({ url }: {
        url: any;
    });
}
