var id_aqr = webix.storage.cookie.get("id_aqr");
var API_URL = "http://192.168.61.87:3000/aqr/" + id_aqr; //url api
		
webix.ui({ 
	container:"info_aqr",
	rows:[
	{cols:[
		{ 
			view:"template", 
			url:API_URL,
			template:"Créé le #date#" 
		},
		{ 
			view:"template",
			url:API_URL,
			template: "<div class='titre_aqr'>#nom#</div>" 
		},
		{ 
			view:"template", 
			url:API_URL,
			template:"Statut : #acces#" 
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
			template: function (obj) {
				return '<img src="'+obj.photo+'" height=100%/>' // affiche l'image avec comme hauteur celle de la colonne
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
