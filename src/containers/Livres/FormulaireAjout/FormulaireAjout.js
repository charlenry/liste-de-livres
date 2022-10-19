import React, { Component } from 'react';
import Bouton from "../../../components/Bouton/Bouton"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../../bootswatch/lumen/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
// import '@popperjs/core/dist/umd/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';

class FormulaireAjout extends Component {
    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nbPagesSaisi: ""
    }



    handleValidationForm = (event) => {
        const formulaire = document.querySelector(".needs-validation");

        if (!formulaire.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            formulaire.classList.add('was-validated');
        } else {
            // debugger
            this.props.validation(this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi);
            this.setState({
                titreSaisi: "",
                auteurSaisi: "",
                nbPagesSaisi: ""
            })
        }

    }


    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{ fontFamily: 'Sigmar One' }}>Affichage du formulaire d'ajout</h2>
                <form className="needs-validation" noValidate>
                    <div className="mb-3">
                        <label htmlFor="titre">Titre du livre</label>
                        <input type="text"
                            className="form-control"
                            id="titre"
                            minLength="3"
                            value={this.state.titreSaisi}
                            onChange={(event) => this.setState({ titreSaisi: event.target.value })}
                            required
                        />
                        <div className="invalid-feedback">Veuillez saisir au moins 3 caractères</div>
                        <div className="valid-feedback">C'est bon !</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="auteur">Auteur</label>
                        <input type="text" className="form-control" id="auteur"
                            value={this.state.auteurSaisi}
                            minLength="3"
                            onChange={(event) => this.setState({ auteurSaisi: event.target.value })}
                            required
                        />
                        <div className="invalid-feedback">Veuillez saisir au moins 3 caractères</div>
                        <div className="valid-feedback">C'est bon !</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbPages">Nombre de pages</label>
                        <input type="number" className="form-control" id="nbPages"
                            value={this.state.nbPagesSaisi}
                            min="50"
                            max="500"
                            onChange={(event) => this.setState({ nbPagesSaisi: event.target.value })}
                            required
                        />
                        <div className="invalid-feedback">Veuillez saisir une valeur entre 50 et 500</div>
                        <div className="valid-feedback">C'est bon !</div>
                    </div>
                    <Bouton typeBtn="btn-primary" css="mb-3" clic={this.handleValidationForm}>Valider</Bouton>
                </form>
            </>
        );
    }
}

export default FormulaireAjout;