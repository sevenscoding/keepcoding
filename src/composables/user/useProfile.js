import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { genderData } from '@constants/user';

export function useProfile() {
    const { user } = useUserStore();

    const userGender = computed(() => genderData.find(item => item.gender === user.gender));
    const userGenderIcon = computed(() => userGender.value?.icon || '');

    return { userGender, userGenderIcon };
}