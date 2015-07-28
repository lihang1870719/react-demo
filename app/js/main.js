/**
 * Created by lh100756 on 2015/7/26.
 */
var React = require('react');
var QuestionApp = require('./components/QuestionApp.js');

var mainCon = React.render(
    <QuestionApp />,
    document.getElementById('app')
);