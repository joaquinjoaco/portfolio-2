import React from 'react'
import Project from './Project/Project'

export default function MyProjects() {
     return (
          <div className="my-projects">

               {/* MiFicha */}
               <Project name={"MiFicha"} desc={"React Native app currently in development, to store the medical record of an individual and be able to read it by scanning a QR code in case of an emergency."} background={"/src/assets/images/ficha-medica.png"} />

               {/* Laundrify CRUD */}
               <Project name={"Laundrify CRUD"} desc={"CRUD React app with FireAuth (Google authentication) and Firebase for storing clients and orders."} background={"/src/assets/images/laundrify-crud.png"} />

               {/* sorvisLater */}
               <Project name={"sorvisLater"} desc={"Mockup of an incident management web app destined towards better incident management for gaming servers. Inspiration taken form ServiceNow. Made with React."} background={"/src/assets/images/sorvisLater.png"} />

               {/* Eventyr Banlist */}
               <Project name={"Eventyr Banlist"} desc={"React firebase CRUD web app that utilizes firebase realtime database."} background={"/src/assets/images/eventyr-banlist.png"} />

               {/* Eventyr player guide */}
               <Project name={"Eventyr guide"} desc={"A website with useful information about Eventyr for new users. Made with react."} background={"/src/assets/images/eventyr-guia.png"} />

               {/* Bandicoot Informatic Team */}
               <Project name={"Bandicoot\nInformatic Team"} desc={"Website of a fictional IT company."} background={"/src/assets/images/bandicoot.png"} />

               {/* La fisica segun dios */}
               <Project name={"La física según\ndios"} desc={"Friend's website quick redesign."} background={"/src/assets/images/lafisicasegundios.png"} />

               {/* Laundrify website */}
               <Project name={"Laundrify"} desc={"A Laundromat's website."} background={"/src/assets/images/laundrify-landing.png"} />

          </div>
     )
}
