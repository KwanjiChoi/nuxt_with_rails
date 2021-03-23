<template>
  <v-app>
    <v-card width='500px' class='mx-auto pt-10 mt-10'>
      <v-form ref='test_form'>
        <v-card-text>
          <v-menu
            offset-y nudge-right="30" min-width="0"
            :close-on-content-click="false"
            v-model="dateMenu"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                label="日付"
                readonly
                :value="date"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              no-title
              locale="ja-jp"
              :day-format="d => new Date(d).getDate()"
              v-model="date"
              @input="dateMenu = false"
              @change="onDateChange"
            ></v-date-picker>
          </v-menu> 

          <v-text-field
            v-model="text1"
            label="入力必須で文字数制限のあるテキストフィールド"
            :rules="[required, limit_length]"
            counter="10"
            outlined
          >
          </v-text-field>
          <v-text-field
            v-model="text2"
            label="入力必須のみあるテキストフィールド"
            :rules="[required]"
          >
          </v-text-field>
          <v-text-field
            v-model="text3"
            label="なんの制約もないテキストフィールド"
          >
          </v-text-field>
        </v-card-text>
      </v-form>
      
      <v-divider></v-divider>

      <v-card-actions>
        <v-btn text v-on:click="submit">送信する</v-btn>
        <span v-if="success">送信成功！</span>
      </v-card-actions>

    </v-card>
  </v-app>
</template>

<script lang="ts">

export default {
  auth: false,
  data () {
    // const d = new Date();
    return {
      // date: `${d.getFullYear()}-${('00' + (d.getMonth() + 1)).slice(-2)}-${('00' + d.getDate()).slice(-2)}`,
      date: null,
      dateMenu: false,
      text1: '',
      text2: '',
      text3: '',
      success: false,
      required: value => !!value || "必ず入力してください",
      limit_length: value => value.length <= 10 || "10文字以内で入力してください"
    }
  },
  methods: {
    onDateChange () {
      console.log(this.date);
    },
    submit () {
      if (this.$refs.test_form.validate()) {
        this.success = true;
      } else {
        this.success = false;
      }
    }
  }
}
</script>
