<template>
    <div>
        <router-link :to="{ name: 'fruit.index' }">Fruits</router-link>
        <router-link v-if="!accessToken" :to="{ name: 'user.login' }">Login</router-link>
        <router-link v-if="!accessToken" :to="{ name: 'user.register' }">Register</router-link>
        <router-link v-if="accessToken" :to="{ name: 'user.cabinet' }">Cabinet</router-link>
        <a v-if="accessToken" @click.prevent="logout" href="#">Logout</a>
        <router-view :key="$route.fullPath" ></router-view>
    </div>
</template>

<script>
import api from "@/api";
export default {
    data() {
        return {
            accessToken: null,
        }
    },

    mounted() {
        this.getAccessToken()
    },

    updated() {
        this.getAccessToken()
    },

    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token')
        },

        logout() {
            api.post('/api/auth/logout')
                .then(res => {
                    localStorage.removeItem('access_token')
                    this.$router.push({name: 'user.login'})
                })
        },
    }
}
</script>
