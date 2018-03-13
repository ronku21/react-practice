import React,{Component} from 'react';
import{Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
          name:this.props.user.initialName,
          flag:false,
          status:0,
          //homeLink:"Link Changed"
          homeLink:this.props.initialName
      }

      setTimeout(() => {
        this.setState({
            status:1
        })
       },3000);
    }

  /*
  *  Event Handling in React
  */
    onUpdateName = () => {
          if(!this.state.flag){
              this.setState({
                 name : "Saloni Sharma",
                 flag:true
              });
          }else{
              this.setState({
                 name:this.props.user.initialName,
                 flag:false
              });
          }
      }

      /*
      *  Passing Data b/w Parent component to Child Components
      */
      homeLink = () => {
          this.props.onChangeLinkName(this.state.homeLink)
      }

     /*
     *  Two way Data Binding in React
     */
      onHandlerClick = (e) =>{
        this.setState({
            homeLink:e.target.value
        });
        console.log(e.target.value);
      }


    static defaultProps = {
      studentName: 'stranger'
    }

     render(){
        return(
            <div className="textcss">
              <h1>Welcome to Home Component</h1>
              <div>
              <h2>User Details {this.props.year}</h2>
              <h4>{this.state.name}</h4>
              <h4>{this.state.status}</h4>
              {/*<Button bsStyle="warning" onClick={this.onUpdateName.bind(this)}>Update Name</Button>*/}
              <Button bsStyle="warning" onClick={this.onUpdateName}>Update Name</Button>
              <h4>{this.props.user.profile}</h4>
              <h4>{this.props.user.CompanyName}</h4>
               <ul>
                 {this.props.user.Hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
               </ul>
               {this.props.children}
               {this.props.username}
               {this.props.Studentname}
               {/*
                 1.You have to write eithe Home.defaultProps or static defaultProps.
                 2.Both are not Displayed in your component View.
                */}
                 <br/>


                <Button bsStyle="warning" onClick={this.props.greet}>
                Communication b/w Parents & Child Component
                </Button>
                <br/>
                <br/>


                <input type="text"
                 value={this.state.homeLink} onChange={this.onHandlerClick}/>
                 <br/><br/>

                <Button bsStyle="warning" onClick={this.homeLink}>Change Link</Button>
              </div>
            </div>
        )
      }
  }


 Home.propTypes = {
      user:PropTypes.object,
      year:PropTypes.number,
      //children:PropTypes.element.isRequired
 }

 Home.defaultProps = {
    username: 'Stranger'
 };
