// met la vue window dans window_ajouter_hote
var id_aqr = webix.storage.cookie.get("id_aqr");
var api_url_hte = "http://192.168.61.31/aqr/" + id_aqr + "/hte"; //url api
var api_url_hte = "http://192.168.61.87:3000/hte"; //url api test
var window_ajouter_hote = webix.ui({
	view:"window",
	head:"Nouvel hôte",// nom affiché de la windows
	width: 1000, // met la largeur de la window à 1000
	position:"center", //affiche la window au centre de la page
	close:true,  //affiche une croix pour fermer
	//contenue de la window   
	body:{
		cols:[
			{
				view:"form", 
				id:"hote_form", 
				gravity:1,
				// elements == rows, cols can be declared instead 
				elements:[
					{view:"combo", 
						name:"genre", 
						id:"inp_genre", 
						label:"Genre :",
						options:[
							{id:"Poisson", value:"Poisson"},
							{id:"Plante", value:"Plante"},
							{id:"Invertébré", value:"Invertébré"}
						],
						labelWidth:160 // labelwidth est la largeur du libélé
					},
					{ view:"text", name:"denomination", id:"inp_denomination", label:"Dénomination :", labelWidth:160 },
					{ view:"text", name:"surnom", id:"inp_surnom", label:"Surnom :", labelWidth:160 },
					{ view:"datepicker",format:"%d/%m/%Y", name:"date_introduction", id:"inp_date_intro", value: new Date(), label:"Date d'introduction :", labelWidth:160 }, //value affiche a la date du jour 
					{ view:"datepicker",format:"%d/%m/%Y", name:"date_retrait", id:"inp_date_retrait", label:"Date de retait :", labelWidth:160 },
					{ view:"text", name:"nombre", id:"inp_nombre", label:"Nombre :", value: "1", labelWidth:160 },
					{ view:"text", name:"media", id:"inp_media", label:"Média :", labelWidth:160 }, 
					{} 
				]
			},
			{	
				margin:5,
				rows:[
					{},
					{view:"button", id:"btn_add", autowidth:true, height:80, value:"Sauvegarder", click:add_new_hote }
				]
			}
		]
	}
});

function add_new_hote(){
	var data= $$("hotes_list"); //selectionne la liste  mes aquariums dans data
	webix.message("cc");
	
	var form = $$("hote_form"); //selectionne le formulaire de la windows dans form
	var form_data = form.getValues(); // met les données du formulaire dans form_data
	if (!form_data.genre || !form_data.date_introduction || !form_data.denomination || !form_data.nombre){
		webix.message("Le formulaire n'est pas rempli");// affiche un message d'erreur si les champs ne son pas remplient
		return;
	}
	let newHote = { 
		genre: form_data.genre, // Récupération du genre
		date_introduction: webix.Date.dateToStr("%Y-%m-%d")(form_data.date_introduction),// Formatage de la date d'introduction
		date_retrait: webix.Date.dateToStr("%Y-%m-%d")(form_data.date_retrait), // Formatage de la date de retrait
		denomination: form_data.denomination,// Récupération de la dénomination
		media_id: form_data.media,// Récupération du Média
		nombre: form_data.nombre,// Récupération du nombre
		surnom: form_data.surnom,// Récupération du surnom
		commentaire: "" // Récupération du commentaire
	}; 
		// Envoi des données via AJAX en méthode POST avec conversion en JSON 
	webix.ajax().post(api_url_hte, JSON.stringify(newHote), { 
		headers: { "Content-Type": "application/json" } // Envoi en JSON 
	});
	
	//webix.message(item.nom + " a été ajouté");
	//data.add(form_data); //rajoute un aquarium avec les données du formulaire
	webix.message("L'hôte " + form_data.denomination + " a été ajouté");  // affiche un message de comfirmation
	$$("hotes_list").load(api_url_hte);  // rechache la liste
	window_ajouter_hote.hide(); //masque la window
};

