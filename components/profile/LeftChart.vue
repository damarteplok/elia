<template>
  <v-card class="mx-auto text-center" color="deep-purple">
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <client-only>
          <v-sparkline
            :value=" [
              423,
              446,
              675,
              510,
              590,
              610,
              760,
            ]"
            color="rgba(255, 255, 255, .7)"
            height="100"
            padding="24"
            stroke-linecap="round"
            smooth
          >
            <template v-slot:label="item">{{ item.value }}</template>
          </v-sparkline>
        </client-only>
      </v-sheet>
    </v-card-text>
    <v-card-text>
      <div class="display-1 font-weight-thin" style="color: #fff;">Last 24h Point</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>