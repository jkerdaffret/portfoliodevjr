import React, { Component } from 'react'
import { PlusCircleOutlined, InstagramOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons'
import Contact from './Contact'

class About extends Component {
    render() {
        return (
            <div className="about" id="about">
                <h3>En savoir <PlusCircleOutlined /></h3>
                <div className="bio">
                    <p> Ma curiosité dans le domaine de la programmation m'oblige à apprendre sans cesse, les possibilités sont immenses et le souhait de pouvoir répondre à toutes les attentes des clients d'autant plus.
                        C'est pourquoi il y tant de domaines exploités pour une expérience encore jeune, les compétences présentées dans les sections précédentes sont celles que je pourrais appliquer en tant que Développeur Junior dans entreprise, mais à ces dernières je pourrais ajouter quelques connaissances de base notament en Python, en Scraping ou encore,  en ayant participé à la configuration d'un miroir connecté avec raspberry pi, en objets connectés.
                        En ce qui concerne ce site web, il a été conçu grâce à une api en Node Js et MySql pour gérer les compétences et les projets, et pour le coté front en React enrichit de la bibliothèque AntDesign.
                        Si intéressé, sachez que la plupart des logos de mes projets sont aussi fait maison. <br/>
                        N'hésitez pas à me contacter pour plus d'informations par mail ou sur les réseaux si dessous. <br/>
                        Merci de votre visite.
                    </p>
                </div>
                <h3>Me Contacter <Contact/></h3>
                <div className="bio">
                    <p style={{textAlign: 'center'}}>jkerdaffret@outlook.com</p>
                </div>
                <h3>Mes réseaux</h3>
                <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
                    <li><a href="https://www.linkedin.com/in/julien-kerdaffret-4061a795/" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a></li>
                    <li><a href="https://github.com/jkerdaffret" target="_blank" rel="noopener noreferrer"><InstagramOutlined /></a></li>
                    <li><a href="https://www.instagram.com/julienk_pro/" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}

export default About