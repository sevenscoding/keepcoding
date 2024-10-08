<template>
  <div class="profile-info">
    <div class="empty"></div>
    <InfoBlock class="phone" :label="USER_INFO_BLOCKS.PHONE" :text="user.phone" />
    <InfoBlock class="birth-date" :label="USER_INFO_BLOCKS.BIRTH_DATE" :text="user.birthDate" />
    <InfoBlock class="status" :label="USER_INFO_BLOCKS.STATUS">
      <template #value>
        <StatusBlock :status="user.status" :text="userStatus" />
      </template>
    </InfoBlock>
    <InfoBlock class="parent-phone" :label="USER_INFO_BLOCKS.PARENT_PHONE" :text="user.parentPhone" />
    <InfoBlock class="address" :label="USER_INFO_BLOCKS.ADDRESS" :text="user.address" />
  </div>
</template>

<script setup>
import { USER_INFO_BLOCKS } from "@constants/user/user-info";
import InfoBlock from "@components/сommon/InfoBlock.vue";
import StatusBlock from "@components/сommon/StatusBlock.vue";

defineProps({
  user: {
    type: Object,
    default: () => ({}),
  },
  userStatus: {
    type: String,
    required: false,
  },
});
</script>

<style scoped lang="scss">
.profile-info {
  display: grid;
  grid-template-columns: auto 2.97vw auto 7.66vw auto;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "empty . phone . birth-date"
    "status . parent-phone . address";
  align-content: space-between;
  align-items: self-end;
}

.empty {
  grid-area: empty;
}

.status {
  grid-area: status;
}

.phone {
  grid-area: phone;
}

.birth-date {
  grid-area: birth-date;
}

.parent-phone {
  grid-area: parent-phone
}

.address {
  grid-area: address;
}
</style>
