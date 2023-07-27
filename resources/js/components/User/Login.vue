<template>
    <div class="container mt-2 w-50">
        <input v-model="email" type="email" class="form-control mb-3" placeholder="Enter email">

        <input v-model="password" type="password" class="form-control mb-3" placeholder="Password">

        <button @click.prevent="login" type="submit" class="btn btn-primary">Submit</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
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
                })
        },
    }
}
</script>

<style scoped>

</style>
