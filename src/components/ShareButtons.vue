<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import confetti from 'canvas-confetti';
import { useCounterStore } from '@/store/counter';
import { onMounted } from 'vue';

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
declare const Kakao: any;

onMounted(() => {
  Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
      title: '2024 여름성경학교 광주성전 🏝️',
      description: '#즐거운 예배 #다양한 프로그램 #물놀이💦',
      imageUrl:
        'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: '웹으로 보기',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      {
        title: '앱으로 보기',
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
    ],
  });
});
</script>

<template>
  <div>
    <p class="text-5xl font-bold">Like: {{ count }}</p>
    <div class="flex w-full justify-center gap-3 py-5">
      <q-btn @click="fireConfetti" class="bg-green-500 font-bold text-white"
        >Like</q-btn
      >
      <q-btn
        id="kakaotalk-sharing-btn"
        class="text-black border-none bg-yellow-400 font-bold"
      >
        카카오톡으로 공유하기
      </q-btn>
      <q-btn
        @click="copyUrl"
        label="url 링크 복사하기"
        class="text-black border-none bg-gray-200 font-bold"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
