// met la vue window dans window_ajouter
var window_ajouter = webix.ui({
					view:"window",
					head:"Nouvel Aquarium",// nom affiché de la windows
					width: 1000, // met la largeur de la window à 1000
					position:"center", //affiche la window au centre de la page
					close:true,  //affiche une croix pour fermer
					//contenue de la window   
					body:{ cols:[
			{ //partie formulaire
				view:"form", 
				id:"aqr_form", 
				gravity:1,
				// elements == rows, cols can be declared instead 
				elements:[
					{ view:"text", name:"nom", id:"inp_nom", label:"Nom de l'aquarium :", labelWidth:160 }, // labelwidth est la largeur du libélé
					{view:"combo", 
						name:"acces", 
						id:"inp_acces", 
						label:"Niveau d'accès :",
						value:"privé", // valeur par défaut
						options:[
							{id:"privé", value:"privé"},
							{id:"publique", value:"publique"}
						],
						labelWidth:160 // labelwidth est la largeur du libélé
					},
					{ view:"datepicker",format:"%d/%m/%Y", name:"date", id:"inp_date", value: new Date(), label:"Date de création :", labelWidth:160 }, //value affiche a la date du jour 
					{ view:"text", name:"volume", id:"inp_volume", label:"Volume :", labelWidth:160 },
					{ view:"text", name:"photo", id:"inp_photo", label:"Photo :", labelWidth:160 }, 
					{} 
				] 
			},
			// bouton sauvegarder
			{view:"toolbar",
			  id:"bouton",
			  
			  // elements == cols, rows can be declared instead
			  elements:[
				// autowidth is a specific feature of button and label
				{ margin:5, rows:[
					{},//affiche le bouton en bas
					{ 
						view:"button", id:"btn_modif", autowidth:true, height:80, value:"sauvegarder", click:nouvel_aqr // appel la fonction nouvel_aqr
					},
				]}
				  
			  ]
				
			}
		]}
});
function nouvel_aqr(){
	var data= $$("aqr_prv_list"); //selectionne la liste  mes aquariums dans data
	
	var form = $$("aqr_form"); //selectionne le formulaire de la windows dans form
	var form_data = form.getValues(); // met les données du formulaire dans form_data
	if (!form_data.nom || !form_data.acces || !form_data.date || !form_data.volume){
		webix.message("Le formulaire n'est pas rempli");// affiche un message d'erreur si les champs ne son pas remplient
		return;
	}
	let newAquarium = { 
		nom: form_data.nom, // Récupération du nom 
		date: webix.Date.dateToStr("%Y-%m-%d")(form_data.date), // Formatage de la date 
		acces: form_data.acces,// Récupération de l'accés 
		volume: form_data.volume,// Récupération du volume
		photo: null,// Récupération de la photo
		user_id: "1" // met l'user_id à 1 (à modifier)
	}; 
		// Envoi des données via AJAX en méthode POST avec conversion en JSON 
	webix.ajax().post(API_URL, JSON.stringify(newAquarium), { 
		headers: { "Content-Type": "application/json" } // Envoi en JSON 
	});
	
	//webix.message(item.nom + " a été ajouté");
	//data.add(form_data); //rajoute un aquarium avec les données du formulaire
	webix.message("L'aquarium " + form_data.nom + " a été ajouté");  // affiche un message de comfirmation
	$$("aqr_prv_list").load(API_URL);  // rechache la liste
	window_ajouter.hide(); //masque la window
};				
