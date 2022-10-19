import React from "react";
import Bouton from "../../../components/Bouton/Bouton";

const Livre = ({titre, auteur, nbPages, modification, suppression}) => {
    // Précédemment, destructuration de l'objet props
    return (
        <>
            <td>{titre}</td>
            <td>{auteur}</td>
            <td>{nbPages}</td>
            <td><Bouton typeBtn="btn-warning" clic={modification}>Modifier</Bouton></td>
            <td><Bouton typeBtn="btn-danger" clic={suppression}>Supprimer</Bouton></td>
        </>
    );
    
}

export default Livre;

