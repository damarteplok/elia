<template>
  <v-container fluid>
    <v-row>
      <v-col :xs="12" :sm="12" :md="9" :lg="9" :cols="12">
        <h2>Pertanyaan Terbaru</h2>
        <QuestionMenu />
      </v-col>
      <v-col :xs="12" :sm="12" :md="3" :lg="3" :cols="12">
        <SideBar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import QuestionMenu from '@/components/question/QuestionMenu'
import SideBar from '@/components/skeleton/SideBar'
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