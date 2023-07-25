<template>
    <div>
        <router-link :to="{ name: 'fruit.index' }">Fruits</router-link>
        <router-link :to="{ name: 'user.login' }">Login</router-link>
        <router-link :to="{ name: 'user.register' }">Register</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>
