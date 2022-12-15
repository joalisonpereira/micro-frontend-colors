export declare function emitEvent(name: string, detail: Pick<CustomEventInit, "detail">): void;
export declare function listenEvent(name: string, cb: EventListenerOrEventListenerObject): () => void;
export declare function randomRgb(n1?: () => number, n2?: () => number, n3?: () => number): string;
export declare function randomRgba(n1?: () => number, n2?: () => number, n3?: () => number): string;
export declare const Metrics: {
    headerHeight: number;
    containerWidth: number;
};
