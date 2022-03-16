export interface PriceRequest {
    origin: string;
    destination: string;
    depart_date?: string;
    return_date?: string;
    currency: string;
}