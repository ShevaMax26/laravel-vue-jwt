<template>
    <div class="container mt-2 w-50">
        <input v-model="email" type="email" class="form-control mb-3" placeholder="Enter email">

        <input v-model="password" type="password" class="form-control mb-3" placeholder="Password">

        <button type="submit" class="btn btn-primary">Submit</button>
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
}
</script>

<style scoped>

</style>
