<script setup>

import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Nuxt Starter Template'
const description = 'A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})

const colorMode = useColorMode();

onMounted(async() => {
  colorMode.preference = "light"

  await fetch("https://n8n.kisra.co.th/webhook/437aa980-058c-4523-b395-cdeb8c280c4c").then((res) => res.json());
    createChat({
      webhookUrl:
        "https://n8n.kisra.co.th/webhook/08f6878b-254e-46ff-bda5-90ce7de8f7f5/chat",
      initialMessages: [
        // `สวัสดีครับ คุณ ${user?.name} 👋`,
        "ผมคือ Mind Mood ผู้เชี่ยวชาญด้านสุขภาพจิต  มีอะไรให้ผมช่วยได้บ้างครับ?",
      ],
      i18n: {
        en: {
          title: "💬 Chat with Mind Mood",
          subtitle: "ผมคือ Mind Mood",
          inputPlaceholder: "พิมพ์ข้อความของคุณ...",
          getStarted: "สวัสดีครับ! 👋",
          startMessage: "เริ่มแชทกับเรา เราพร้อมช่วยเหลือคุณตลอด 24 ชั่วโมง",
          footer: "ขับเคลื่อนโดย Mind Mood",
          closeButtonTooltip: "ปิด",
        },
      },
    });

})

const signOut = () => {
  useCookie('auth').value = null
  navigateTo('/login')
}
const route = useRoute()

</script>

<template>
  <UApp>

    <UMain>
      <NuxtPage />
      <div class="fixed bottom-0 py-2 bg-green-300 w-full" v-if="route.path != '/login' && route.path != '/success'">
        <div class=" flex justify-center">
          <button @click="signOut()" class="bg-green-500 text-white px-4 py-2 rounded-2xl">logout</button>
        </div>
      </div>
    </UMain>

    
  </UApp>
</template>
