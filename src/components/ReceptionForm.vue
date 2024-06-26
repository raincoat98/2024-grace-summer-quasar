<script lang="ts" setup>
import { reactive, computed } from "vue";

const user = reactive({
  name: "",
  grade: "",
  pickup: "",
});
const body = computed(() =>{
  return `sms:01023318579?body=${user.name}/${user.grade}/${user.pickup}`;
});
</script>

<template>
  <div class="flex flex-col gap-5">
    <h1 class="font-dongle text-7xl">접수하기 🏖️</h1>
    <q-input filled v-model="user.name" label="이름" class="bg-white" />
    <q-input filled v-model="user.grade" label="학년" class="bg-white" />
    <q-input filled v-model="user.pickup" label="탑승위치" class="bg-white" />
    <q-btn unelevated class="bg-green-500 font-bold py-3"><a :href="body">안드로이드 신청하기</a></q-btn>
    <q-btn unelevated class="bg-blue-500 font-bold py-3"><a :href="body">아이폰 신청하기</a></q-btn>
  </div>
</template>

<style lang="scss" scoped></style>
