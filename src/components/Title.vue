<script lang="ts" setup>
const props = defineProps<{
  titleContent: {
    year: number;
    title: string;
  };
}>();

const title = computed(() => {
  return `${props.titleContent.year} ${props.titleContent.title}`;
});
</script>

<template>
  <section
    class="text-wrap break-keep font-dongle text-8xl leading-normal text-black-800"
  >
    {{ title }}
  </section>
</template>

<style lang="scss" scoped></style>
