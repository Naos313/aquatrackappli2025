var id_aqr = webix.storage.cookie.get("id_aqr");
var api_url_typ = api_url + "typ";
var api_url_ppc = api_url + "aqr/" + id_aqr + "/ppc/last?type_id=";

webix.ui({
	container:"info_ppc",

	view:"list",
	id:"ppc_list",
	template:"#type_nom#: #valeur# #type_unite# du #date#",
	
	
});

function donnees_ppc(){
	webix.ajax().get(api_url_typ).then(function(data_typ_json){
		data_typ = data_typ_json.json();
		let test;
		
		for ( let ligne_typ of data_typ){
			test = webix.ajax().get(api_url_ppc + ligne_typ.id).then(function(data_ppc_json){
			//test = webix.ajax().get(api_url_ppc + "1").then(function(data_ppc_json){
				data_ppc = data_ppc_json.json();
				
				//data_ppc.id = ligne_typ.id;
				$$("ppc_list").add(data_ppc);
			});
		}
		
	});
}
/*
url:function(params){
	return webix.ajax().get(API_URL, params).then(function(data){
		data = data.json();
		//met la taille des ligne à 60
		for ( let ligne of data){
			ligne.$height = 60;
		}
		return data;});
}, 
*/
