<template>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="fruit in fruits">
            <th scope="row">{{ fruit.id }}</th>
            <td>{{ fruit.name }}</td>
            <td>{{ fruit.price }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        data() {
            return {
                fruits: [],
            }
        },

        mounted() {
            this.getFruits()
        },
        methods: {
            getFruits() {
                axios.get('/api/fruits')
                    .then(res => {
                        this.fruits = res.data.data;
                    });
            },
        },
    }
</script>
