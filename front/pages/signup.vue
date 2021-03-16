<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-10" >
      <v-card-title>
        <h1 class="display-1">
          新規登録
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="user.email"
            prepend-icon="mdi-email"
            label="メールアドレス"
          />
          <v-text-field
            v-bind:type="user.showPassword ? 'text' : 'password'"
            v-model="password"
            prepend-icon="mdi-lock"
            v-bind:append-icon="user.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            @click:append="user.showPassword = !user.showPassword"
          />
          <v-text-field
            v-bind:type="user.showPasswordConfirmation ? 'text' : 'password'"
            v-model="user.password_confirmation"
            prepend-icon="mdi-lock"
            v-bind:append-icon="user.showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード確認"
             @click:append="user.showPasswordConfirmation = !user.showPasswordConfirmation"
          />
          <v-card-actions>
            <v-btn
              color="light-green darken-1"
              class="white--text"
              @click="registerUser"
            >
              Sign Up
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  auth: false,
  data: () => ({
    showPassword: false,
    showPasswordConfirmation: false
  }),
  data() {
    return {
      user: {
        password: '',
        email: '',
        password_confirmation: '',
        showPassword: false,
        showPasswordConfirmation: false
      },
    }
  },
  methods: {
    registerUser() {
      this.$axios.post('/api/v1/auth', this.user).then((response) => {
        window.location.href = '/users/comfirmation'
      })
    },
  },
}
</script>
