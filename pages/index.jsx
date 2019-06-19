import Layout from '../components/_layout'
import { connect } from 'react-redux'

class Index extends React.Component {
  render() {
    return(
      <Layout title="index" description="test">
        <div className="container">
            {this.props.todo}
        </div>
      </Layout>
    )
  }
}

export default connect( ({todo}) => ({todo}), {})(Index)