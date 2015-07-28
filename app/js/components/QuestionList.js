/**
 * Created by lh100756 on 2015/7/26.
 */
var React = require('react');
var QuestionItem = require('./QuestionItem.js');

module.exports = React.createClass({
   render: function (){
       var questions = this.props.questions;

       if(! (Array.isArray(questions))) {
           throw new Error('this.props not an array');
       }

       var questionComps = questions.map(function (qst) {
           console.log(this);
           return <QuestionItem
               onVote={this.props.onVote}
               questionKey={qst.key}
               key={qst.key}
               title={qst.title}
               desc={qst.desc}
               voteCount={qst.voteCount} />;
       }.bind(this) );

       console.log(questionComps);

       return (
           <div id="questions" className="">
               {questionComps}
           </div>
       );
   }
});