<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="RouterView" />
</template>
<style lang="less" scoped>
header {
  width: 50%;
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
  margin: auto;

  .logo {
    margin: 0 2rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;

    nav {
      padding: 1rem 0;
    }

    nav a.router-link-exact-active {
      color: var(--color-text);
    }

    nav a.router-link-exact-active:hover {
      background-color: transparent;
    }

    nav a {
      display: inline-block;
      border-left: 1px solid var(--color-border);
      padding: 0 1rem;
    }

    nav a:first-of-type {
      border: 0;
      padding-left: 0;

    }
  }
}


@media (min-width: 1024px) {
  .RouterView {
    width: 50%;
  }
}

@media (max-width: 1024px) {
  header {
    width: fit-content;
    flex-direction: column;
    line-height: 1.5;
    padding: 0px;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
  }

}
</style>


