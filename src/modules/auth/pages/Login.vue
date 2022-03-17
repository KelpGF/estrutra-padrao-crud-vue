<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm10 md4>
      <v-card class="elevation-12 mt-16">
        <v-toolbar dark color="primary">
          <v-toolbar-title>
            <v-icon>mdi-home-import-outline</v-icon> Bem vindo!
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="mt-2">
          <v-form
            v-model="valid"
            lazy-validation
            @submit.prevent="submitFormLogin()"
          >
            <v-row>
              <v-col>
                <v-text-field
                  prepend-icon="mdi-email"
                  v-model="formLogin.email"
                  label="Email"
                  :rules="emailRules"
                  outlined
                  shaped
                  required
                  :disabled="!valid"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  :rules="[(v) => !!v || 'Informe a senha']"
                  label="Senha"
                  class="input-group--focused"
                  @click:append="showPassword = !showPassword"
                  v-model="formLogin.password"
                  outlined
                  shaped
                  required
                  :disabled="!valid"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-expand-transition>
              <v-row v-show="showMessageFail">
                <v-col>
                  <v-alert dense border="left" type="error">
                    {{ messageFail }}
                  </v-alert>
                </v-col>
              </v-row>
            </v-expand-transition>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn
                type="submit"
                :disabled="!valid"
                color="primary"
                class="mb-4 mt-0 mr-5"
              >
                <v-icon dark left>mdi-login</v-icon> Entrar
              </v-btn>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from "vue-property-decorator";

  @Component
  export default class Login extends Vue {
    protected valid = true;
    protected showPassword = false;
    protected messageFail = "";
    protected showMessageFail = false;
    protected formLogin = {
      email: "teste@gmail.com",
      password: "123",
    };
    protected emailRules = [
      (v: string): string | boolean => !!v || "Informe o email",
      (v: string): string | boolean => /.+@.+\..+/.test(v) || "Email inválido",
    ];

    protected submitFormLogin(): void {
      this.valid = false;
      this.hiddenFailMessage();

      setTimeout(() => {
        this.valid = true;
        this.showMessageFail = true;
        this.messageFail = "Erro ao autenticar";
      }, 1000);
    }

    @Watch("formLogin", {
      immediate: true,
      deep: true,
    })
    protected hiddenFailMessage(): void {
      this.messageFail = "";
      this.showMessageFail = false;
    }
  }
</script>
