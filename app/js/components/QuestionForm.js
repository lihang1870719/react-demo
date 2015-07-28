/**
 * Created by lh100756 on 2015/7/26.
 */
var React = require('react');

module.exports = React.createClass({
    handlerForm: function (e) {
        e.preventDefault();
        var newQuestion = {
            title: this.refs.title.getDOMNode().value,
            description: this.refs.description.getDOMNode().value,
            voteCount: 0
        };
        console.log(newQuestion);
        this.refs.addQuestionForm.getDOMNode().reset();
        this.props.onNewQuestion(newQuestion);
    },
    render: function (){
       var styleObj = {
            display: this.props.formDisplayed ? 'block' : 'none'
       };
       return (
           <div>
               <form ref="addQuestionForm" style={ styleObj } name="addQuestion" className="clearfix" onSubmit={this.handlerForm} >
                   <div className="form-group">
                       <label htmlFor="qtitle">问题</label>
                       <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题" />
                   </div>
                   <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
                   <button className="btn btn-success pull-right">确认</button>
                   <a onClick={this.props.handlerFormDisplay} className="btn btn-default pull-right">取消</a>
               </form>
           </div>
       );
    }
});