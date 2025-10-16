<template>
  <div class="flex items-center  h-screen p-10 flex-col">
    <h1 class="text-3xl font-extrabold">เลือกหัวข้อทดสอบ</h1>

    <div class="gap-5 mt-10 w-full">
      <div v-for="(list, index) in lists" :key="index">
        <div class="w-full h-[250px] bg-[#FAFAFA] rounded-lg p-2 flex flex-col items-center justify-center text-[#577F26] text-xl mb-5">
          <div>{{ list.nameTh }}</div>
          <div>{{ list.nameEn }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const lists = [{ nameTh: 'โรคซึมเศร้า ', nameEn: 'Depression' }, { nameTh: 'โรคสองขั้ว/ 2 บุคลิก ', nameEn: 'Bipolar Disorder' }, { nameTh: 'โรคจิตเภท ', nameEn: 'Schizophrenia' }];


</script>