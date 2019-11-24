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
      :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.emailMatch]"
      :type="show4 ? 'text' : 'password'"
      name="input-10-2"
      label="Password"
      hint="At least 8 characters"
      value="asdf1234"
      error
      @click:append="show4 = !show4"
      outlined
    ></v-text-field>

    <v-btn block :disabled="!valid" color="primary" class="mr-4" @click="validate">
      Masuk
    </v-btn>

    <v-btn block color="indigo" class="mt-4">
      Facebook
    </v-btn>
    <v-btn block color="red" class="mt-4">
      Google
    </v-btn>
    <v-btn block color="blue" class="mt-4">
      Twitter
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    show4: false,
    password: 'Password',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => ('The email and password you entered don\'t match'),
    },
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>
