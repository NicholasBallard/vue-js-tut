new Vue({
    el: '#vue-app',
    data: {
        name: 'Nicholas',
        job: 'Ninja',
        website: 'http://bing.com/',
        websiteTag: '<a href="http://www.optimoanalytics.com/">Aaron\'s new website, Optimo Analytics</a>',
    },
    methods: {
        greet: function(daypart){
            return 'Good ' + daypart + ', ' + this.name + '.';
        }
    }
});