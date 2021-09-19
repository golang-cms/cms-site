export interface PostModel {
    title: string;
    slug: string;
    translations: TranslationModel[];
}

export interface TranslationModel {
    head: string;
    content: string;
    javascript: string;
}