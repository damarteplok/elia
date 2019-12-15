<template>
  <v-row class="row-custom-login-modal" :style="mode ? {backgroundColor: '#303030'} : ''" no-gutters>
    <v-col cols="12" sm="6" class="pl-4 pb-4 pr-4 pt-4">
      <h2 style="text-align: center;">Masuk BerbaGeek</h2>
      <div class="mb-8"></div>
      <FormLogin />
    </v-col>

    <v-col cols="12" sm="6" class="custom-login-right">
      <v-row class="fill-height" no-gutters align="center" justify="center">
        <v-col>
          <h2 style="text-align: center;">Halo Kawan!</h2>
          <p style="text-align: center;">
            Daftarkan diri kamu di BerbaGeek. Untuk merasakan kemudahan berbagi,
            dan berkolaborasi. Berlomba-lomba berbuat kebaikan untuk industri
            digital (programming, desain, marketing, dsb)
          </p>
          <v-row no-gutters justify="center">
            <v-btn to="/register" color="primary" class="mt-2" nuxt>
              Daftar
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import FormLogin from "@/components/form/FormLogin";
export default {
  layout: "loginregister",
  components: {
    FormLogin
  },
  data() {
    return {
     
    };
  },
  computed: {
    mode() {
      return this.$store.state.dark 
    }
  },
};
</script>

<style>
.row-custom-login-modal {
  border-radius: 20px;
  background-color: #fff;
}

.custom-login-right {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-image: url("/bg_2.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-width: 600px) {
  .custom-login-right {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .row-custom-login-modal {
    border-radius: 0px;
  }
}
</style>
