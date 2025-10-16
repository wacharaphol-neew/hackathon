<template>
    <div class="h-[100vh] flex items-center justify-center">
        <img src="../assets/images/login.png" class="background" alt="">
        <div class="bg-white w-[338px] h-[230px] flex flex-col justify-center items-center text-black rounded-xl p-5">
            <img src="../assets/images/success.png" class="success" alt="">
            <div class="text-2xl font-semibold mb-2 mt-5">Success! </div>
            <div class="text-[12px]">{{ formatted }}</div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const date = new Date();
const formatted = ref(date.toString().split(' GMT')[0]);
onMounted(async () => {
    if (route.query.user_id) {
        useCookie('auth').value = { user_id: route.query.user_id }
        setTimeout(() => {
            navigateTo('/pdpa')
        }, 1000)
    } else {
        navigateTo('/login')
    }
});
</script>

<style scoped>
.background {
    position: absolute;
    z-index: -1;
}

.success {
    z-index: 9999;
}
</style>