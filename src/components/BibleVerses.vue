<script lang="ts" setup>
const props = defineProps<{
  bibleVerses: {
    title: string;
    content: string;
    reference: string;
  };
}>();

const bibleVerses = computed(() => {
  return {
    title: props.bibleVerses.title,
    content: props.bibleVerses.content,
    reference: props.bibleVerses.reference,
  };
});
</script>

<template>
  <section class="flex flex-col gap-2 font-dongle">
    <p class="text-5xl text-green-500">
      {{ bibleVerses.title }}
    </p>
    <span class="py-5 text-3xl text-black-800" v-html="bibleVerses.content" />
    <span class="text-2xl text-black-700">
      {{ bibleVerses.reference }}
    </span>
  </section>
</template>

<style lang="scss" scoped></style>
