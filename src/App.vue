<template>
  <div id="app" class="page">
    <div class="page__wrapper">
      <header class="header">
        <div class="header__container">
          <div class="header__wrapper">
            <div class="header__logo">
              <img src="./assets/logo.svg" width="93" height="29" alt="logo" />
            </div>

            <div class="header__links">
              <router-link
                v-for="(route, i) in routes"
                :key="i"
                :to="route.path"
                exact
              >
                {{ route.name }}
              </router-link>
            </div>
          </div>
        </div>
      </header>

      <main class="main">
        <div class="main__container">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </main>

      <footer class="footer">
        <div class="footer__container">
          <div class="footer__copyright">all rights reserved</div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
};
</script>
