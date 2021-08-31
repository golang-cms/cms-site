interface SiteConfigModel {
    name: string;
    domain: string;
    address: string;
    phone: string;
    email: string;
}

interface NavModel {
    slug: string;
    name: string;
}
export const siteConfig = {
    name: "SmartCodee",
    domain: "smartcodee.com",
    address: "1275 Av. des Canadiens-de-Montréal, Montréal, QC H3B 0G4",
    phone: "514-999-7155",
    email: "info@smartcodee.com",
    navs: [
        {
            name: "CONTACT US",
            slug: "/contact-us"
        },
        {
            name: "ABOUT US",
            slug: "/about-us"
        },
    ] as NavModel[]
} as SiteConfigModel