<template>
  <v-container fluid>
    <v-row>
      <v-col cols="9">
        <h2>Pertanyaan Terbaru</h2>
        <QuestionMenu />
      </v-col>
      <v-col cols="3">
        <SideBar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import QuestionMenu from '@/components/QuestionMenu'
import SideBar from '@/components/SideBar'
export default {
  components: {
    SideBar,
    QuestionMenu
  },
  data() {
    return {

    }
  }
}
</script>