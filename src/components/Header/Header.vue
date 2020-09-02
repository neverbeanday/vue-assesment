<template>
    <div id="header">
        <img class="logo" src="../../assets/images/brand.png" alt="">
        <div class="nav" >
            <router-link to="/">Home</router-link>
            <router-link to="/discover">Discover</router-link>
            <router-link to="/register">Register</router-link>
            <img src="../../assets/images/icon-search.png" alt="">
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style src="./style.scss" lang="scss"/>