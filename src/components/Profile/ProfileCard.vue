<script setup>
import { computed } from "vue";
import AvatarBlock from "@components/сommon/AvatarBlock.vue";
import ProfileTitle from "@components/Profile/ProfileTitle.vue";
import SocialBlock from "@components/сommon/SocialBlock.vue";
import CommentsLink from "@components/сommon/CommentsLink.vue";
import ProfileInfo from "@components/Profile/ProfileInfo.vue";
import ActionPanel from "@components/сommon/ActionPanel.vue";
import BaseCard from "@components/сommon/BaseCard.vue";
import IconEdit from "@icons/IconEdit.vue";
import IconButton from "@components/сommon/IconButton.vue";
import IconRemove from "@icons/IconRemove.vue";

const props = defineProps({
  user: {
    type: Object,
    default: () => ({}),
  },
  userStatus: {
    type: String,
    required: false,
  }
});

const profileImgSrc = computed(() => props.user?.avatar);
const userName = computed(() => props.user?.name);
const userGender = computed(() => props.user?.gender);
</script>

<template>
<BaseCard>
  <div class="profile-card">
      <div class="profile-card__contacts">
        <AvatarBlock class="profile-card__avatar" :avatar-src="profileImgSrc" :alt-text="userName" />
        <div class="profile-card__block">
          <ProfileTitle :name="userName" :gender="userGender" />
          <div class="profile-card__social">
            <SocialBlock />
            <CommentsLink />
          </div>
        </div>
      </div>
      <ProfileInfo class="profile-card__info" :user="user" :user-status="userStatus" />
    <ActionPanel class="profile-card__actions">
      <IconButton>
        <IconEdit />
      </IconButton>
      <IconButton>
        <IconRemove />
      </IconButton>
    </ActionPanel>
  </div>
</BaseCard>
</template>

<style scoped lang="scss">
.profile-card {
  display: flex;

  &__actions {
    flex-direction: column;
    justify-content: space-between;
    margin-left: auto;
    color: var(--color-dark-grey)
  }

  &__social {
    display: flex;
    gap: var(--indent-extra-large);
  }

  &__info {
    margin-left:  7.96vw;
  }

  &__contacts {
    display: flex;
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 38px;
  }

  &__avatar {
    width: 112px;
    height: 112px;
    border-radius: 50%;
  }
}
</style>