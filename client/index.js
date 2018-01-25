import san from 'san';
import Test from './components/test.san';

var MyApp = san.defineComponent({
    template: '<p>Hello {{name}}!<Test/></p>',

    initData: function () {
        return {
            name: 'San'
        };
    }
});


var myApp = new MyApp();
myApp.attach(document.body);