type transaction = {
    type:string;
    assetName:string;
    amount:number;
    assetSymbol:string;
    description:string;
    date:string;
    img:any
}

export type wallet = {
    type:string
    amount:number;
    name:string;
    abb:string;
    symbol:string;
    img:any;
}

type Filter = {
    name:string;
    icon: any;
}

type order = {
    exchangePair: string;
    orderType:string;
    base:string;
    quote:string;
    price:number;
    amount:number;
    baseImg:any;
    quoteImg:any;
    percentageProcess:number
}
 
type assets = {
    USD:string[],
    NGN:string[],
    GHS:string[],
    USDC:string[],
    USDT:string[],
    XRP:string[]
}

export const Countries = [
    { name: 'Nigeria', currencyCode: 'NGN',imgUrl: require('../assets/images/assets/nigeria.png') },
    { name: 'Kenya', currencyCode: 'KES', imgUrl: require('../assets/images/assets/kenya.png') },
    { name: 'South Africa', currencyCode: 'ZAR', imgUrl: require('../assets/images/assets/southAfrica.png') },
    // { name: 'Egypt', currencyCode: 'EGP', imgUrl: require('../assets/images/assets/egypt.png') },
    // { name: 'Morocco', currencyCode: 'MAD',imgUrl: require('../assets/images/assets/morocco.png') },
    { name: 'Ghana', currencyCode: 'GHS',imgUrl: require('../assets/images/assets/ghana.png') },
    // { name: 'Tunisia', currencyCode: 'TND', imgUrl: require('../assets/images/assets/tunisia.png') },
    // { name: 'Algeria', currencyCode: 'DZD', imgUrl: require('../assets/images/assets/Algeria.png') },
    { name: 'Uganda', currencyCode: 'UGX', imgUrl: require('../assets/images/assets/uganda.png') },
    // { name: 'Ethiopia', currencyCode: 'ETB', imgUrl: require('../assets/images/assets/ethiopia.png') },
    // { name: 'Cameroon', currencyCode: 'XAF', imgUrl: require('../assets/images/assets/cameroon.png') },
    { name: 'Rwanda', currencyCode: 'RWF', imgUrl: require('../assets/images/assets/rwanda.png') },
    { name: 'Tanzania', currencyCode: 'TZS', imgUrl: require('../assets/images/assets/tanzania.png') },
    // { name: 'Zimbabwe', currencyCode: 'ZWL', imgUrl: require('../assets/images/assets/zimbabwe.png') },
];


// export const assetArray:assets = {
//     USD:['vyre', 'Bank Transfer'],
//     NGN:['MOMO Wallet','vyre', 'Bank Transfer'],
//     GHS:['MOMO Wallet','vyre', 'Bank Transfer'],
//     USDC:['vyre','Blockchain Address'],
//     USDT:['vyre','Blockchain Address'],
//     XRP:['vyre','Blockchain Address'],
    

// }

export const assetArray = {
    USD: {
        methods: ['Vyre', 'Bank Transfer']
    },
    NGN: {
        methods: ['MOMO Wallet', 'Vyre', 'Bank Transfer']
    },
    GHS: {
        methods: ['MOMO Wallet', 'Vyre', 'Bank Transfer']
    },
    USDC: {
        methods: ['Vyre', 'Blockchain Address']
    },
    USDT: {
        methods: ['Vyre', 'Blockchain Address']
    },
    XRP: {
        methods: ['Vyre', 'Blockchain Address']
    }
};

export const assetMap = new Map(Object.entries(assetArray));

export const orders:order[] = [
    {
        exchangePair:'USD/NGN',
        orderType: 'BUY',
        price: 1000,
        amount:5000,
        base:'USD',
        quote:'NGN',
        percentageProcess:40,
        baseImg:require('../assets/images/assets/unitedstates.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    {
        exchangePair:'USDT/NGN',
        orderType: 'BUY',
        price: 950,
        amount:10000,
        base:'USDT',
        quote:'NGN',
        percentageProcess:60,
        baseImg:require('../assets/images/assets/usdt.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    {
        exchangePair:'USD/NGN',
        orderType: 'BUY',
        price: 1000,
        amount:5000,
        base:'USD',
        quote:'NGN',
        percentageProcess:40,
        baseImg:require('../assets/images/assets/unitedstates.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    {
        exchangePair:'XRP/NGN',
        orderType: 'SELL',
        price: 300,
        amount:5500,
        base:'XRP',
        quote:'NGN',
        percentageProcess:92,
        baseImg:require('../assets/images/assets/xrp.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    {
        exchangePair:'USDC/NGN',
        orderType: 'SELL',
        price: 1200,
        amount:3000,
        base:'USDC',
        quote:'NGN',
        percentageProcess:34,
        baseImg:require('../assets/images/assets/usdc.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    {
        exchangePair:'USD/NGN',
        orderType: 'SELL',
        price: 1000,
        amount:5000,
        base:'USD',
        quote:'NGN',
        percentageProcess:65,
        baseImg:require('../assets/images/assets/unitedstates.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    {
        exchangePair:'USDC/NGN',
        orderType: 'SELL',
        price: 1200,
        amount:3000,
        base:'USDC',
        quote:'NGN',
        percentageProcess:34,
        baseImg:require('../assets/images/assets/usdc.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    {
        exchangePair:'USDT/NGN',
        orderType: 'SELL',
        price: 950,
        amount:10000,
        base:'USDT',
        quote:'NGN',
        percentageProcess:25,
        baseImg:require('../assets/images/assets/usdt.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    {
        exchangePair:'XRP/NGN',
        orderType: 'BUY',
        price: 300,
        amount:5500,
        base:'XRP',
        quote:'NGN',
        percentageProcess:46,
        baseImg:require('../assets/images/assets/xrp.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    
]

export const exchangePairs:{name:string;baseImg:any;quoteImg:any;base:string;quote:string}[] = [
    {
        name:'USD/NGN',
        base:'USD',
        quote:'NGN',
        baseImg:require('../assets/images/assets/unitedstates.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    {
        name:'USDT/NGN',
        base:'USDT',
        quote:'NGN',
        baseImg:require('../assets/images/assets/usdt.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    {
        name:'XRP/NGN',
        base:'XRP',
        quote:'NGN',
        baseImg:require('../assets/images/assets/xrp.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    {
        name:'USDC/NGN',
        base:'USDC',
        quote:'NGN',
        baseImg:require('../assets/images/assets/usdc.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },
    {
        name:'GHS/NGN',
        base:'GHS',
        quote:'NGN',
        baseImg:require('../assets/images/assets/ghana.png'),
        quoteImg:require('../assets/images/assets/nigeria.png')
    },

]

export const exchangeFilter:Filter[] = [
    { name:'NGN',
      icon:require('../assets/images/send.png')
    },
    { name:'GHS',
      icon:require('../assets/images/receive.png')
    },
    { name:'USD',
      icon:require('../assets/images/peer-to-peerDark.png')
    },
    { name:'GBP',
      icon:require('../assets/images/bill.png')
    },
    { name:'EUR',
      icon:require('../assets/images/bill.png')
    },
    { name:'USDT',
      icon:require('../assets/images/bill.png')
    }
]

export const wallets:wallet[] = [
    {
        name:'United states dollar',
        amount: 2388,
        symbol:'$',
        abb:'USD',
        type:'fiat',
        img:require('../assets/images/assets/unitedstates.png')
    },
    {
        name:'Nigerian Naira',
        amount: 2388,
        symbol:'₦',
        abb:'NGN',
        type:'fiat',
        img:require('../assets/images/assets/nigeria.png')
    },
    {
        name:'Ghana Cedis',
        amount: 4388,
        symbol:'₵',
        abb:'GHS',
        type:'fiat',
        img:require('../assets/images/assets/ghana.png')
    },
    {
        name:'Tethers',
        amount: 3288,
        symbol:'USDT',
        abb:'USDT',
        type:'crypto',
        img:require('../assets/images/assets/usdt.png')
    },
    {
        name:'Ripple',
        amount: 5388,
        symbol:'XRP',
        abb:'XRP',
        type:'crypto',
        img:require('../assets/images/assets/xrp.png')
    }
]

export const Assets:{name:string,symbol:string,img:any,abb:string,type:string}[] = [
    
    {
        name:'Nigerian Naira',
        symbol:'₦',
        abb:'NGN',
        type:'fiat',
        img:require('../assets/images/assets/nigeria.png')
    },
    {
        name:'Ghana Cedis',
        symbol:'₵',
        abb:'GHS',
        type:'fiat',
        img:require('../assets/images/assets/ghana.png')
    },
    {
        name:'United states dollar',
        symbol:'$',
        abb:'USD',
        type:'fiat',
        img:require('../assets/images/assets/unitedstates.png')
    },
    {
        name:'Ripple',
        symbol:'XRP',
        abb:'XRP',
        type:'crypto',
        img:require('../assets/images/assets/xrp.png')
    },
    {
        name:'United states dollar coin',
        symbol:'USDC',
        abb:'USDC',
        type:'stableCoin',
        img:require('../assets/images/assets/usdc.png')
    },
    {
        name:'Tethers',
        symbol:'USDT',
        abb:'USDT',
        type:'stableCoin',
        img:require('../assets/images/assets/usdt.png')
    },

]
export const transactions:transaction[] = [
    {
        type:'send',
        assetName:'Naira',
        assetSymbol:'NGN',
        description:'sent caleb payment',
        amount:7500,
        date:'Aug 8',
        img:require('../assets/images/assets/nigeria.png')
    },
    {
        type:'receive',
        assetName:'Usdcoin',
        assetSymbol:'USDC',
        description:'transfer from uche',
        amount:4300,
        date:'dec 10',
        img:require('../assets/images/assets/usdc.png')
    },
    {
        type:'receive',
        assetName:'Cedis',
        assetSymbol:'GHS',
        description:'received payment from harvey',
        amount:8300,
        date:'may 10',
        img:require('../assets/images/assets/ghana.png')
    },
    {
        type:'send',
        assetName:'Tethers',
        assetSymbol:'USDT',
        description:'exchange from john',
        amount:8300,
        date:'may 10',
        img:require('../assets/images/assets/usdt.png')
    },
    {
        type:'send',
        assetName:'Tethers',
        assetSymbol:'USDT',
        description:'exchange from john',
        amount:8300,
        date:'may 10',
        img:require('../assets/images/assets/usdt.png')
    },
    {
        type:'send',
        assetName:'Tethers',
        assetSymbol:'USDT',
        description:'exchange from john',
        amount:8300,
        date:'may 10',
        img:require('../assets/images/assets/usdt.png')
    }
]

export const people:{name:string,img:any}[] = [
    {
        name:'indianMan',
        img:require('../assets/images/people/IndianMan.png')
    },
    {
        name:'oldMan',
        img:require('../assets/images/people/oldman.png')
    },
    {
        name:'BlackMan',
        img:require('../assets/images/people/BlackMan.png')
    },
    {
        name:'rastaman',
        img:require('../assets/images/people/rastaman.png')
    },
    {
        name:'collegeStudent',
        img:require('../assets/images/people/CollegeStudent.png')
    },
    {
        name:'AsianMan',
        img:require('../assets/images/people/AsianMan.png')
    },
    {
        name:'lady',
        img:require('../assets/images/people/lady.png')
    }
]

export const transferTypes:{type:string;name:string;description:string;img:any}[] =[
    {
        type:'vyre',
        name:'Vyre',
        description:'transfer asset to other registered users on vyre',
        img:require('../assets/images/vyreLogo.png')
    },
    {
        type:'fiat',
        name:'MOMO Wallet',
        description:'transfer asset to your linked MOMO Wallet',
        img:require('../assets/images/momoLogo.png')
    },
    {
        type:'fiat',
        name:'Bank Transfer',
        description:'transfer to your bank account',
        img:require('../assets/images/bank.png')
    },
    {
        type:'crypto',
        name:'Blockchain Address',
        description:'transfer asset to your linked MOMO Wallet',
        img:require('../assets/images/blockchain.png')
    }

]