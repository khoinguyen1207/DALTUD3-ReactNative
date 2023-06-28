import axios, {AxiosInstance} from 'axios';

class Http {
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            url: 'http://localhost:4000',
            timeout: 10000,
            headers: {},
        });
    }
}

const http = new Http().instance;

export default http;
