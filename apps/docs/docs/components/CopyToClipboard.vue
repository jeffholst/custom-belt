<script setup lang="ts">
defineProps<{
  allowCopyToClipboard: boolean;
  callback: Function;
}>();
</script>

<template>
  <div v-if="allowCopyToClipboard" @click="callback()" class="copyURL">
    <span>Copy URL to Clipboard</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="svgIcon"
      viewBox="0 0 52 52"
      enable-background="new 0 0 52 52"
      xml:space="preserve"
    >
      <g>
        <path
          d="M17.4,11.6h17.3c0.9,0,1.6-0.7,1.6-1.6V6.8c0-2.6-2.1-4.8-4.7-4.8h-11c-2.6,0-4.7,2.2-4.7,4.8V10
  C15.8,10.9,16.5,11.6,17.4,11.6z"
        />
        <path
          d="M43.3,6h-1.6c-0.5,0-0.8,0.3-0.8,0.8V10c0,3.5-2.8,6.4-6.3,6.4H17.4c-3.5,0-6.3-2.9-6.3-6.4V6.8
  c0-0.5-0.3-0.8-0.8-0.8H8.7C6.1,6,4,8.2,4,10.8v34.4C4,47.8,6.1,50,8.7,50h34.6c2.6,0,4.7-2.2,4.7-4.8V10.8C48,8.2,45.9,6,43.3,6z"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.copyURL {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.svgIcon {
  width: 25px;
  height: 25px;
  fill: #000000;
  padding-left: 10px;
}

.dark .svgIcon {
  fill: #ffffff;
}
</style>
