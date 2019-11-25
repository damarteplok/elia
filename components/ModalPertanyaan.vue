<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="800px">
      <template v-slot:activator="{ on }">
        <v-btn
          dark
          v-on="on"
          class="mx-1"
          small
          color="primary"
        >
          Tanya Ah!
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="justify-center">
          <span class="headline">Ajukan Pertanyaan</span>
        </v-card-title>
        <v-card-text>
          <v-container>

              <FormPertanyaan
              @dialogShow="dialog = false"
              />

          </v-container>

        </v-card-text>
        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" text @click="dialog = false"
            >Keluar</v-btn
          >
          <v-btn color="primary" text @click="dialog = false">Simpan</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import FormPertanyaan from '@/components/FormPertanyaan'
export default {
  components: {
    FormPertanyaan
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>
