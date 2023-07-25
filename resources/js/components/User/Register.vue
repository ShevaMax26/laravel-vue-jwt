<template>
    <div class="container mt-2 w-50">
        <input v-model="name" type="text" class="form-control mb-3" placeholder="Enter name">

        <input v-model="email" type="email" class="form-control mb-3" placeholder="Enter email">

        <input v-model="password" type="password" class="form-control mb-3" placeholder="Password">

        <input v-model="password_confirmation" type="password" class="form-control mb-3" placeholder="Confirm Password">

        <button @click.prevent="store" type="submit" class="btn btn-primary">Submit</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },

    methods: {
        store() {
            axios.post('/api/users', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            })
                .then(res => {
                    console.log(res);
                });
        },
    },

}
</script>

<style scoped>

</style>
