<template>
    <div class="flex items-center h-screen p-10 flex-col">
        <div class="text-2xl font-extrabold">แบบฟอร์มยินยอมการเก็บข้อมูลและวิเคราะห์อารมณ์ด้วย AI</div>
        <div class="text-[#666666] mt-10">
            เพื่อประเมินภาวะซึมเศร้าเบื้องต้น ระบบจะเก็บข้อมูลส่วนบุคคลของท่าน ได้แก่ คำตอบจากแบบสอบถาม
            ภาพหรือวิดีโอจากกล้อง (สีหน้าและอารมณ์ระหว่างการตอบแบบสอบถาม) และข้อมูลการติดต่อ เช่น อีเมล
            เพื่อใช้ในการวิเคราะห์แนวโน้มภาวะจิตใจด้วยเทคโนโลยีปัญญาประดิษฐ์ (AI)
        </div>
        <div class="text-[#666666] mt-2">
            เพื่อประเมินภาวะซึมเศร้าเบื้องต้น ระบบจะเก็บข้อมูลส่วนบุคคลของท่าน ได้แก่ คำตอบจากแบบสอบถาม
            ภาพหรือวิดีโอจากกล้อง (สีหน้าและอารมณ์ระหว่างการตอบแบบสอบถาม) และข้อมูลการติดต่อ เช่น อีเมล
            เพื่อใช้ในการวิเคราะห์แนวโน้มภาวะจิตใจด้วยเทคโนโลยีปัญญาประดิษฐ์ (AI)
        </div>

        <div class="content">
            <div>ระบบจะเก็บข้อมูลคำตอบและภาพสีหน้าของคุณเพื่อใช้วิเคราะห์ภาวะอารมณ์ด้วย AI ตามหลัก PDPA </div>
            <div>ข้อมูลจะถูกเก็บรักษาอย่างปลอดภัยและไม่เผยแพร่โดยไม่ได้รับอนุญาต</div>
            <div class="flex flex-col gap-2 mt-5">
                <UButton class="bg-black w-full flex items-center justify-center" @click="confirm">
                    Continue
                </UButton>
                <UButton variant="solid" class="bg-white w-full text-black flex items-center justify-center" @click="cancel">
                    Cancel
                </UButton>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

onMounted(async () => {
    console.log("auth", useCookie('auth').value);
    if(useCookie('auth').value.user_id){
        navigateTo(`/`);
    }
});

const confirm = () => {
    useCookie('pdpa').value = 'true'
    navigateTo('/')
}
const cancel = () => {
    useCookie('pdpa').value = 'false'
    navigateTo('/')
}

</script>

<style scoped>
.content{
    background: #DBF0E5;
    position: absolute;
    bottom: 0px;
    padding: 30px;
    font-size: 12px !important;
}
</style>