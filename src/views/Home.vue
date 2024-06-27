<script lang="ts" setup>
import ReceptionForm from '@/components/ReceptionForm.vue';
import ShareButtons from '@/components/ShareButtons.vue';

function openNaverMap() {
  const naverMapUrl = `https://naver.me/5chEWenv`;
  window.open(naverMapUrl, '_blank');
}
function openKakaoMap() {
  const kakaoMapUrl = `https://kko.to/Oau1Tshxg-`;
  window.open(kakaoMapUrl, '_blank');
}
</script>

<template>
  <div class="flex flex-col gap-10 text-center lg:gap-20">
    <section
      class="line-height-1 text-wrap break-keep font-dongle text-8xl text-black-800"
    >
      2024 여름성경학교 광주성전
    </section>

    <section class="flex flex-col gap-3 font-dongle text-3xl text-yellow-400">
      <span> 날짜: 2024 년 7 월 13 일 </span>
      <span> 장소: 은헤와진리교회 광주성전</span>
      <span> 시간표: 9:30 ~ 15:00 </span>
    </section>
    <section class="flex flex-col gap-2 font-dongle text-green-500">
      <div class="text-5xl">일정 안내</div>
      <div class="flex flex-col gap-2 text-2xl">
        <span> - 예배 🙏🏻</span>
        <span> - 예수님을 만나면 🌟 </span>
        <span> - 소망의 길 🌱 </span>
        <span> - 물 놀이 🏝️</span>
      </div>
    </section>
    <section class="flex flex-col gap-2">
      <div class="text-2xl font-bold">오시는 길</div>
      <div class="text-xl">경기도 광주시 오포읍 마루들길 168</div>
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
    <section class="flex flex-col gap-2 font-dongle">
      <p class="text-5xl text-green-500">소망의 길</p>
      <span class="py-5 text-3xl text-black-800">
        우리는 낮에 속하였으니 근신하여<br />
        믿음과 사랑의 흉배를 붙이고<br />
        구원의 소망의 투구를 쓰자 <br />
      </span>
      <span class="text-2xl text-black-700"> 데살로니가전서 5장 8절 </span>
    </section>
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
