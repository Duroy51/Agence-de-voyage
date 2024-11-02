import React, { useState, useRef } from 'react';
import { FaUser, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGraduationCap, FaDollarSign, FaSchool, FaPrint, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';

// Simuler le chargement des données depuis une base de données
const filieres = ['Médecine', 'Ingénierie', 'Architecture', 'Droit', 'Commerce'];
const ecoles = ['École A', 'École B', 'École C', 'École D', 'École E'];

export const FormulaireDInscription = () =>{
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        dateNaissance: '',
        lieuNaissance: '',
        nomPere: '',
        prenomPere: '',
        nomMere: '',
        prenomMere: '',
        telephone: '',
        email: '',
        filiere: '',
        budget: '',
        ecole: '',
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const isStep1Valid = () => {
        const requiredFields = ['nom', 'prenom', 'dateNaissance', 'lieuNaissance', 'nomPere', 'prenomPere', 'nomMere', 'prenomMere', 'telephone', 'email', 'filiere', 'budget'];
        return requiredFields.every(field => formData[field] !== '');
    };

    const isFormValid = () => {
        return isStep1Valid() && formData.ecole !== '';
    };

    const handleNextStep = () => {
        if (isStep1Valid()) {
            setCurrentStep(2);
        } else {
            alert('Veuillez remplir tous les champs obligatoires avant de continuer.');
        }
    };

    const handlePrevStep = () => {
        setCurrentStep(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            setIsSubmitted(true);
            alert('Formulaire soumis avec succès !');
        }
    };

    const handlePrint = useReactToPrint({
        content: () => formRef.current,
    });

    const renderStep1 = () => (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="nom" className="flex items-center text-sm font-medium text-gray-700">
                        <FaUser className="mr-2 text-blue-500" />
                        Nom
                    </label>
                    <input
                        type="text"
                        name="nom"
                        id="nom"
                        required
                        value={formData.nom}
                        onChange={handleInputChange}
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2.5 text-base"
                    />
                </div>
                <div>
                    <label htmlFor="prenom" className="flex items-center text-sm font-medium text-gray-700">
                        <FaUser className="mr-2 text-blue-500" />
                        Prénom
                    </label>
                    <input
                        type="text"
                        name="prenom"
                        id="prenom"
                        required
                        value={formData.prenom}
                        onChange={handleInputChange}
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2.5 text-base"
                    />
                </div>
                <div>
                    <label htmlFor="dateNaissance" className="flex items-center text-sm font-medium text-gray-700">
                        <FaCalendarAlt className="mr-2 text-blue-500" />
                        Date de naissance
                    </label>
                    <input
                        type="date"
                        name="dateNaissance"
                        id="dateNaissance"
                        required
                        value={formData.dateNaissance}
                        onChange={handleInputChange}
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2.5 text-base"
                    />
                </div>
                <div>
                    <label htmlFor="lieuNaissance" className="flex items-center text-sm font-medium text-gray-700">
                        <FaMapMarkerAlt className="mr-2 text-blue-500" />
                        Lieu de naissance
                    </label>
                    <input
                        type="text"
                        name="lieuNaissance"
                        id="lieuNaissance"
                        required
                        value={formData.lieuNaissance}
                        onChange={handleInputChange}
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2.5 text-base"
                    />
                </div>
                <div>
                    <label htmlFor="nomPere" className="flex items-center text-sm font-medium text-gray-700">
                        <FaUser className="mr-2 text-blue-500" />
                        Nom du père
                    </label>
                    <input
                        type="text"
                        name="nomPere"
                        id="nomPere"
                        required
                        value={formData.nomPere}
                        onChange={handleInputChange}
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2.5 text-base"
                    />
                </div>
                <div>
                    <label htmlFor="prenomPere" className="flex items-center text-sm font-medium text-gray-700">
                        <FaUser className="mr-2 text-blue-500" />
                        Prénom du père
                    </label>
                    <input
                        type="text"
                        name="prenomPere"
                        id="prenomPere"
                        required
                        value={formData.prenomPere}
                        onChange={handleInputChange}
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2.5 text-base"
                    />
                </div>
                <div>
                    <label htmlFor="nomMere" className="flex items-center text-sm font-medium text-gray-700">
                        <FaUser className="mr-2 text-blue-500" />
                        Nom de la mère
                    </label>
                    <input
                        type="text"
                        name="nomMere"
                        id="nomMere"
                        required
                        value={formData.nomMere}
                        onChange={handleInputChange}
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2.5 text-base"
                    />
                </div>
                <div>
                    <label htmlFor="prenomMere" className="flex items-center text-sm font-medium text-gray-700">
                        <FaUser className="mr-2 text-blue-500" />
                        Prénom de la mère
                    </label>
                    <input
                        type="text"
                        name="prenomMere"
                        id="prenomMere"
                        required
                        value={formData.prenomMere}
                        onChange={handleInputChange}
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2.5 text-base"
                    />
                </div>
                <div>
                    <label htmlFor="telephone" className="flex items-center text-sm font-medium text-gray-700">
                        <FaPhone className="mr-2 text-blue-500" />
                        Numéro de téléphone
                    </label>
                    <input
                        type="tel"
                        name="telephone"
                        id="telephone"
                        required
                        value={formData.telephone}
                        onChange={handleInputChange}
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2.5 text-base"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700">
                        <FaEnvelope className="mr-2 text-blue-500" />
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2.5 text-base"
                    />
                </div>
                <div>
                    <label htmlFor="filiere" className="flex items-center text-sm font-medium text-gray-700">
                        <FaGraduationCap className="mr-2 text-blue-500" />
                        Filière d'étude
                    </label>
                    <select
                        name="filiere"
                        id="filiere"
                        required
                        value={formData.filiere}
                        onChange={handleInputChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2.5 text-base"
                    >
                        <option value="">Sélectionnez une filière</option>
                        {filieres.map((filiere) => (
                            <option key={filiere} value={filiere}>
                                {filiere}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="budget" className="flex items-center text-sm font-medium text-gray-700">
                        <FaDollarSign className="mr-2 text-blue-500" />
                        Budget (USD)
                    </label>
                    <input
                        type="number"
                        name="budget"
                        id="budget"
                        required
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2.5 text-base"
                    />
                </div>
            </div>
            <div className="flex justify-end mt-6">
                <button
                    type="button"
                    onClick={handleNextStep}
                    className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                    Suivant
                    <FaArrowRight className="ml-2" />
                </button>
            </div>
        </>
    );

    const renderStep2 = () => (
        <>
            <div>
                <label htmlFor="ecole" className="flex items-center text-sm font-medium text-gray-700">
                    <FaSchool className="mr-2 text-blue-500" />
                    École
                </label>
                <select
                    name="ecole"
                    id="ecole"
                    required
                    value={formData.ecole}
                    onChange={handleInputChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2.5 text-base"
                >
                    <option value="">Sélectionnez une école</option>
                    {ecoles.map((ecole) => (
                        <option key={ecole} value={ecole}>
                            {ecole}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex justify-between mt-6">
                <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 transform hover:scale-105"
                >
                    <FaArrowLeft className="mr-2" />
                    Précédent
                </button>
                <button
                    type="submit"
                    disabled={!isFormValid()}
                    className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                >
                    Soumettre
                </button>
            </div>
        </>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <h2 className="text-3xl font-extrabold text-center">Formulaire d'Inscription</h2>
                    <p className="mt-2 text-center">Agence de Voyage d'Étude</p>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
                    {currentStep === 1 ? renderStep1() : renderStep2()}

                </form>
                {isSubmitted && (
                    <div className="px-8 py-4 bg-green-100 border-t border-green-200">
                        <p className="text-green-700 text-center">Formulaire soumis avec succès !</p>
                        <div className="mt-4 flex justify-center">
                            <button
                                type="button"
                                onClick={handlePrint}
                                className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                            >
                                <FaPrint className="mr-2" />
                                Imprimer
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}