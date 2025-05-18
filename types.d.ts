type Country = {
    name: {
        common: string;
        official: string;
        nativeName: {
            [langCode: string]: {
                official: string;
                common: string;
            };
        };
    };
    tld: string[];
    currencies: {
        [currencyCode: string]: {
            name: string;
            symbol: string;
        };
    };
    capital: string[];
    region: string;
    subregion: string;
    languages: {
        [langCode: string]: string;
    };
    borders: string[];
    population: number;
    flags: {
        png: string;
        svg: string;
        alt: string;
    }
};