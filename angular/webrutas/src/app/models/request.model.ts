
export interface RequestGroup {
    info: InfoOptions;
    results: any[]
}

export interface InfoOptions {
    count: number;
    next: string;
    prev: string;
    pages: number;

}