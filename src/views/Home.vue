<script lang="ts" setup>
import ReceptionForm from "@/components/ReceptionForm.vue";
import ShareButtons from "@/components/ShareButtons.vue";
</script>

<template>
  <div class="flex flex-col gap-20 text-center">
    <section
      class="text-8xl font-dongle line-height-1 text-black-800 text-wrap break-keep"
    >
      2024 여름성경학교 광주성전
    </section>

    <section class="flex flex-col gap-3 text-3xl font-dongle text-yellow-400">
      <span> 날짜: 2024 년 7 월 13 일 </span>
      <span> 장소: 은헤와진리교회 광주성전</span>
      <span> 시간표: 9:30 ~ 15:00 </span>
    </section>
    <section class="flex flex-col gap-2 font-dongle text-green-500">
      <div class="text-5xl">일정 안내</div>
      <div class="flex flex-col text-2xl gap-2">
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
    <section class="flex gap-3 justify-center">
      <q-btn
        label="네이버 지도에서 보기"
        class="bg-green-500 border-none font-bold"
        rounded
      />
      <q-btn
        class="bg-yellow-400 border-none text-black font-bold"
        rounded
        label="카카오 지도에서 보기"
      />
    </section>
    <section class="font-dongle flex flex-col gap-2">
      <p class="text-5xl text-green-500">소망의 길</p>
      <span class="text-3xl text-black-800 py-5">
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
        class="text-bold p-5 bg-blue-800 text-white rounded-md cursor-pointer"
      >
        말씀 묵상하기
      </router-link>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
