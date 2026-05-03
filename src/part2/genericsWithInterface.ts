interface Developer <T, X=null> {
    name: string;
    salary: number;
    device:{
        brand: string;
        model: string;
        releaseYear: number;
    };

    smartWatch: T;
    bike?: X;
}


interface withOutBrand  {
    hartRate: string;
    stopWatch: boolean;
}
interface withBrand  {
    hartRate: string;
    callSupport: boolean;
    calculator: boolean;
    AiFeatures: boolean;
}
type bikeWithBrand = {
    brand: string;
    callSupport: boolean;
    calculator: boolean;
    AiFeatures: boolean;
}



const poorDeveloper: Developer<withOutBrand, bikeWithBrand> = {
    name: 'John',
    salary: 100000,
    device: {
        brand: 'Apple',
        model: 'MacBook Pro',
        releaseYear: 2024
    },
    smartWatch: {
        hartRate: '98', 
        stopWatch: true
    }
}

const richDeveloper: Developer<withBrand> = {
    name: 'Jane',
    salary: 200000,
    device: {
        brand: 'Samsung',
        model: 'Samsung Galaxy S24',
        releaseYear: 2024
    },
    smartWatch: {
        hartRate: '98',
        callSupport: true,
        calculator: true,
        AiFeatures: true
    }
}