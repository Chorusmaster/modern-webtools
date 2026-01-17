<template>
  <v-navigation-drawer expand-on-hover permanent rail>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-language-html5" title="HTML" value="html" to="/html" router></v-list-item>
      <v-list-item prepend-icon="mdi-language-css3" title="CSS" value="css" to="/css" router></v-list-item>
      <v-list-item prepend-icon="mdi-language-javascript" title="JavaScript" value="js" to="/js" router></v-list-item>
      <v-list-item prepend-icon="mdi-language-typescript" title="TypeScript" value="ts" to="/ts" router></v-list-item>
      <v-list-item prepend-icon="mdi-tailwind" title="Tailwind" value="tailwind" to="/tailwind" router></v-list-item>
      <v-list-item prepend-icon="mdi-vuejs" title="Vue" value="vue" to="/vue" router></v-list-item>
      <v-list-item prepend-icon="mdi-vuetify" title="Vuetify" value="vuetify" to="/vuetify" router></v-list-item>

      <v-list-item title="Pinia" value="pinia" to="/pinia" router>
        <template #prepend>
          <v-icon>
            <PiniaIcon />
          </v-icon>
        </template>
      </v-list-item>

      <v-list-item title="Axios" value="axios" to="/axios" router>
        <template #prepend>
          <v-icon>
            <AxiosIcon />
          </v-icon>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import PiniaIcon from "../icons/PiniaIcon.vue";
  import AxiosIcon from "@/icons/AxiosIcon.vue";

  export default {
    components: {
      PiniaIcon,
      AxiosIcon
    }
  };
</script>