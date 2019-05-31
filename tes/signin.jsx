import axios from 'axios'

export default class extends React.Component {
  post = function (e) {
    console.log('success')
  }
  render() {
    return (
      <div>
        <form action="http://localhost:8080/user/signin" method="post" onSubmit={this.post}>
          <input type="text" name="email" id="email" />
          <input type="password" name="password" id="password" />
          <input type="hidden" name="redirect" value="/tes/list" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}