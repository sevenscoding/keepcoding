import {
    HOME_ICON_BASE64,
    CALENDAR_ICON_BASE64,
    STUDENTS_ICON_BASE64,
    TEACHERS_ICON_BASE64,
    LESSONS_ICON_BASE64,
    GROUPS_ICON_BASE64,
} from "@constants/images/";

export const MENU_ITEMS_LIST = [
    { name: 'Главная', icon: 'home', link: '/home', source: HOME_ICON_BASE64 },
    { name: 'Расписание', icon: 'calendar', link: '/schedule', source: CALENDAR_ICON_BASE64 },
    { name: 'Ученики', icon: 'students', link: '/students', source: STUDENTS_ICON_BASE64, active: true },
    { name: 'Преподаватели', icon: 'teachers',  link: '/teachers', source: TEACHERS_ICON_BASE64, },
    { name: 'Задания', icon: 'tasks', link: '/assignments', source: LESSONS_ICON_BASE64 },
    { name: 'Группы', icon: 'groups', link: '/groups', source: GROUPS_ICON_BASE64 },
]