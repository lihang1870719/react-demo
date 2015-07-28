/**
 * Created by lh100756 on 2015/7/26.
 */
var React = require('react');
var ShowAddButton = require('./ShowAddButton.js');
var QuestionForm = require('./QuestionForm.js');
var QuestionList = require('./QuestionList.js');
var _=require('lodash');

module.exports = React.createClass({
    getInitialState: function (){
        var questions = [
            {
                key: 1,
                title: '知乎是什么',
                voteCount: 23,
                desc: '我也不知道是什么，你可以自己去试试'
            },
            {
                key: 2,
                title: '知乎是什么',
                voteCount: 23,
                desc: '我也不知道是什么，你可以自己去试试'
            }];
        return {
            questions: questions,
            formDisplayed: false
        };
    },
    handlerFormDisplay: function () {
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    },
    onNewQuestion: function (newQuestion) {
        newQuestion.key = this.state.questions.length + 1;

        var newQuestions = this.state.questions.concat( newQuestion );
        newQuestions = this.sortQuestion(newQuestions);

        return this.setState({
           questions: newQuestions
        });
    },
    sortQuestion: function (newQuestions) {
        newQuestions.sort(function (a, b) {
            return b.voteCount - a.voteCount;
        });

        return newQuestions;
    },
    onVote: function (key, newCount) {
        var questions = _.uniq( this.state.questions );
        var index = _.findIndex( questions, function(qst) {
            return qst.key == key;
        });

        questions[index].voteCount = newCount;
        questions = this.sortQuestion(questions);
        this.setState({
           questions: questions
        });
    },
    render: function() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <div className="container">
                        <h1>React--问答</h1>
                        <ShowAddButton handlerFormDisplay={this.handlerFormDisplay} />
                    </div>
                </div>
                <div className="main container">
                    <QuestionForm
                        onNewQuestion={this.onNewQuestion}
                        formDisplayed={this.state.formDisplayed}
                        handlerFormDisplay={this.handlerFormDisplay} />
                    <QuestionList
                        onVote={this.onVote}
                        questions={this.state.questions}/>
                </div>
            </div>
        );
    }
});