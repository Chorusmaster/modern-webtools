<template>
  <v-navigation-drawer expand-on-hover permanent rail>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-language-html5" title="HTML" value="html"></v-list-item>
      <v-list-item prepend-icon="mdi-language-css3" title="CSS" value="css"></v-list-item>
      <v-list-item prepend-icon="mdi-language-javascript" title="JavaScript" value="js"></v-list-item>
      <v-list-item prepend-icon="mdi-language-typescript" title="TypeScript" value="ts"></v-list-item>
      <v-list-item prepend-icon="mdi-bootstrap" title="Bootstrap" value="bootstrap"></v-list-item>
      <v-list-item prepend-icon="mdi-tailwind" title="Tailwind" value="tailwind"></v-list-item>
      <v-list-item prepend-icon="mdi-vuejs" title="Vue" value="vue"></v-list-item>
      <v-list-item prepend-icon="mdi-vuetify" title="Vuetify" value="vuetify"></v-list-item>

      <v-list-item title="Pinia" value="pinia">
        <template #prepend>
          <v-icon>
            <PiniaIcon />
          </v-icon>
        </template>
      </v-list-item>

      <v-list-item title="Axios" value="axios">
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