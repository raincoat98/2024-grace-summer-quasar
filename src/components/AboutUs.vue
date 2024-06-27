<script lang="ts" setup>
const props = defineProps<{
  location: {
    name: string;
    address: string;
    naverMapUrl: string;
    kakaoMapUrl: string;
  };
}>();

const location = computed(() => {
  return props.location;
});

function openNaverMap() {
  const naverMapUrl = location.value.naverMapUrl;
  window.open(naverMapUrl, '_blank');
}
function openKakaoMap() {
  const kakaoMapUrl = location.value.kakaoMapUrl;
  window.open(kakaoMapUrl, '_blank');
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <section class="flex flex-col gap-2">
      <div class="text-2xl font-bold">오시는 길</div>
      <div class="text-xl">{{ location.address }}</div>
      <div>
        <q-img :src="'/map.webp'" alt="Image" height="400px" :fit="'contain'" />
      </div>
    </section>
    <section class="flex justify-center gap-3">
      <q-btn
        label="네이버 지도에서 보기"
        class="border-none bg-green-500 font-bold"
        rounded
        @click="openNaverMap"
      />
      <q-btn
        class="text-black border-none bg-yellow-400 font-bold"
        rounded
        label="카카오 지도에서 보기"
        @click="openKakaoMap"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
