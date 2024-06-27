<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import confetti from 'canvas-confetti';
import { useCounterStore } from '@/store/counter';

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

function shareToKakao() {
  alert('카카오톡 공유하기 아직 없지요');
}

function copyUrl() {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert('URL이 복사되었습니다.');
    })
    .catch((err) => {
      console.error('Failed to copy: ', err);
    });
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
        @click="shareToKakao"
        class="text-black border-none bg-yellow-400 font-bold"
        label="카카오톡으로 공유하기"
      />
      <q-btn
        @click="copyUrl"
        label="url 링크 복사하기"
        class="text-black border-none bg-gray-200 font-bold"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
