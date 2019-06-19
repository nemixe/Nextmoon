import Head from 'next/head'
import proptypes from 'prop-types'
import '../style/theme.scss'

class Layout extends React.Component {
  render() {
    return(
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
        </Head>

        {this.props.children}

      </div>
    )
  }
}

Layout.propTypes = {
  title: proptypes.string.isRequired,
}

export default Layout