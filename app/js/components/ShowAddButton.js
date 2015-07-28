/**
 * Created by lh100756 on 2015/7/26.
 */
var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <button id="add-question-btn" onClick={this.props.handlerFormDisplay} className="btn btn-success">添加问题</button>
        );
    }
});