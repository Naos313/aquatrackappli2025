var format_date = webix.Date.dateToStr("%d/%m/%Y");// formmat de la date
var id_aqr = webix.storage.cookie.get("id_aqr");
var API_URL = "http://192.168.61.87:3000/aqr/" + id_aqr; //url api
		
webix.ui({ 
	container:"info_aqr",
	rows:[
	{cols:[
		{ 
			view:"template", 
			url:API_URL,
			template:"Créé le " +format_date("obj.date") 
		},
		{ 
			view:"template",
			url:API_URL,
			template: "<div class='titre_aqr'>#nom#</div>" 
		},
		{ 
			view:"template", 
			url:API_URL,
			template:"<div class='gauche'>Statut : #acces#</div>" 
		}
	]},
	{cols:[
		{ 
			view:"template", 
			url:API_URL,
			template:"Volume : #volume# L" 
		},
		{ 
			view:"template", 
			url:API_URL,
			//width:300,
			template: function (obj) {
				return '<div class="gauche" ><img src="'+obj.photo+'" height=100%/><div>' // affiche l'image avec comme hauteur celle de la colonne
			} 
		}
	]},
	{
		view:"datatable",
		autoConfig:true,
		url: API_URL
	},
	]
});
