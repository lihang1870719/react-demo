/**
 * Created by lh100756 on 2015/7/27.
 */
var React = require('react');

module.exports = React.createClass({

    addVote: function () {
        console.log(this.props);
        var newCount = parseInt(this.props.voteCount, 10) + 1;
        this.props.onVote( this.props.questionKey, newCount);
    },
    minVote: function () {
        console.log(this.props);
        var newCount = parseInt(this.props.voteCount, 10) - 1;
        this.props.onVote( this.props.questionKey, newCount);
    },
    render: function () {
       return (
           <div className="media" key={this.props.key}>
               <div className="media-left">
                   <button onClick={this.addVote} className="btn btn-default">
                       <span className="glyphicon glyphicon-chevron-up"></span>
                       <span ref="voteCount" className="vote-count">{this.props.voteCount}</span>
                   </button>
                   <button onClick={this.minVote} className="btn btn-default">
                       <span className="glyphicon glyphicon-chevron-down"></span>
                   </button>
               </div>
               <div className="media-body">
                   <h4 className="media-heading">{this.props.title}</h4>
                   <p>{this.props.desc}</p>
               </div>
           </div>
       );
    }
});