import React, { Component } from 'react'
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { DownCircleOutlined } from '@ant-design/icons'

const { Panel } = Collapse;


const genExtra = () => (
    <DownCircleOutlined
      onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

class Competences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            front: [],
            back: [],
            db: [],
            mobile: [],
            autres: [],
        }
    }

    componentDidMount() {
        const url = "/api/competences/getfront"

        axios.get(url)
            .then((res) => {
                if(res.data.competences) {
                    const data = res.data.competences.map((front, index) => {
                        return {
                            key: index,
                            id: front.id,
                            nom: front.nom,
                            ratio: front.ratio,
                        }
                    })
                    this.setState({front: data})
                }
            })
            .catch( (error) => {
                console.log('😱', error);
            })


        const url2 = "/api/competences/getback"

        axios.get(url2)
            .then((res) => {
                if(res.data.competences) {
                    const data = res.data.competences.map((back, index) => {
                        return {
                            key: index,
                            id: back.id,
                            nom: back.nom,
                            ratio: back.ratio,
                        }
                    })
                    this.setState({back: data})
                }
            })
            .catch( (error) => {
                console.log('😱', error);
            })


        const url3 = "/api/competences/getdb"

        axios.get(url3)
            .then((res) => {
                if(res.data.competences) {
                    const data = res.data.competences.map((db, index) => {
                        return {
                            key: index,
                            id: db.id,
                            nom: db.nom,
                            ratio: db.ratio,
                        }
                    })
                    this.setState({db: data})
                }
            })
            .catch( (error) => {
                console.log('😱', error);
            })

        const url4 = "/api/competences/getmobile"

        axios.get(url4)
            .then((res) => {
                if(res.data.competences) {
                    const data = res.data.competences.map((mobile, index) => {
                        return {
                            key: index,
                            id: mobile.id,
                            nom: mobile.nom,
                            ratio: mobile.ratio,
                        }
                    })
                    this.setState({mobile: data})
                }
            })
            .catch( (error) => {
                console.log('😱', error);
            })

        const url5 = "/api/competences/getothers"

        axios.get(url5)
            .then((res) => {
                if(res.data.competences) {
                    const data = res.data.competences.map((autre, index) => {
                        return {
                            key: index,
                            id: autre.id,
                            nom: autre.nom,
                            ratio: autre.ratio,
                        }
                    })
                    this.setState({autres: data})
                }
            })
            .catch( (error) => {
                console.log('😱', error);
            })
    }


    render() {
        
            const front = this.state.front.map((front, index) => (
                <div className="skills" key={index}>
                <p>{front.nom}</p></div>
            )
        )

            const back = this.state.back.map((back, index) => (
                <div className="skills" key={index}>
                <p>{back.nom}</p></div>
            )
        )

            const db = this.state.db.map((db, index) => (
                <div className="skills" key={index}>
                <p>{db.nom}</p></div>
            )
        )

            const mobile = this.state.mobile.map((mobile, index) => (
                <div className="skills" key={index}>
                <p>{mobile.nom}</p></div>
            )
        )

            const other = this.state.autres.map((autre, index) => (
                <div className="skills" key={index}>
                <p>{autre.nom}</p></div>
            )
        )

        return (
            <div className="competences" id="competences"> 
            <h1  style={{color: 'white'}}>Mes Compétences</h1>
            <Collapse accordion style={{width: '100%'}}>
                <Panel className="field" header="Front-End" style={{textAlign: 'center', textTransform: 'uppercase', color: '#000', fontWeight: 'bold', fontSize: '28px'}} key="1" showArrow={false} ghost={true} extra={genExtra()}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                    {front}
                    </div>
                </Panel>
                <Panel className="field" header="Back-End" style={{textAlign: 'center', textTransform: 'uppercase', color: '#000', fontWeight: 'bold', fontSize: '28px'}} key="2" showArrow={false} ghost={true} extra={genExtra()}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                    {back}
                    </div>
                </Panel>
                <Panel className="field" header="Base de données" style={{textAlign: 'center', textTransform: 'uppercase', color: '#000', fontWeight: 'bold', fontSize: '28px'}} key="3" showArrow={false} ghost={true} extra={genExtra()}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                    {db}
                    </div>
                </Panel>
                <Panel className="field" header="Mobile" style={{textAlign: 'center', textTransform: 'uppercase', color: '#000', fontWeight: 'bold', fontSize: '28px'}} key="4" showArrow={false} ghost={true} extra={genExtra()}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                    {mobile}
                    </div>
                </Panel>
                <Panel className="field" header="Autres Compétences" style={{textAlign: 'center', textTransform: 'uppercase', color: '#000', fontWeight: 'bold', fontSize: '28px'}} key="5" showArrow={false} ghost={true} extra={genExtra()}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                    {other}
                    </div>
                </Panel>
            </Collapse>
            </div>
        )
    }
}

export default Competences