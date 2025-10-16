<template>
    <div class="h-screen p-10">
        <div class="content">
            <div class="flex w-full">
                <div class="w-1/2">89</div>
                <div class="w-1/2 text-2xl font-extrabold pt-5">อารมณ์ดีมาก</div>
            </div>
            <img src="../assets/images/happyWoman.png" alt="">
        </div>

        <div class="text-xl font-extrabold mb-4">รายละเอียด</div>
        <div class="text-[#9C9C9C] content-text">
            เพื่อประเมินภาวะซึมเศร้าเบื้องต้นระบบจะเก็บข้อมูลส่วนบุคคล
            ของท่าน ได้แก่ คำตอบจากแบบสอบถามภาพ
            หรือวิดีโอจากกล้อง(สีหน้าและอารมณ์ระหว่างการตอบ
            แบบสอบถาม) และข้อมูลการติดต่อเช่นอีเมลเพื่อใช้ในการวิเคราะห์
            แนวโน้มภาวะจิตใจด้วยเทคโนโลยีปัญญาประดิษฐ์(AI)
        </div>
        <div class="mt-10 text-xl font-extrabold ">สรุปการประเมินรายหมวดอาการ</div>

        <div class="mt-5 flex flex-col gap-2" v-for="(list, index) in lists" :key="index">
            <div class="text-center">{{ list.title }}</div>
            <template>
                <UProgress v-model="list.value" />
            </template>
            <div class="flex justify-between">
                <div>ปกติ</div>
                <div>รุงแรงมาก</div>
            </div>
        </div>

        <div class="mt-10 text-xl font-extrabold ">ผลในสัปดาห์นี้</div>
        <div class="text-[#9C9C9C] mt-5">
            เพื่อประเมินภาวะซึมเศร้าเบื้องต้นระบบจะเก็บข้อมูลส่วนบุคคล
            ของท่าน ได้แก่
        </div>

        <UButton class="bg-[#00803C] mt-10 w-full h-[50px] flex items-center justify-center" @click="confirm">
            ลองแบบทดสอบอื่น
        </UButton>
    </div>
</template>

<script setup>
const lists = ref([{ title: 'อารมณ์และความรู้สึกเศร้า', value: 50 }, { title: 'พลังงานและแรงจูงใจ', value: 75 }])
const value = ref(50)

</script>

<style scoped>
.content{
    height: 230px;
}

.content-text{
    background: rgba(255, 255, 255, 0.677) ;
}

img{
    position: absolute;
    right: 0px;
    top: 100px;
    z-index: -1;
}
</style>