import React from 'react'

// class DemoLogin extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleClick = this.handleClick.bind(this)
//     console.log(this.props)
//   }
//   handleClick(e) {
//     console.log(this)
//     // this.props.history.push('/signin')

//     // this.state.ui
//     console.log(this.props)
//     // debugger
//     this.props.demouser({username: 'reidjs', password: '123456'});
//   }
//   render() {
//     return (
//       <div className="demo-button">
//         <button onClick={this.handleClick}>Demo User</button>
//       </div>
//     )
//   }
// }
const DemoLogin = ({demouser}) => {
  const handleClick = (e) => {
    demouser({username: 'reidjs', password: '123456'})
  }
  return (
    <div className="demo-button">
      <button onClick={handleClick}>Demo User</button>
    </div>
  )
}

export default DemoLogin