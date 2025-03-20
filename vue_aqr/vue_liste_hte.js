var format_date = webix.Date.dateToStr("%d/%m/%Y");// formmat de la date
var api_url_hte = "http://192.168.61.87:3000/hte"; //url api
webix.ui({ 
	container:"liste_hote",
  rows:[
  //bouton Nouveau
	{cols:[
		{},
		{view:"button", id:"btn_nouv", autowidth:true, value:"Nouveau",click:affiche_add_window} //ouvre une nouvelle windows (add_hote.js(pas encore))
	]},
	{
		// liste les hôtes
		view:"datatable",
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
			},
			{
				id:"date_retrait",
				fillspace:true,
				header:[ "", "Retrait"],	
			},
			{
				id:"nombre",
				fillspace:true,
				header:[ "", "Nombre"],	
			},
			{
				id:"media",
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
				webix.message("pas de window");
			};

/*function clearForm(){
  $$("aqr_form").clear();
  $$("aqr_prv_list").unselectAll();
};*/

//rajoute un aquarium
function ouvre_vue_hote(){
	webix.message("pas de page hôte");
};




