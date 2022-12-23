<template>
    <header>
        <div class="wrapper">
            <nav>
                <router-link to="/">Home</router-link>
                |
                <router-link :to="{ name: 'About' }">About</router-link>
                |
                <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
            </nav>
            <button @click="redirect">Redirect</button>
            <button @click="back">Go Back</button>
            <button @click="forward">Go Forward</button>
        </div>
    </header>

    <router-view />
</template>

<script>
export default {
    methods: {
        redirect() {
            this.$router.push({ name: "Home" })
        },
        back() {
            this.$router.go(-1)
        },
        forward() {
            this.$router.go(1)
        },
    },
}
</script>

<style>
#app {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a.router-link-exact-active {
    color: white;
    background: rosybrown;
}

nav a.router-link-exact-active:hover {
    color: #2c3e50;
    background-color: transparent;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 10px;
    border-radius: 4px;
}

nav a:hover {
    background: rgb(223, 188, 188);
}

nav a:first-of-type {
    border: 0;
}
button {
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
}
</style>
