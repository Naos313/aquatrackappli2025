var id_aqr = webix.storage.cookie.get("id_aqr");
var api_url_typ = "http://192.168.61.31/typ";
var api_url_ppc = "http://192.168.61.31/aqr/" + id_aqr + "/ppc/last?type_id=";

webix.ui({
	container:"info_ppc",

	view:"list",
	id:"ppc_list",
	template:"cc #valeur#",
	url:donnees_ppc()
	
});

function donnees_ppc(){
	webix.ajax().get(api_url_typ).then(function(data){
		data = data.json();
		let test;
		
		for ( let ligne of data){
			test = webix.ajax().get(api_url_ppc + ligne.id);
			$$("ppc_list").add(test);
		}
		return data;
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
