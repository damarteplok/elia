<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      outlined
    ></v-text-field>

    <v-text-field
      v-model="title"
      :rules="titleRules"
      label="Name"
      required
      outlined
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Password"
      hint="At least 8 characters"
      @click:append="show1 = !show1"
      outlined
    ></v-text-field>
    <v-btn
      block
      :disabled="!valid"
      color="primary"
      class="mr-2"
      @click="validate"
    >
      Daftar
    </v-btn>
    <v-btn to="/" block color="secondary" class="mt-2" nuxt>
      Kembali
    </v-btn>
    <SosmedLogin />
  </v-form>
</template>

<script>
import SosmedLogin from '@/components/button/SosmedLogin'

export default {
  data: () => ({
    valid: true,
    title: "",
    titleRules: [
      v => !!v || "Title is required",
      v => (v && v.length <= 191) || "Title must be less than 191 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    show1: false,
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
  }),
  components: {
    SosmedLogin
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>
