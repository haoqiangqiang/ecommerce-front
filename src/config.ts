export let API: string;

API = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEVLOPMENT_API_URL!
    : process.env.REACT_APP_PRODUCTION_API_URL!;