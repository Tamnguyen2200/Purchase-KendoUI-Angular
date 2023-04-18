export class getListProduct {
    StatusCode: number = 0;
    ErrorString: string = '';
    ObjectReturn?: {
        Data: listdata[],
        Total: number,
        AggregateResults: string,
        Errors: string
    }
}
export class listdata{
    Code: string = '';
    Barcode: string = '';
    ProductName: string = '';
    Alias: string = '';
    ImageThumb: string = '';
    ImageSmall: string = '';
    ImageLarge: string = '';
    FreeShippingImage: string = '';
    TypeData: number = 0;
    StatusID: number = 0;
    IsNew: boolean = false;
    IsHachi24h: boolean = false;
    IsBestPrice: boolean = false;
    IsSpecial: boolean = false;
    IsGift: boolean = false;
    IsPromotion: boolean = false;
    PromotionID: string = '';
    GroupIDList?: []; 
    IsCombo: boolean = false;
    Price: number = 0;
    PriceBase: number = 0;
    PriceVIP: number = 0;
    Discount: number = 0;
    CategoryID: number = 0;
    OrginalID: number = 0;
    OrginalName: string = '';
    BrandID: number = 0;
    BrandName: string = '';
}
export class body {
    page: number = 0;
    pageSize: number = 0;
    filter: string = '';
    sort: string = '';
}
export class code{
    code: number =0;
}
export class getProduct {
    StatusCode: number = 0;
    ErrorString: string = '';
    ObjectReturn?: {
        Data: listdata,
    }
}