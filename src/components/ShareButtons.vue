<script lang="ts" setup>
import confetti from 'canvas-confetti';
import { useCounterStore } from '@/store/counter';
import { supabase } from '@/supabaseClient';
import { ref, onMounted } from 'vue';
import { QSpinner } from 'quasar';

declare const Kakao: any;

const store = useCounterStore();

const likeCount = ref(0);
const isUpdating = ref(false);
const isLoading = ref(true);

const fetchLikes = async () => {
  isLoading.value = true;
  const { data, error } = await supabase
    .from('likes')
    .select('count')
    .eq('id', 1)
    .single();
  isLoading.value = false;
  if (data) {
    likeCount.value = data.count;
    console.log('Fetched likes:', data.count);
  } else {
    console.error('Error fetching likes:', error);
  }
};

const incrementLike = async () => {
  if (isUpdating.value || likeCount.value === 0) return;

  isUpdating.value = true;

  const { data, error } = await supabase
    .from('likes')
    .update({ count: likeCount.value + 1 })
    .eq('id', 1)
    .select()
    .single();

  isUpdating.value = false;

  if (data) {
    likeCount.value = data.count;
    console.log('Updated likes:', data.count);
  } else {
    console.error('Error updating likes:', error);
  }
};

onMounted(() => {
  fetchLikes();

  Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
      title: '2024 여름성경학교 광주성전 🏝️',
      description: '#즐거운 예배 #다양한 프로그램 #물놀이💦',
      imageUrl: 'https://i.imgur.com/PQ2yLBw.jpeg',
      link: {
        mobileWebUrl: window.location.href,
        webUrl: window.location.href,
      },
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

const fireConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  if (likeCount.value !== 0) {
    incrementLike();
    store.increment();
  }
};

const copyUrl = () => {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert('URL이 복사되었습니다.');
    })
    .catch((err) => {
      console.error('Failed to copy: ', err);
    });
};
</script>

<template>
  <div>
    <span v-if="isLoading">
      <div class="flex w-full justify-center py-5">
        <q-spinner color="primary" size="3em" />
      </div>
    </span>
    <div v-else class="text-5xl font-bold">
      <span> Like: {{ likeCount }} </span>
    </div>
    <q-btn
      @click="fireConfetti"
      class="bg-green-500 font-bold text-white"
      :disable="isLoading"
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
</template>

<style lang="scss" scoped></style>
