Test
<script lang="ts" setup>
import { ref } from 'vue';

const verses = ref([
  {
    reference: '요한복음 3:16',
    text: '하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니, 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라.',
  },
  {
    reference: '시편 23:1',
    text: '여호와는 나의 목자시니 내가 부족함이 없으리로다.',
  },
  {
    reference: '빌립보서 4:13',
    text: '내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라.',
  },
]);

const randomVerse = ref(verses.value[0]);
const previousIndex = ref(-1);

const getRandomVerse = () => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * verses.value.length);
  } while (randomIndex === previousIndex.value);

  previousIndex.value = randomIndex;
  randomVerse.value = verses.value[randomIndex];
};

getRandomVerse();
</script>

<template>
  <div class="flex flex-col gap-10 text-center">
    <h1 class="text-2xl font-bold text-blue-600 lg:text-5xl">
      묵상의 길로 나아가자
    </h1>
    <p class="text-md text-blue-500 lg:text-3xl">
      이 페이지는 성경 말씀을 묵상하며 나아가는 길을 제시합니다.<br />
      말씀을 통해 마음의 평안과 영적 성장을 이루세요.
    </p>

    <q-card v-if="randomVerse" flat bordered class="my-card bg-blue-200">
      <q-card-section>
        <div class="flex min-h-64 items-center justify-center lg:min-h-36">
          <div class="flex flex-col gap-5 break-keep">
            <h2 class="text-3xl font-bold text-blue-900 lg:text-5xl">
              {{ randomVerse.reference }}
            </h2>
            <p class="text-2xl font-bold text-blue-500 lg:text-3xl">
              {{ randomVerse.text }}
            </p>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="flex gap-5">
      <q-btn
        unelevated
        class="flex-1 cursor-pointer rounded-md bg-blue-500 p-5 font-bold text-white"
      >
        <router-link to="/"> 홈으로 가기 </router-link>
      </q-btn>
      <q-btn
        unelevated
        label="오늘의 말씀 보기"
        @click="getRandomVerse"
        class="flex-1 rounded-md bg-emerald-500 p-5 font-bold text-white"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
