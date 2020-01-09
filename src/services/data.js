import Vue from "vue";

function map(data, map) {
    if (this instanceof Vue) {
        data.forEach((element) => {
            for (const key in element) {
                if (element.hasOwnProperty(key) && !element[key].hasOwnProperty('value')) {
                    this.$set(element, key, { value: element[key]});

                    map.call(this, element, key);
                }
            }
        });
    }
}

function sort(data, sort) {
    data.sort((a, b) => {
        const x = a[sort.by].value;
        const y = b[sort.by].value;

        if (!x || !y) {
            return 0;
        }

        const dateA = new Date(x).valueOf();
        const dateB = new Date(y).valueOf();

        if (dateA && dateB) {
            return sort.ascending ? dateB - dateA : dateA - dateB;
        }

        if (isNaN(Number(x)) && isNaN(Number(y))) {
            return sort.ascending ?
                x < y ? -1 : x > y ? 1 : 0 :
                x > y ? -1 : x < y ? 1 : 0;
        }

        return sort.ascending ? y - x : x - y;
    });
}

function filter(base, filter, by) {
    if (filter === 'all') {
        return base;
    } else {
        return base.filter((item) => {
            return item.hasOwnProperty(by) && item[by].value === filter;
        });
    }
}

export default { map, sort, filter }
