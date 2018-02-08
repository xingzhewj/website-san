import Home from './Home';
import {router, Link} from 'san-router';
import Test1 from './HomeTest1';
import Test2 from './HomeTest2';
import './css/main';
import './css/test';

new Home().attach(document.getElementById('main'));

router.add({
    rule: '/test1',
    Component: Test1,
    target: '#home_view'
});
router.add({
    rule: '/test2/:id',
    Component: Test2,
    target: '#home_view'
});

router.start();
