<script lang="ts" setup>
import { ref } from "vue";

const user = ref({
  name: "",
  grade: "",
  pickup: "",
});
</script>

<template>
  <div class="flex flex-col gap-5">
    <h1 class="font-dongle text-7xl">접수하기 🏖️</h1>
    <q-input filled v-model="user.name" label="이름" class="bg-white" />
    <q-input filled v-model="user.grade" label="학년" class="bg-white" />
    <q-input v-model="user.pickup" class="bg-white" label="탑승위치" />

    <div class="flex gap-5">
      <q-btn unelevated class="flex-1 bg-green-500 font-bold py-3">
        <a
          href="sms:01023318579?body={{user.name}}/{{user.grade}}/{{user.pickup}}"
          >안드로이드 신청하기
        </a>
      </q-btn>
      <q-btn unelevated class="flex-1 bg-gray-500 font-bold py-3">
        <a
          href="sms:01023318579&body={{user.name}}/{{user.grade}}/{{user.pickup}}"
          >아이폰 신청하기
        </a>
      </q-btn>
    </div>
  </div>
</template>
ㅞㅡ
<style lang="scss" scoped></style>
