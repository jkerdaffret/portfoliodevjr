import React, { Component } from 'react'
import axios from 'axios'

class Tags extends Component {
    constructor(props) {
        super(props)
        this.state = {
          tags: [],
        }
      }

  componentDidMount() {
      const id = this.props.id
    const url2 = `/api/projets/${id}/competences`

    axios.get(url2)
      .then((res) => {
        if(res.data.tags) {
          const data = res.data.tags.map((tag, index) => {
            return {
                key: index,
                competences: tag.competences
            }
          })
          this.setState({tags: data})
        }
      })
      .catch( (error) => {
        console.log('😱', error);
    })
  }

    render() {
        const tag = this.state.tags.map((tag, index) => (
            <li key={index} style={{marginRight: '10px', border: '1px solid rgb(104, 152, 255)', padding: '2px', borderRadius: '10px'}}>{tag.competences}</li>
          ))
        return (
            <ul style={{listStyle: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', margin: '0 30px', fontSize: '14px'}}>
                {tag}
            </ul>
        )
    }
}

export default Tags