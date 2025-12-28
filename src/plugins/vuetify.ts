import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'mainTheme',
    themes: {
      mainTheme: {
        dark: true,
        colors: {
          primary: '#184800',
          secondary: '#AAAAAA', 
          accent: '#4DE600',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          background: '#020202', 
          surface: '#222121',
        },
      },
    },
  },
})