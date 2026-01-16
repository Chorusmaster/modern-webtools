<template>
  <v-container fluid class="ma-0 pa-0">
      <v-main class="py-0 pr-0 pl-14">
      
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

<style scoped>
  .v-btn--active {
    color: #4DE600;
    font-weight: 700;
  }
</style>