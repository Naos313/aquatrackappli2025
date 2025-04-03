var format_date = webix.Date.dateToStr("%d/%m/%Y");// formmat de la date
var id_aqr = webix.storage.cookie.get("id_aqr");
var acces_type = webix.storage.cookie.get("acces_type");
var user_id = webix.storage.cookie.get("user_id");
var API_URL = "http://192.168.61.87:3000/aqr/" + id_aqr; //url api
var acces_ou_utl = "" ;
var api_changente = API_URL;

if (acces_type == "Plq")
{
	acces_ou_utl = "<div class='gauche'>Utilisateur : #identifiant#</div>";
	api_changente = "http://192.168.61.87:3000/utl/" + user_id;
}
else
{
	acces_ou_utl = "<div class='gauche'>Statut : #acces#</div>";
	api_changente = API_URL;
}

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
			url:api_changente,
			template: acces_ou_utl 
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
	]
});

