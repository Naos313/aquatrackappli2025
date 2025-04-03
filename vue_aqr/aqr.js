var format_date = webix.Date.dateToStr("%d/%m/%Y");// formmat de la date
var API_URL = "http://192.168.61.87:3000/aqr"; //url api
webix.ui({ 
	container:"liste_aqr",
  rows:[
  //bouton Nouveau
	{cols:[
		{},
		{view:"button", id:"btn_nouv", autowidth:true, value:"Nouvel aquarium",click:affiche_add_window} //ouvre une nouvelle windows (add_aqr.js)
	]},
    { 
		cols:[
		// liste mes aquariums
			{view:"datatable", 
			id:"aqr_prv_list", 
			minWidth:200, 

			select:true, 
			//charge les données
			url:function(params){
				return webix.ajax().get(API_URL, params).then(function(data){
					data = data.json();
					//met la taille des ligne à 60
					for ( let ligne of data){
						ligne.$height = 60;
					}
					return data;});
			}, 
			//enregitre les modification (à modifier)
			//save :"json-> http://192.168.61.87:3000/aqr/",
			datatype:"json",
			//template:"#id#) #nom#	(#acces#), #volume#L #photo# #date#",
			columns:[
			{
				id: "nom", fillspace: true, 
				header:[{text:"Mes aquariums", colspan:5}, "Nom" ] // nom de la table + de la colonne Nom
			},
			{
				id: "acces", fillspace: true,
				header:[ {text:""}, {text:"Accés"} ] //espace pour le nom de la table + nom de la colonne Accés
			},
			{
				id: "volume",fillspace: true, 
				header:[ {text:""}, {text:"Volumes"} ],//espace pour le nom de la table + nom de la colonne Volumes
				template: function (obj) {
					return "<span>" + obj.volume + " L</span>" //renvoi les données sous la forme "volume L"
				}
			},
			{
				id: "photo", 
					fillspace: true, 
					header:[ {text:""}, {text:"Photo"} ],//espace pour le nom de la table + nom de la colonne Photo
					width:150,
					template: function (obj) {
						return '<img src="'+obj.photo+'" height=100%/>' // affiche l'image avec comme hauteur celle de la colonne
					  }
			},
			{
				id: "date", fillspace: true,
				header:[ {text:""}, {text:"Date de création"} ],//espace pour le nom de la table + nom de la colonne Date de création
				format:format_date //affiche au format jj/mm/aaaa
			}
			],
			//Quand on selectionne une ligne
			on:{ 
				onAfterSelect:ouvre_vue_mon_aqr,
			}
			},
			// liste aquariums publics
			{view:"datatable", 
			id:"aqr_plq_list", 
			minWidth:200,

			select:true, 
			autoConfig:true,
			//charge les données
			url:function(params){
				return webix.ajax().get(API_URL + "_pub", params).then(function(data){
					data = data.json();
					for ( let ligne of data){
						ligne.$height = 60; //met la taille des ligne à 60
					}
					return data;});
			}, 
			datatype:"json",
			columns:[
			{
				id: "nom", fillspace: true, 
				header:[{text:"Aquariums publics", colspan:4}, "Nom" ] // nom de la table + de la colonne Nom
			},
			{
				id: "volume",fillspace: true, 
				header:[ {text:""}, {text:"Volumes"} ], //espace pour le nom de la table + nom de la colonne Volumes
				template: function (obj) {
					return "<span>" + obj.volume + " L</span>" //renvoi les données sous la forme "volume L"
				}
			},
			{
				id: "photo", 
				fillspace: true, 
				header:[ {text:""}, {text:"Photo"} ], //espace pour le nom de la table + nom de la colonne Photo
				width:150,
				template: function (obj) {
					return '<img src="'+obj.photo+'" height=100%/>' // affiche l'image avec comme hauteur celle de la colonne
				  }
			},
			{
				id: "date", fillspace: true,
				header:[ {text:""}, {text:"Date de création"} ], //espace pour le nom de la table + nom de la colonne Date de création
				format:format_date  //affiche au format jj/mm/aaaa
			},
			],
			//Quand on selectionne une ligne
			on:{ 
				onAfterSelect:ouvre_vue_aqr_public,
			}
			}
		]
}, 

  ] 
}); 

//ouvre une nouvelle windows (add_aqr.js)
function affiche_add_window(){
				window_ajouter.show();
				var form = $$("aqr_form"); //selectionne le formulaire de la windows dans form
				form.clear(); //vide le formulaire
			};

//rajoute un aquarium
function ouvre_vue_mon_aqr(){
	var list = $$("aqr_prv_list");
	var data = list.getSelectedId();
	webix.storage.cookie.put("id_aqr",data.id);
	webix.storage.cookie.put("acces_type","Utl");
	open("http://webix.ir.lan/vue_aqr/vue_aqr.html", id_aqr = "1");
};
function ouvre_vue_aqr_public(id){
	var list = $$("aqr_plq_list");
	var data = list.getItem(id);
	webix.storage.cookie.put("id_aqr",data.id);
	webix.storage.cookie.put("user_id",data.user_id);
	webix.storage.cookie.put("acces_type","Plq");
	open("http://webix.ir.lan/vue_aqr/vue_aqr.html", id_aqr = "1");
};
function modifier(){
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
		photo: form_data.photo,// Récupération de la photo
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
function unselect_list(){
	$$("aqr_prv_list").unselectAll();
	$$("aqr_plq_list").unselectAll();
}
/*function supprimer(){
	var list = $$("aqr_prv_list");
	var id_list = list.getSelectedId();
	if (id_list){
		webix.confirm("Voulez vous supprimer " , "confirm-warning").then(function(){
			list.remove(id_list);
		});
	}
	clearForm();
};

function valuesToForm(id){
  var values = $$("aqr_prv_list").getItem(id);
  $$("aqr_form").setValues(values)

};*/

	//ajouter/modifier
/*function modifier(){
	var data= $$("aqr_prv_list");
	var sel = data.getSelectedId(); 
	var form = $$("aqr_form");
	var form_data = form.getValues();
	if (!form_data.nom || !form_data.acces || !form_data.date || !form_data.volume){
		webix.message("Le formulaire n'est pas rempli");
		window_ajouter.hide();
		return;
	}
    if (!sel){
		webix.message(item.nom + " a été ajouté");
		data.add(form_data);
    } else{
	var item = data.getItem(sel);
    
    item = form_data;             // setting the new value for the item 
    data.updateItem(sel, item);     // the dataset is updated! 
    webix.message(item.nom + " a été modifié"); 
	};
	window_ajouter.hide();
	form.clear();
};*/

