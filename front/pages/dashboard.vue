<template>
  <v-app>
    <v-navigation-drawer app v-model='drawer' clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class='title grey--text text--darken-2'>
              Navigations lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list dense nav>
          <v-list-item v-for='nav_list in nav_lists' :key='nav_list'>
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color='primary'
               dark
               app
               clipped-left>
      <v-app-bar-nav-icon @click='drawer=!drawer' />
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text>Kwanji</v-btn>
        <v-btn text>For Companies</v-btn>
        <v-menu offset-y>
          <template v-slot:activator='{on}'>
            <v-btn v-on='on' text>Support <v-icon>mdi-menu-down</v-icon></v-btn>
          </template>
          <v-list>
            <v-subheader>Get help</v-subheader>
            <v-list-item v-for='support in supports' :key='support'>
              <v-list-icon class='mr-3'><v-icon>{{ support.icon }}</v-icon></v-list-icon>
              <v-list-item-content>
                <v-list-item-title>{{ support.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <v-footer color='primary'
              dark
              app>
      Vuetify
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data(){
    return{
      drawer: null,
      supports: [
        {name: 'Consulting and suppourt',icon: 'mdi-vuetify'},
        {name: 'Discord community',icon: 'mdi-discord'},
        {name: 'Report a bug',icon: 'mdi-bug'},
        {name: 'Github issue board',icon: 'mdi-github'},
        {name: 'Stack overview',icon: 'mdi-stack-overflow'}, 
      ],
      nav_lists:[
        {name: 'Getting Started',icon: 'mdi-vuetify'},
        {name: 'Customization',icon: 'mdi-cogs'},
        {name: 'Styles & animations',icon: 'mdi-palette'},
        {name: 'UI Components',icon: 'mdi-view-dashboard'},
        {name: 'Directives',icon: 'mdi-function'},
        {name: 'Preminum themes',icon: 'mdi-vuetify'},
      ]
    }
  }
}
</script>