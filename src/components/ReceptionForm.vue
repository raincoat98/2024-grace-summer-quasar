<script lang="ts" setup>
import { computed } from 'vue';
import * as yup from 'yup';
import { useForm } from 'vee-validate';
import { Platform } from 'quasar';

const initialValues = {
  name: '',
  grade: '',
  pickup: '',
};

const { values, errors, handleSubmit, defineField, resetForm } = useForm({
  validationSchema: yup.object({
    name: yup.string().min(2).required('이름을 입력하세요'),
    grade: yup.string().min(1).required('학년을 입력하세요'),
    pickup: yup.string().required('탑승위치를 선택하세요'),
  }),
  initialValues,
});

const [name, nameAttrs] = defineField('name');
const [grade, gradeAttrs] = defineField('grade');
const [pickup, pickupAttrs] = defineField('pickup');

const options = ['리치마트', '매곡초등학교 앞', '우림아파트 버스정류장'];

const body = computed(() => {
  const baseUrl = Platform.is.ios ? 'sms:01023318579&' : 'sms:01023318579?';
  return `${baseUrl}body=${values.name}/${values.grade}/${values.pickup}`;
});

const onSubmit = handleSubmit(() => {
  window.location.href = body.value;
});

const onReset = () => {
  resetForm({ values: initialValues });
};
</script>

<template>
  <div class="flex-center flex break-keep">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <div class="flex flex-col gap-5">
        <h1 class="font-dongle text-7xl">접수하기 🏖️</h1>

        <q-input
          v-model="name"
          v-bind="nameAttrs"
          label="이름"
          :error="errors.name !== undefined"
          :error-message="errors.name"
        />
        <q-input
          v-model="grade"
          v-bind="gradeAttrs"
          label="학년"
          :error="errors.grade !== undefined"
          :error-message="errors.grade"
        />
        <q-select
          v-model="pickup"
          v-bind="pickupAttrs"
          :options="options"
          label="탑승위치"
          :error="errors.pickup !== undefined"
          :error-message="errors.pickup"
        />
        <q-btn
          v-if="Object.keys(errors).length > 0"
          unelevated
          class="bg-blue-500 py-3 font-bold text-white"
          type="reset"
          icon="refresh"
        >
          다시 작성
        </q-btn>
        <q-btn
          unelevated
          class="flex-1 bg-green-500 py-3 font-bold text-white"
          type="submit"
        >
          신청하기
        </q-btn>
      </div>
    </q-form>
  </div>
</template>

<style lang="scss" scoped></style>
