import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default new VueI18n({
    locale: 'ru',
    messages: {
        'ru': {
            id: 'ID',
            location: 'Магазин',
            service: 'Сервисы',
            uuid: 'UUID',
            request: 'Заявка',
            payment_date: 'Дата платежа',
            slot_date: 'Дата слота',
            answer_code: 'Код ответа',
            service_message: 'Сообщение от сервиса',
            all_locations: 'Все магазины',
        },
    },
});
