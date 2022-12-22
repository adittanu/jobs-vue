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
        </div>
    </header>

    <router-view />
</template>

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
</style>
