<script lang="ts" setup>
const props = defineProps<{
  timetable: {
    date: string;
    location: string;
    time: string;
  };
}>();

const timetable = computed(() => {
  return {
    date: props.timetable.date,
    location: props.timetable.location,
    time: props.timetable.time,
  };
});
</script>

<template>
  <section class="flex flex-col gap-3 font-dongle text-3xl text-yellow-400">
    <div class="flex flex-col gap-1">
      <span>날짜: {{ timetable.date }}</span>
      <span>장소: {{ timetable.location }}</span>
      <span>시간: {{ timetable.time }}</span>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
