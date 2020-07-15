import React, { Component } from 'react'
import axios from 'axios'
import Tags from './Tags'

class Projets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projets: [],
    }
  }

  componentDidMount() {
    const url = '/api/projets'

    axios.get(url)
      .then((res) => {
        if(res.data.projets) {
          const data = res.data.projets.map((projet) => {
            return {
              key: projet.id,
              id: projet.id,
              nom: projet.nom,
              description: projet.description,
              image: projet.image,
              lien: projet.lien
            }
          })
          this.setState({projets: data})
        }
      })
      .catch( (error) => {
        console.log('😱', error);
    })
  }

    
    render() {
        const imageUrl = 'http://localhost:5000/images/'
        const projet = this.state.projets.map((projet) => (
          <a href={projet.lien} target="_blank" rel="noopener noreferrer" key={projet.id}>
          <div className="site" style={{background: `url(${imageUrl}${projet.image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="overlay">
              <p>{projet.nom}</p><br/>
              <Tags id={projet.id}/>
            </div>
          </div></a>
        ))

        return (
          <div className="projets" id="projets">
            <h1  style={{color: 'white'}}>Mes Projets</h1>
            <div className="sites">
              {projet}
            </div>
          </div>
        )
    }
}

export default Projets