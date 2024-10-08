import { defineStore } from 'pinia';
import { STATUSES } from "@constants/common/statuses"

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: {
            name: 'Абрамова Екатерина',
            gender: 'w',
            avatar: new URL('@/assets/img/profile/avatar.jpg', import.meta.url)?.href,
            phone: '8-900-000-00-00',
            birthDate: '25.04.2004',
            age: 17,
            parentPhone: '8-900-000-00-00',
            status: 'active',
            address: 'г. Краснодар, ул. Советская 24, кв. 208',
        },
    }),
    getters: {
        userStatus: (state) => STATUSES.USER[state.user.status] || state.user.status
    },
});
