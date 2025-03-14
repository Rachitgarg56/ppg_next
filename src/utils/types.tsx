export interface CoreValue {
    image: string;
    title: string;
    subtitle: string;
    details: string;
}

export interface WorkElementBullet {
    title?: string;
    details?: string;
}
  
export interface WorkElement {
    title?: string;
    subtitle?: string;
    bullets?: WorkElementBullet[];
}
  
export interface Work {
    title?: string;
    subtitle?: string;
    image?: string;
    elements?: WorkElement[];
    slug: string;
}