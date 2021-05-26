import axios from "axios";
import socketIOClient from "socket.io-client";

const ENDPOINT='https://service-app-ss.herokuapp.com/';
// const baseURL=`${ENDPOINT}`;

export const httpRequst = axios.create({
    baseURL:ENDPOINT
})

export const socket =socketIOClient(ENDPOINT);