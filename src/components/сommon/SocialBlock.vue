<script setup>
import IconButton from "@components/сommon/IconButton.vue";
import IconWhatsApp from "@icons/IconWhatsApp.vue";
import IconViber from "@icons/IconViber.vue";
import IconTelegram from "@icons/IconTelegram.vue";
</script>

<template>
<div class="social">
  <IconButton>
    <IconWhatsApp />
  </IconButton>
  <IconButton>
    <IconViber />
  </IconButton>
  <IconButton>
    <IconTelegram />
  </IconButton>
</div>
</template>

<style scoped lang="scss">
.social {
  display: flex;
  align-items: center;
  gap: var(--indent-small);
}
</style>