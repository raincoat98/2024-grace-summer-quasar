<script lang="ts" setup>
import { reactive, computed } from 'vue';

const user = reactive({
  name: '',
  grade: '',
  pickup: '',
});

const options = [
  { label: '리치마트', value: '리치마트' },
  { label: '우림아파트 버스정류장', value: '우림아파트 버스정류장' },
];

const body = computed(() => {
  return `sms:01023318579?body=${user.name}/${user.grade}/${user.pickup}`;
});
</script>

<template>
  <div class="flex flex-col gap-5">
    <h1 class="font-dongle text-7xl">접수하기 🏖️</h1>
    <q-input v-model="user.name" label="이름" />
    <q-input v-model="user.grade" label="학년" />

    <q-select v-model="user.pickup" :options="options" label="탑승위치" />

    <div class="flex gap-5">
      <q-btn unelevated class="flex-1 bg-green-500 py-3">
        <a :href="body" class="font-bold">안드로이드 신청하기 </a>
      </q-btn>
      <q-btn unelevated class="flex-1 bg-gray-600 py-3 text-white">
        <a :href="body" class="font-bold">아이폰 신청하기 </a>
      </q-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
