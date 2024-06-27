<script lang="ts" setup>
import { storeToRefs } from "pinia";
import confetti from "canvas-confetti";
import { useCounterStore } from "@/store/counter";

const store = useCounterStore();

const { count } = storeToRefs(store);

function fireConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  store.increment();
}
</script>

<template>
  <div>
    <p class="text-5xl font-bold">Like: {{ count }}</p>
    <div class="flex w-full justify-center gap-3 py-5">
      <q-btn @click="fireConfetti" class="bg-green-500 font-bold text-white"
        >Like</q-btn
      >
      <q-btn
        class="bg-yellow-400 font-bold text-black border-none"
        label="카카오톡으로 공유하기"
      />
      <q-btn
        label="url 링크 복사하기"
        class="bg-gray-200 font-bold text-black border-none"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
