<script lang="ts" setup>
import { Transition } from 'vue';
</script>

<template>
  <div>
    <h1>Test</h1>
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="min-h-36">min-h-80</div>
      </q-card-section>
    </q-card>
  </div>

  <Transition
    appear
    enter-active-class="animate__animated animate__bounce animate__slower"
    leave-active-class="animate__animated animate__bounceOut animate__slower"
  >
    <q-btn color="secondary" icon="mail" label="Email" />
  </Transition>
</template>
