<template>
  <v-container fluid>
    <v-row>
      <v-col :xs="12" :sm="12" :md="6" :lg="6" :cols="12">
        <LeftProfile></LeftProfile>
      </v-col>
      <v-col :xs="12" :sm="12" :md="6" :lg="6" :cols="12">
        <RightProfile></RightProfile>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RightProfile from '@/components/profile/RightProfile'
import LeftProfile from '@/components/profile/LeftProfile'
export default {
  components: {
    RightProfile,
    LeftProfile
  },
  data() {
    return {

    }
  }
}
</script>