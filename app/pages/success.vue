<template>
    <div class="h-[100vh] flex items-center justify-center">
        <img src="../assets/images/login.png" alt="">
        <div
            class="bg-white w-[338px] h-[230px] flex flex-col justify-center items-center text-black rounded-xl p-5 gap-5">
            <img src="../assets/images/success.png" alt="">
            <div class="text-2xl font-semibold">Success! </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

onMounted(async () => {
    if (route.query.user_id) {
        useCookie('auth').value = { user_id: route.query.user_id }
        setTimeout(() => {
            navigateTo('/pdpa')
        },1000)
    }else{
        navigateTo('/login')
    }
});
</script>

<style scoped>
 img{
  position: absolute;
  z-index: -1;
 }
</style>