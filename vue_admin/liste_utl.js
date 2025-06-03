var api_url_utl_list = "http://192.168.61.209:3000/utl/"; //url api
var page = "liste";

webix.ui({
	container:"liste_admin",
	
	rows:[
		{
			cols:[
				{},
				{ view:"button", id:"btn_suppr", autowidth:true, value:"Supprimer l'utilisateur", click:supprimer_utl}
			]
		},
		{
			view:"datatable",
			id:"utl_list",
			url:api_url_utl_list,
			select:true,
			columns:[
				{
					id:"niveau_dacces",
					fillspace:true,
					header:[ {text:"Utilisateur", colspan:2}, "Niveau d'accés"],
				},
				{
					id:"identifiant",
					fillspace:true,
					header:[ "", "Identifiant"],
				}
			]
		}
	]
});

function supprimer_utl(){
	var list = $$("utl_list");
	var item_id = list.getSelectedId();
	var values = $$("utl_list").getItem(item_id);
	if (item_id){
		webix.confirm("Supprimer " + values.identifiant + " ?", "confirm-warning").then(function(){
			webix.ajax().del(api_url_utl_list + values.id);
			list.remove(item_id);
		});
	}
}
