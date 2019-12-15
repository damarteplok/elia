<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="title"
      :rules="titleRules"
      label="Ajukan Pertanyaan Anda dalam satu kalimat"
      required
      outlined
      :counter="191"
    ></v-text-field>

    <v-textarea v-model="name" :rules="nameRules" label="Deskripsi pertanyaan" required outlined></v-textarea>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Category is required']"
      label="Pilih Kategori"
      required
      outlined
    ></v-select>

    <v-combobox
      v-model="combobox"
      :items="recommendation"
      label="Tag"
      multiple
      outlined
      :rules="[v => !!v || 'Tag is required']"
    ></v-combobox>

    <v-btn
      :block="$vuetify.breakpoint.xsOnly"
      :disabled="!valid"
      color="primary"
      class="mr-1 mb-1"
      @click="validate"
    >Ajukan Pertanyaan</v-btn>

    <v-btn
      :block="$vuetify.breakpoint.xsOnly"
      color="secondary"
      class="mr-1 mb-1"
      @click="reset"
    >Keluar</v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [v => !!v || "Description is required"],
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
    select: null,
    combobox: null,
    recommendation: [
      "Rekomendasi 1",
      "Rekomendasi 2",
      "Rekomendasi 3",
      "Rekomendasi 4"
    ],
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.$emit("dialogShow");
      }
    },
    reset() {
      this.$refs.form.reset();
      this.$emit("dialogShow");
    }
  }
};
</script>
