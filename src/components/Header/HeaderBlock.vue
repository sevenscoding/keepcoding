<template>
  <header class="header">
    <div class="header__container">
      <div>
        <PaginationBlock :items="paginationData" />
      </div>
      <div class="header__panel">
        <ProfileAvatarInfo class="header__profile" :user-name="userName" :avatar-src="avatarSrc" />
        <div class="header__settings">
          <IconButton>
            <IconSettings />
          </IconButton>
          <IconButton>
            <IconSignOut />
          </IconButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';
import PaginationBlock from "@components/сommon/Pagination/PaginationBlock.vue";
import ProfileAvatarInfo from "@components/Profile/ProfileAvatarInfo.vue";
import IconSettings from "@components/icons/IconSettings.vue";
import IconSignOut from "@components/icons/IconSignOut.vue";
import IconButton from "@components/сommon/IconButton.vue";
import { paginationData } from "@/mocks/pagination";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const userName = computed(() => user.value?.name);
const avatarSrc = computed(() => user.value?.avatar);
</script>

<style scoped lang="scss">
.header {
  height: 72px;
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  padding-inline: var(--container-padding);

  &__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__profile {
    padding-right: 53px;
  }

  &__settings {
    display: flex;
    gap: 33px;
  }

  &__panel {
    display: flex;
  }
}
</style>