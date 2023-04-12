<template>
  <div :class="divStyle">
    <v-card :style="cardStyle" class="mx-auto">
      <v-sheet width="mx-auto" class="mx-auto">
        <v-form fast-fail @submit.prevent>
          <v-text-field
            label="Login"
            v-model="firstName"
            :rules="firstNameRules"
          ></v-text-field>

          <v-text-field
            v-model="lastName"
            label="Senha"
            v-mask="'*************'"
            :rules="lastNameRules"
          ></v-text-field>

          <v-btn
            type="submit"
            prepend-icon="mdi-account"
            size="small"
            color="primary"
            block
            class="mt-4"
            @click="dialog = !dialog"
            :disabled="firstName == '' ? true : false"
            >logar</v-btn
          >
        </v-form>
      </v-sheet>
    </v-card>
    <v-fade-transition hide-on-leave>
      <v-card
        v-if="firstName === 'Felipe' || firstName === 'admin' ? dialog : false"
        append-icon="$close"
        class="mx-auto"
        elevation="16"
        max-width="500"
        title="Login"
      >
        <template v-slot:append>
          <v-btn icon="$close" variant="text" @click="dialog = false"></v-btn>
        </template>

        <v-divider></v-divider>

        <div class="py-12 text-center">
          <v-icon
            class="mb-6"
            color="success"
            icon="mdi-check-circle-outline"
            size="128"
          ></v-icon>

          <div class="text-h4 font-weight-bold">Autenticado com sucesso</div>
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
          <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            rounded
            variant="outlined"
            @click="dialog = false"
            to="/Home"
          >
            Fechar
          </v-btn>
        </div>
      </v-card>
    </v-fade-transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    firstName: "",
    dialog: false,
    firstNameRules: [
      (value) => {
        if (value?.length > 3) return true;
        return "Insira um valor valido";
      },
    ],
    lastName: "",
    lastNameRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return true;

        return "Last name can not contain digits.";
      },
    ],

    divStyle: "divStyle",
    cardStyle: {
      "opacity": "0.95",
      "margin-top": "25vh",
      "width": "30vw",
      "height": "auto",
    },
  }),

  methods: {
    verify() {
      if(this.name === 'Felipe'){
        return true
      }else{
        return false
      }
    },
  }
};
</script>

<style>
.divStyle {
  background-image: url("@/assets/bg.jpg");
  backdrop-filter: blur(50%);
  height: 100vh;
}
</style>