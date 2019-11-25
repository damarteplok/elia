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
      v-model="password"
      :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show4 ? 'text' : 'password'"
      name="input-10-1"
      label="Password"
      hint="At least 8 characters"
      @click:append="show4 = !show4"
      outlined
    ></v-text-field>
    <v-btn
      block
      :disabled="!valid"
      color="primary"
      class="mr-2"
      @click="validate"
    >
      Masuk
    </v-btn>
    <v-btn to="/" block color="secondary" class="mt-2">
      Kembali
    </v-btn>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-btn class="mx-2" fab dark small outlined color="indigo">
            <v-icon dark>mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark small outlined color="red">
            <v-icon dark>mdi-google</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
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
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
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
