export interface ProjectType{
    id: number;
    propert_listing_no: string | null;
    image: string;
    cover: string;
    icon: string;
    home_area: string;
    year_built: string;
    brochure: string;
    start_price: string;
    end_price: string;
    title: string;
    description: string;
    keywords: string;
    slug: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
}

export interface BlogType{
    id: number;
    image: string;
    cover: string;
    title: string;
    description: string;
    keywords: string;
    slug: string;
    meta_title: string;
    meta_description: string;
    meta_keywords: string;
    category?: string;
}