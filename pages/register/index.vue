<template>
  <v-row class="row-custom-login-modal" no-gutters>
    
    <v-col cols="12" sm="6" class="custom-register-left">
      <v-row class="fill-height" no-gutters align="center" justify="center">
        <v-col>
          <h2 style="text-align: center;">Selamat Datang</h2>
          <p style="text-align: center;">
            Apakah kamu sudah mempunyai akun BerbaGeek? Segera masuk untuk bertemu dan belajar dengan orang-orang di insdustri digital.
          </p>
          <v-row no-gutters justify="center">
            <v-btn to="/login" color="primary" class="mt-2" nuxt>
              Masuk
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" sm="6" class="pl-4 pb-4 pr-4 pt-4">
      <h2>Daftar BerbaGeek</h2>
      <div class="mb-8"></div>
      <FormRegister />
    </v-col>

  </v-row>
</template>

<script>
import FormRegister from "@/components/form/FormRegister";
export default {
  layout: "loginregister",
  components: {
    FormRegister
  },
  data() {
    return {};
  }
};
</script>

<style>
.row-custom-login-modal {
  border-radius: 20px;
  background-color: #fff;
}

.custom-register-left {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-image: url("/bg_2.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-width: 600px) {
  .custom-register-left {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .row-custom-login-modal {
    border-radius: 0px;
  }
}
</style>
