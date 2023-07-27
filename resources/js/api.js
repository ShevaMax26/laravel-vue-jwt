import router from "@/router";

const api = axios.create();

//start request
api.interceptors.request.use(config => {
    if (localStorage.getItem('access_token')) {
        config.headers = {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    }

    return config
}, error => {
    console.log(111111111)
})
//end request

//start response
api.interceptors.response.use({}, error => {
    if(error.response.status === 401) {
        router.push({name: 'user.login'})
    }
});

export default api
