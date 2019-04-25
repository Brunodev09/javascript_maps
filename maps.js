class myCustomMap {
    constructor() {

        this.collection = {};
        this.counter = 0;

    }

    size() {
        return this.counter;
    }

    has(key) {
        return (key in this.collection);
    }

    set(key, value) {
        this.collection[key] = value;
        this.counter++;
    }

    get(key) {
        return (key in this.collection) ? this.collection[key] : null;
    }

    delete(key) {
        if (key in this.collection) {
            delete this.collection[key];
            this.counter--;
        }
    }

    values() {
        let final = [];
        for (let key of Object.keys(this.collection)) {
            final.push(this.collection[key]);
        }
        return (result.length > 0) ? result : null;
    }

    clear() {
        this.collection = {};
        this.counter = 0;
    }
}

