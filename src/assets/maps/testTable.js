import Vue from 'vue';

export default function(element, key) {
    const props = [
        {property: 'request', key: 'link', value: element[key].value},
        {property: 'payment_date', key: 'sort', value: true}
    ];

    props.forEach((prop) => {
        if (prop.property === key && this instanceof Vue) {
            this.$set(element[key], prop.key, prop.value);
        }
    });
}
