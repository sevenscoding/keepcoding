export const FILTER_NAMES = {
    TYPE: [
        { label: 'Договор', value: 'Договор' },
        { label: 'Справка', value: 'Справка' },
        { label: 'Анкета', value: 'Анкета' },
    ],
    STATUS: [
        { label: 'Заключен', value: 'active' },
        { label: 'Расторгнут', value: 'terminated' },
    ],
    SORT_BY: [
        { label: 'Дате', value: 'created_at' }
    ],
};

export const FILTER_LABEL_TITLES = {
    TYPE: 'Тип документа',
    STATUS: 'Статус',
    SORT_BY: 'Сортировать по',
    ADD_DOCUMENT: 'Добавить документ'
}