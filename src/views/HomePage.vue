<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Get IMEI</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-button @click="getIMEI()">Get IMEI</ion-button>
      <ion-card v-if="imei">
        <ion-card-header>
          IMEI
        </ion-card-header>
        <ion-card-content>
          {{ imei }}
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonButton, IonCard, IonCardHeader, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { Plugins } from '@capacitor/core';
const { IMEI } = Plugins;

export default defineComponent({
  name: 'homePage',
  components: {
    IonButton, IonCard, IonCardHeader, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar
  },
  data() {
    return {
      imei: null
    };
  },
  methods: {
    async getIMEI() {
      try {
        const {imei} = await IMEI.getImei();
        this.imei = imei;
      } catch (error) {
        console.error('Error getting IMEI', error);
      }
    }
  }
});
</script>

<style scoped>

</style>
