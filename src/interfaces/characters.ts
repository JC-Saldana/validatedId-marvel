import { Comic, URL } from "./comics";

export interface Character {
    id: number;
    name: string;
    total: number;
    description: string;
    urls: [URL];
    comics: {
        items: [Comic]
    };
    thumbnail: {
        path: string;
        extension: string;
    }
    series: {
        available: number;
    };
    stories: {
        available: number;
    };
}

export interface FormData {
    nameStartsWith: string;
    comics: [Comic];
    limit: number;
    orderBy: string;
}