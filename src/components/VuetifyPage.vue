<template>
  <v-container fluid class="ma-0 pa-0">
      <v-main class="pa-0">
        <v-app-bar :elevation="2" class="px-4">
          <v-app-bar-title>Dummy web</v-app-bar-title>

          <v-spacer />

          <v-btn to="/code">Code</v-btn>
          <v-btn to="/" class="text-accent font-weight-bold">Home</v-btn>
          <v-btn to="/basket">Basket</v-btn>
        </v-app-bar>

      
        <v-fade-transition hide-on-leave mode="out-in">
          <div :key="$route.fullPath">
            <router-view v-slot="{ Component }">
              <component :is="Component" />
            </router-view>

            <v-footer class="d-flex align-center justify-center ga-2 mt-16">
              {{ new Date().getFullYear() }} — Just another company
            </v-footer>
          </div>
        </v-fade-transition>
      </v-main>
  </v-container>
</template>