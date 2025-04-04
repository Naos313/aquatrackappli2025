var id_aqr = webix.storage.cookie.get("id_aqr");
var api_url_typ = "http://192.168.61.31/typ";
var api_url_ppc = "http://192.168.61.31/aqr/" + id_aqr + "/ppc/last?type_id=";

webix.ui({
	container:"info_ppc",
	cols:[
		{
		
		},
		{
			view:"datatable",
			autoConfig:true,
			url:"http://192.168.61.31/typ"
		}
	]
});
function test(typ_id){
	return {
		view:"list", 
		id:"donnees_ppc_" + typ_id, 
		url:api_url_ppc + typ_id, 
		template:"#type_nom#: #valeur# #type_unite#" 
	};
}
/*function data_loader(nombre){
	var contenue = {cols:[;
	for (let i = 0; i < nombre; i++) {
		contenue = contenue + test(1) +,;
	}
	contenue = contenue + ]};
	return contenue;
}*/
