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
  <Transition
    appear
    enter-active-class="animate__animated animate__bounce animate__slower"
    leave-active-class="animate__animated animate__bounceOut animate__slower"
  >
    <section
      class="text-wrap break-keep font-dongle text-8xl leading-normal text-black-800"
    >
      {{ title }}
    </section>
  </Transition>
</template>

<style lang="scss" scoped></style>
