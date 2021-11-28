export interface SiteConfigModel {
    name: string;
    domain: string;
    address: string;
    phone: string;
    email: string;
    navs: NavModel[];
    socialMedia: NavModel[];
}

export interface NavModel {
    slug: string;
    name: string;
}