<script lang="ts" setup>
const props = defineProps<{
  programs: string[];
}>();

const programs = computed(() => {
  return props.programs;
});
</script>

<template>
  <section class="flex flex-col gap-2 font-dongle text-green-500">
    <div class="text-5xl">일정 안내</div>
    <div class="flex flex-col gap-2 text-2xl">
      <div v-for="program in programs" :key="program">- {{ program }}</div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
