import '../style/theme.scss'
import Layout from '../components/_layout'

export default class extends React.Component {
  render() {
    return(
      <Layout title="index" description="test">
        <div className="container">
          Homepage
        </div>
      </Layout>
    )
  }
}