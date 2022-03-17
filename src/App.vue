<template>
  <v-app>
    <v-navigation-drawer
      dark
      app
      permanent
      expand-on-hover
      color="primary"
      v-model="drawer"
      :mini-variant.sync="mini"
      v-if="$route.name !== 'Login'"
    >
      <v-list-item class="px-2 pt-1">
        <v-list-item-avatar>
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-title>System Name</v-list-item-title>

        <!-- <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn> -->
      </v-list-item>
      <v-list class="pt-4" flat>
        <router-link v-for="item in navItems" :to="item.to" :key="item.title">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#03A9F4" dark v-if="$route.name !== 'Login'">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/vuetify-logo-light-text.svg"
          transition="scale-transition"
          width="125"
        />
      </div>

      <v-spacer></v-spacer>

      <v-menu
        bottom
        offset-y
        left
        v-model="menu"
        transition="scroll-y-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>User fullname</v-list-item-title>
              <v-list-item-subtitle>Role user</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item @click="logout()">
            <v-list-item-action>
              <v-list-item-title>
                <v-icon> mdi-logout </v-icon>
              </v-list-item-title>
            </v-list-item-action>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "App",

    data: () => ({
      navItems: [
        { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
        { title: "CRUD", icon: "mdi-account-box", to: "/crud" },
        // { title: "Admin", icon: "mdi-gavel", to: "/" },
      ],
      mini: true,
      drawer: true,
      menu: false,
    }),

    methods: {
      logout() {
        alert("sair");
      },
    },
  });
</script>
