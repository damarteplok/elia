<template>
  <v-card class="mx-auto" style="margin-top:1rem;" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="/top_question_img.jpg"
    >
    </v-img>
    <v-card-title>
      Kenapa saya jomblo gan?
    </v-card-title>
    <v-card-actions>
      <v-btn
        :to="'/questions/all/' + index"
        color="primary"
        text
        @click="emitParent"
        nuxt
      >
        Jawab
      </v-btn>

      <v-btn color="primary" text>
        Up
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    emitParent() {
      this.$emit("dialogShowTop");
    }
  }
};
</script>
