var format_date = webix.Date.dateToStr("%d/%m/%Y");// formmat de la date
var id_aqr = webix.storage.cookie.get("id_aqr");
var api_url_hte = api_url + "aqr/" + id_aqr + "/hte"; //url api
//var api_url_hte = "http://192.168.61.87:3000/hte"; //url api test
var acces_type = webix.storage.cookie.get("acces_type");

webix.ui({ 
	container:"liste_hote",
  rows:[
  //bouton Nouveau
	{cols:[
		{height:1,},
		{view:"button", id:"btn_nouv", autowidth:true, value:"Nouveau hôte",hidden:true,click:affiche_add_window} //ouvre une nouvelle windows (add_hote.js)
	]},
	{
		// liste les hôtes
		view:"datatable",
		id:"hotes_list",
		select:true,
		columns:[
			{
				id:"genre",
				fillspace:true,
				header:[ {text:"Hôtes", colspan:7}, "Genre"],	
			},
			{
				id:"denomination",
				fillspace:true,
				header:[ "", "Dénomination"],	
			},
			{
				id:"surnom",
				fillspace:true,
				header:[ "", "Surnom"],	
			},
			{
				id:"date_introduction",
				fillspace:true,
				header:[ "", "Introduction"],
				format:format_date  //affiche au format jj/mm/aaaa	
			},
			{
				id:"date_retrait",
				fillspace:true,
				header:[ "", "Retrait"],
				format:format_date  //affiche au format jj/mm/aaaa	
			},
			{
				id:"nombre",
				fillspace:true,
				header:[ "", "Nombre"],	
			},
			{
				id:"medias",
				fillspace:true,
				header:[ "", "Média"],	
			}
		],
		url: api_url_hte,
		on:{ 
				onAfterSelect:ouvre_vue_hote,
		}
	}
  ] 
}); 

//ouvre une nouvelle windows (add_aqr.js)
function affiche_add_window(){
				window_ajouter_hote.show();
				var form = $$("hote_form"); //selectionne le formulaire de la windows dans form
				form.clear(); //vide le formulaire
			};

/*function clearForm(){
  $$("aqr_form").clear();
  $$("aqr_prv_list").unselectAll();
};*/

//rajoute un aquarium
function ouvre_vue_hote(){
	webix.message("pas de page hôte");
};
function charge(){
	if (acces_type == "Plq")
	{
		$$("btn_nouv").hide();
	}
	else
	{
		$$("btn_nouv").show();
	}
}
function maj_hte(){
	$("hotes_list").load(api_url_hte);
};



