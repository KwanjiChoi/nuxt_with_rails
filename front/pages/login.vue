<template>
  <v-app>
    <Header />
    <v-card width="400px" class="mx-auto" >
      <v-card-title>
        <h1 class="display-1">
          ログイン
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="email"
            prepend-icon="mdi-email"
            label="メールアドレス"
          />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            v-model="password"
            prepend-icon="mdi-lock"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            @click:append="showPassword = !showPassword"
          />
          <v-card-actions>
            <v-btn
              color="light-green darken-1"
              class="white--text"
              @click="loginWithAuthModule"
            >
              ログイン
            </v-btn>
          </v-card-actions>
          <v-card-text>
            <n-link to='/signup' class='grey--text text--darken-2'>SignUpはこちら</n-link> <br>
            <n-link to='/' class='grey--text text--darken-2'>Top</n-link>
          </v-card-text>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import Header from '../components/shared/Header.vue'
import Notification from '../components/materials/Notification.vue'
export default {
  name: 'App',

  components: {
    Header,
    Notification
  },

  auth: false,

  data: () => ({
    showPassword: false
  }),

  data() {
    return {
      email: '',
      password: '',
      showPassword: false
    }
  },

  methods: {
    async loginWithAuthModule() {
      await this.$auth
        .loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then(
          (response) => {
            localStorage.setItem('access-token', response.headers['access-token'])
            localStorage.setItem('client', response.headers.client)
            localStorage.setItem('uid', response.headers.uid)
            localStorage.setItem('token-type', response.headers['token-type'])
            return response
          },
          (error) => {
            console.log(error);
          }
        )
    },
  },
}
</script>

<style scoped>
  .v-card { 
    margin-top: 130px;
  } 
</style>