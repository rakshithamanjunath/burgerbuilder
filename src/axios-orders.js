import axios from 'axios';
const instance = axios.create({
    baseURL:'https://burgerbuilder-reactproje-afa1e.firebaseio.com/'
});
export default instance;