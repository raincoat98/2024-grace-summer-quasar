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
</script>

<template>
  <div class="flex flex-col gap-10 text-center lg:gap-20">
    <Title :titleContent="titleContent"> </Title>
    <Timetable />
    <Programs />
    <AboutUs />
    <BibleVerses />
    <ReceptionForm />
    <ShareButtons />
    <section>
      <router-link
        to="/about"
        class="text-bold cursor-pointer rounded-md bg-blue-800 p-5 text-white"
      >
        말씀 묵상하기
      </router-link>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
