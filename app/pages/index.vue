<template>
  <div class="flex items-center h-screen p-10 flex-col">
    <h1 class="text-3xl font-extrabold">เลือกหัวข้อทดสอบ</h1>

    <div class="gap-5 mt-10 w-full">
      <div v-for="(list, index) in lists" :key="index">
        <div class="w-full h-[250px] bg-[#FAFAFA] rounded-lg p-2 flex flex-col text-center items-center justify-center text-[#577F26] text-xl mb-5" @click="goto(list.topic_id)">
          <div>{{ list.topic_name_th }}</div>
          <div>{{ list.topic_name_en }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const lists = [{ nameTh: 'โรคซึมเศร้า ', nameEn: 'Depression' }, { nameTh: 'โรคสองขั้ว/ 2 บุคลิก ', nameEn: 'Bipolar Disorder' }, { nameTh: 'โรคจิตเภท ', nameEn: 'Schizophrenia' }];
const lists = ref([]);
const route = useRoute()

onMounted(async () => {
  lists.value = await fetch("https://n8n.kisra.co.th/webhook/437aa980-058c-4523-b395-cdeb8c280c4c").then((res) => res.json());
});

const goto = (topicId) => {
  navigateTo(`/pdpa?topicId=${topicId}`);
}


</script>