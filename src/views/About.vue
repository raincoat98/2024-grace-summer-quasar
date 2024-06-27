<script lang="ts" setup>
import { ref } from "vue";

const verses = ref([
  {
    reference: "요한복음 3:16",
    text: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니, 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라.",
  },
  {
    reference: "시편 23:1",
    text: "여호와는 나의 목자시니 내가 부족함이 없으리로다.",
  },
  {
    reference: "빌립보서 4:13",
    text: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라.",
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
    <h1 class="text-blue-600 text-2xl lg:text-5xl font-bold">
      묵상의 길로 나아가자
    </h1>
    <p class="text-blue-500 text-md lg:text-3xl">
      이 페이지는 성경 말씀을 묵상하며 나아가는 길을 제시합니다.<br />
      말씀을 통해 마음의 평안과 영적 성장을 이루세요.
    </p>
    <div>
      <q-btn
        unelevated
        label="오늘의 말씀 보기"
        @click="getRandomVerse"
        class="rounded-md bg-emerald-500 text-white font-bold"
      />
    </div>
    <div
      v-if="randomVerse"
      class="bg-blue-200 rounded-md flex flex-col p-5 gap-5"
    >
      <h2 class="text-blue-900 text-3xl lg:text-5xl font-bold">
        {{ randomVerse.reference }}
      </h2>
      <p class="text-blue-500 text-2xl lg:text-3xl font-bold">
        {{ randomVerse.text }}
      </p>
    </div>

    <div>
      <router-link
        to="/"
        class="text-bold p-5 bg-blue-800 text-white rounded-md cursor-pointer"
      >
        홈으로 가기
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
