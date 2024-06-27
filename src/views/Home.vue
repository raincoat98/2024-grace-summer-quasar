<script lang="ts" setup>
import Title from '@/components/Title.vue';
import Timetable from '@/components/Timetable.vue';
import Programs from '@/components/Programs.vue';
import AboutUs from '@/components/AboutUs.vue';
import BibleVerses from '@/components/BibleVerses.vue';
import ReceptionForm from '@/components/ReceptionForm.vue';
import ShareButtons from '@/components/ShareButtons.vue';

const titleContent = ref({
  year: 2024,
  title: '여름성경학교 광주성전 ⛱️',
});

const timetable = ref({
  date: '2024 년 7 월 13 일',
  location: '은헤와진리교회 광주성전',
  time: '9:30 ~ 15:00',
});

const programs = ref([
  '예배 🙏🏻',
  '예수님을 만나면 🌟',
  '소망의 길 🌱',
  '물 놀이 🏝️',
]);

const location = ref({
  name: '은헤와진리교회 광주성전',
  address: '경기도 광주시 오포읍 마루들길 168',
  naverMapUrl: 'https://naver.me/5chEWenv',
  kakaoMapUrl: 'https://kko.to/Oau1Tshxg-',
});

const bibleVerses = ref({
  title: '소망의 길',
  content: `우리는 낮에 속하였으니 근신하여<br>
    믿음과 사랑의 흉배를 붙이고<br>
    구원의 소망의 투구를 쓰자
    `,
  reference: '데살로니가전서 5장 8절',
});
</script>

<template>
  <div class="flex flex-col gap-10 text-center lg:gap-20">
    <Title :titleContent="titleContent"> </Title>
    <Timetable :timetable="timetable" />
    <Programs :programs="programs" />
    <AboutUs :location="location" />
    <BibleVerses :bibleVerses="bibleVerses" />
    <ReceptionForm />
    <ShareButtons />
    <section>
      <router-link
        to="/about"
        class="text-bold cursor-pointer rounded-md bg-blue-500 p-5 text-white"
      >
        말씀 묵상하기
      </router-link>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
