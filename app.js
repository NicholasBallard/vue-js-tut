new Vue({
    el: "#vue-app",
    data: {
        output: 'your favorite food'
    },
    methods: {
        readRefs: function () {
            console.log(this.$refs.test.value);
            this.output = this.$refs.input.value;
        }
    }
});