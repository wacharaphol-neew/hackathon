<script setup lang="ts">
const { status, signIn } = useAuth()
const route = useRoute()
const callbackUrl = computed(() => (route.query.callbackUrl as string) || '/')
const onGoogle = () => signIn('google', { callbackUrl: callbackUrl.value })
</script>

<template>
  <!-- <UContainer class="py-20">
    <div class="mx-auto max-w-sm">
      <UCard>
        <template #header>
          <div class="text-center">
            <h1 class="text-xl font-semibold">Sign in</h1>
            <p class="text-gray-500 mt-1">Continue with your Google account</p>
          </div>
        </template>

<div class="space-y-3">
  <UButton icon="i-logos-google-icon" color="white" variant="solid" class="w-full" @click="onGoogle">
    Continue with Google
  </UButton>
  <p v-if="status==='authenticated'" class="text-green-600 text-sm text-center">Already signed in</p>
</div>
</UCard>
</div>
</UContainer> -->
  <div class="h-[100vh] flex items-center justify-center">
    <div class="bg-white w-[338px] h-[329px] flex flex-col justify-center text-black rounded-xl p-5 gap-5">
      <div class="text-2xl font-semibold">Welcome !</div>
      <div class="text-[12px] text-[#666666]">
        Pleae enter your phone number. You will receive a text message to verify your account. Message & data rates may apply.
      </div>
      <div class="h-[50px] w-full flex items-center justify-center border-1 rounded-lg">
        <UButton icon="i-logos-google-icon" color="white" variant="solid" class="" @click="onGoogle">
          Continue with Google
        </UButton>
      </div>
      <div class="text-[12px] text-[#666666]">Already have an ccount? <span class="underline">Log in</span>  </div>
    </div>
  </div>
</template>
