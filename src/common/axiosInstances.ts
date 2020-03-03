import axios from "axios";

export const axiosAuthInstance = axios.create();

axiosAuthInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-type'] = "application/json; charset=utf-8";

