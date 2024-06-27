<script lang="ts" setup>
import ReceptionForm from '@/components/ReceptionForm.vue';
import ShareButtons from '@/components/ShareButtons.vue';
import AboutUs from '@/components/AboutUs.vue';
import BibleVerses from '@/components/BibleVerses.vue';
import Programs from '@/components/Programs.vue';

const titleContent = ref({
  year: 2024,
  title: '여름성경학교 광주성전 ⛱️',
});

const title = computed(() => {
  return `${titleContent.value.year} ${titleContent.value.title}`;
});
</script>

<template>
  <div class="flex flex-col gap-10 text-center lg:gap-20">
    <section
      class="text-wrap break-keep font-dongle text-8xl leading-normal text-black-800"
    >
      {{ title }}
    </section>
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
