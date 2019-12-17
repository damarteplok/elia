<template>
  <v-container fluid>
    <v-row>
      <v-col :cols="12">
        <h2>Browse Teams</h2>
        <v-row>
          <v-col :cols="12">
            <v-tabs :background-color="mode ? '#303030' : '#FAFAFA'">
              <v-tab style="padding-left: 0px">Top Tiers</v-tab>
              <v-tab>Near</v-tab>
              <v-tab>Make Your Team!</v-tab>
              <v-tab-item
                :style="mode ? {'backgroundColor': '#303030'} : {'backgroundColor': '#FAFAFA'}"
              >
                <TeamBrowse></TeamBrowse>
                <TeamTier></TeamTier>
              </v-tab-item>
              <v-tab-item
                :style="mode ? {'backgroundColor': '#303030'} : {'backgroundColor': '#FAFAFA'}"
              >
                <TeamBrowse></TeamBrowse>
                <TeamTier tipe="2"></TeamTier>
              </v-tab-item>
              <v-tab-item
                :style="mode ? {'backgroundColor': '#303030'} : {'backgroundColor': '#FAFAFA'}"
              >
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>

                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                  <v-select
                    v-model="select"
                    :items="items"
                    :rules="[v => !!v || 'Item is required']"
                    label="Item"
                    required
                  ></v-select>

                  <v-checkbox
                    v-model="checkbox"
                    :rules="[v => !!v || 'You must agree to continue!']"
                    label="Do you agree?"
                    required
                  ></v-checkbox>

                  <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

                  <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

                  <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
                </v-form>
              </v-tab-item>
            </v-tabs>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TeamBrowse from "@/components/teams/TeamBrowse";
import TeamTier from "@/components/teams/TeamTier";
export default {
  components: {
    TeamBrowse,
    TeamTier
  },
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false
    };
  },
  computed: {
    mode() {
      return this.$store.state.dark;
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style scoped>
</style>