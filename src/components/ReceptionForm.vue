<script lang="ts" setup>
import { ref } from "vue";

const user = ref({
  name: "",
  grade: "",
});
</script>

<template>
  <div class="flex flex-col gap-5">
    <h1 class="font-dongle text-7xl">접수하기 🏖️</h1>
    <q-input filled v-model="user.name" label="이름" class="bg-white" />
    <q-input filled v-model="user.grade" label="학년" class="bg-white" />
    <q-btn unelevated class="bg-green-500 font-bold py-3"> 신청하기 </q-btn>
  </div>
</template>

<style lang="scss" scoped></style>
