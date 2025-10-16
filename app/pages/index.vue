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
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

// const lists = [{ nameTh: 'โรคซึมเศร้า ', nameEn: 'Depression' }, { nameTh: 'โรคสองขั้ว/ 2 บุคลิก ', nameEn: 'Bipolar Disorder' }, { nameTh: 'โรคจิตเภท ', nameEn: 'Schizophrenia' }];
const lists = ref([]);
const route = useRoute()

onMounted(async () => {
  lists.value = await fetch("https://n8n.kisra.co.th/webhook/437aa980-058c-4523-b395-cdeb8c280c4c").then((res) => res.json());
    createChat({
      webhookUrl:
        "https://n8n.kisra.co.th/webhook/f0df6569-91e0-4da7-94e9-e3915e4c9649/chat",
      initialMessages: [
        // `สวัสดีครับ คุณ ${user?.name} 👋`,
        "ผมคือ MOD AI ผู้ช่วยเสมือนของระบบ Social Listening มีอะไรให้ผมช่วยได้บ้างครับ?",
      ],
      i18n: {
        en: {
          title: "💬 Chat with My Mind Mood",
          subtitle: "ผมคือ My Mind Mood",
          inputPlaceholder: "พิมพ์ข้อความของคุณ...",
          getStarted: "สวัสดีครับ! 👋",
          startMessage: "เริ่มแชทกับเรา เราพร้อมช่วยเหลือคุณตลอด 24 ชั่วโมง",
          footer: "ขับเคลื่อนโดย MOD AI",
          closeButtonTooltip: "ปิด",
        },
      },
    });
});

const goto = (topicId) => {
  navigateTo(`/pdpa?topicId=${topicId}`);
}


</script>

<style scoped>
:root {
	--chat--color--primary: #e74266;
	--chat--color--primary-shade-50: #db4061;
	--chat--color--primary--shade-100: #cf3c5c;
	--chat--color--secondary: #20b69e;
	--chat--color-secondary-shade-50: #1ca08a;
	--chat--color-white: #ffffff;
	--chat--color-light: #f2f4f8;
	--chat--color-light-shade-50: #e6e9f1;
	--chat--color-light-shade-100: #c2c5cc;
	--chat--color-medium: #d2d4d9;
	--chat--color-dark: #101330;
	--chat--color-disabled: #777980;
	--chat--color-typing: #404040;

	--chat--spacing: 1rem;
	--chat--border-radius: 0.25rem;
	--chat--transition-duration: 0.15s;

	--chat--window--width: 400px;
	--chat--window--height: 600px;

	--chat--header-height: auto;
	--chat--header--padding: var(--chat--spacing);
	--chat--header--background: var(--chat--color-dark);
	--chat--header--color: var(--chat--color-light);
	--chat--header--border-top: none;
	--chat--header--border-bottom: none;
	--chat--header--border-bottom: none;
	--chat--header--border-bottom: none;
	--chat--heading--font-size: 2em;
	--chat--header--color: var(--chat--color-light);
	--chat--subtitle--font-size: inherit;
	--chat--subtitle--line-height: 1.8;

	--chat--textarea--height: 50px;

	--chat--message--font-size: 1rem;
	--chat--message--padding: var(--chat--spacing);
	--chat--message--border-radius: var(--chat--border-radius);
	--chat--message-line-height: 1.8;
	--chat--message--bot--background: var(--chat--color-white);
	--chat--message--bot--color: var(--chat--color-dark);
	--chat--message--bot--border: none;
	--chat--message--user--background: var(--chat--color--secondary);
	--chat--message--user--color: var(--chat--color-white);
	--chat--message--user--border: none;
	--chat--message--pre--background: rgba(0, 0, 0, 0.05);

	--chat--toggle--background: var(--chat--color--primary);
	--chat--toggle--hover--background: var(--chat--color--primary-shade-50);
	--chat--toggle--active--background: var(--chat--color--primary--shade-100);
	--chat--toggle--color: var(--chat--color-white);
	--chat--toggle--size: 64px;
}

html,
body,
#n8n-chat {
	width: 100%;
	height: 100%;
}

</style>