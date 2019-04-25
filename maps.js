class myCustomMap {
    constructor(key, value) {

        this.collection = {};
        this.counter = 0;

        this.size = function() {
            return this.counter;
        }

        this.has = function(key) {
            return (key in this.collection);
        }

        this.set = function(key, value) {
            this.collection[key] = value;
            this.counter++;
        }

        this.get = function(key) {
            return (key in this.collection) ? this.collection[key] : null;
        }

        this.delete = function(key) {
            if (key in this.collection) {
                delete this.collection[key];
                this.counter--;
            }
        }

        this.values = function() {
            let final = [];
            for (let key of Object.keys(this.collection)) {
                final.push(this.collection[key]);
            }
            return (final.length > 0) ? final : null;
        }

        this.clear = function() {
            this.collection = {};
            this.counter = 0;
        }
    }
}


