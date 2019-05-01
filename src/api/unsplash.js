import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 444ca4ec5af7a2bc7c90f30a78f0676e15a00f9107cda3fd0e5d88ca3c1be167'
    }
});