var format_date = webix.Date.dateToStr("%d/%m/%Y");// formmat de la date
var api_url_aqr_pbl = api_url + "aqr/pub"; //url api
webix.ui({
	container:"liste_aqr_pbl",
	view:"datatable",
	id:"aqr_pbl_list",
	url:api_url_aqr_pbl,
	rowHeight:60,
	select:true,
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
			id: "media_id", 
			fillspace: true, 
			header:[ {text:""}, {text:"Photo"} ], //espace pour le nom de la table + nom de la colonne Photo
			width:150,
			template: function (obj) {
				if (obj.media_id == null){
					return '<img src="/img/aquarium.png" height=100%/>' // affiche l'image avec comme hauteur celle de la colonne
				}
				return '<img src="http://192.168.61.31/med/'+ obj.media_id +'/fch" height=100%/>' // affiche l'image avec comme hauteur celle de la colonne
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
});

function ouvre_vue_aqr_public(id){
	var list = $$("aqr_pbl_list");
	var data = list.getItem(id);
	webix.storage.cookie.put("id_aqr",data.id,";path=/");
	webix.storage.cookie.put("user_id",data.user_id,";path=/");
	webix.storage.cookie.put("acces_type","Plq",";path=/");
	webix.storage.cookie.put("type_utl","admin",";path=/");
	open("/vue_aqr/vue_aqr.html", id_aqr = "1");
};
function unselect_list(){
	$$("aqr_pbl_list").unselectAll();
}
