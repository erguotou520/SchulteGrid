<script setup lang="ts">
import { onMounted, ref, TransitionGroup } from 'vue'
import _shuffle from 'lodash.shuffle'

const cells = ref(Array.from({ length: 25 }, (_, index) => index + 1))

const shuffle = () => {
  cells.value = _shuffle(cells.value)
}

const print = () => {
  window.print()
}

onMounted(() => {
  shuffle()
})
</script>

<template>
  <div
    class="print:w-full print:pt-1/4 flex flex-col h-screen mx-auto max-w-full w-100 md:w-112 lg:w-124 pt-4 md:pt-5 lg:pt-6 relative"
  >
    <TransitionGroup name="cell" tag="div" class="flex flex-wrap px-4 print:px-1/9">
      <div
        v-for="cell in cells"
        :key="cell"
        class="cell w-1/5 aspect-square inline-flex items-center justify-center text-base md:text-xl lg:text-2xl print:text-2xl"
      >
        {{ cell }}
      </div>
    </TransitionGroup>
    <div class="hidden print:flex items-end fixed right-4 bottom-4">
      日期：<span class="input-line mr-6"></span> 用时：<span class="input-line"></span>
    </div>
    <div
      class="print:hidden fixed bottom-0 left-0 right-0 py-2 px-4 bg-green-400 text-white text-sm"
    >
      <div class="mx-auto max-w-200">
        <p class="mb-2 font-medium">
          <span class="text-green-100">【舒尔特方格】</span>专注力训练：
        </p>
        <p>1. 点击乱序按钮，随机打乱数字</p>
        <p>2. 点击打印按钮，打印到A4纸上</p>
        <p>3. 家长提前告诉小孩要在纸上从 1 指到 25 并大声读数</p>
        <p>4. 家长开始计时，小孩开始读数</p>
        <p class="mt-2">
          完成时间越短，专注力越强，建议经常保持训练，每次训练前请重新点击乱序按钮生成不同的表格
        </p>
        <p>
          以 12 至 14 岁年龄为例，能达到 16 秒以内为优秀， 26 秒属于中等水平， 36
          秒则需要进行强化提高，幼儿时间可相应提高
        </p>
        <div class="mt-2 flex items-center justify-center gap-8">
          <button @click="shuffle" class="button">乱序</button>
          <button @click="print" class="button">打印</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cell {
  border: 1px solid #aaa;
  margin-right: -1px;
  margin-bottom: -1px;
}
.cell-move {
  transition: transform 1s;
}
.input-line {
  @apply w-[6em] h-6 border border-transparent border-b-dark-600 border-solid;
}
.button {
  @apply flex-1 bg-green-600 border-solid border-b-2 border-t-2 border-transparent hover:border-b-green-800 text-white font-bold py-2 px-4 rounded-sm;
}
</style>
