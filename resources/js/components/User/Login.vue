<template>
    <div class="container mt-2 w-50">
        <input v-model="email" type="email" class="form-control mb-3" placeholder="Enter email">

        <input v-model="password" type="password" class="form-control mb-3" placeholder="Password">

        <button @click.prevent="login" type="submit" class="btn btn-primary">Login</button>

        <router-link :to="{name: 'user.register'}">
            <button type="button" class="btn btn-primary ms-2">Register</button>
        </router-link>

        <div v-if="error" class="text-danger mt-1">{{ error }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
        }
    },

    methods: {
        login() {
            axios.post('/api/auth/login', {
                email: this.email,
                password: this.password,
            })
                .then(res => {
                    localStorage.setItem('access_token', res.data.access_token)
                    this.$router.push({name: 'user.cabinet'})
                })
                .catch(error => {
                    this.error = error.response.data.error;
                })
        },
    }
}
</script>

<style scoped>

</style>
