<script setup>
const { status, signIn } = useAuth()
const route = useRoute()
const router = useRouter();
const onGoogle = async () => {
  try {
    const res = await fetch('https://n8n.kisra.co.th/webhook/dfaa7d82-f83b-4eb7-89eb-81b4b900305c')
    const data = await res.json()
    if (data.oauth_url) {
      window.location.href = data.oauth_url
    }
  } catch (error) {
    console.error('Google login error:', error)
  }
}

onMounted(async () => {
    if(useCookie('auth').value?.user_id){
        navigateTo(`/`);
    }
});


</script>

<template>
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
