import 'isomorphic-fetch'
import axios from 'axios'

class List extends React.Component {
  static getInitialProps = async function () {
    const res = await fetch('http://localhost:8080/products')
    const data = await res.json()
    return { data }
  }

  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    }
  }


  render() {
    return (
      <div>
        {this.props.data.data.map(data => {
          return (<div key={data.id}>
            <h1>{data.name}</h1>
            <h5>{data.category}</h5>
            <img src={`http://localhost:8080/${data.productImage}`} />
            <button onClick={() => axios.delete('http://localhost:8080/products/' + data.id)}>delete</button>
          </div>
          )
        })}
      </div>
    )
  }
}

export default List