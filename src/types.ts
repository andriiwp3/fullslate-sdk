export interface Response<TBody> extends globalThis.Response {
    data: TBody;
}
