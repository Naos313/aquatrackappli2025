var btn_retour = false;
var autre_bouton = false;
var largeur = 400;

var acces_type = webix.storage.cookie.get("acces_type");

if(page == "liste"){
	btn_retour = true;
	autre_bouton = true;
}
if(acces_type == "Plq"){
	autre_bouton = true
};

webix.ui({
	container:"Bandeau",
	cols:[
		{
			width:5,
		},
		{
			view:"button", 
			id:"btn_liste_aqr", 
			width:largeur,
			height:55, 
			value:"Retour",
			hidden:btn_retour,
			click:ouvre_vue_liste_aqr,
		},
		{},
		{
			view:"button", 
			id:"btn_obs", 
			width:largeur,
			height:55, 
			value:"Observation",
			hidden:autre_bouton,
		},
		{},
		{
			view:"button", 
			id:"btn_ppc", 
			width:largeur,
			height:55, 
			value:"Paramètre physico-chimique",
			hidden:autre_bouton,
		},
		{
		},
		{
			view:"button", 
			id:"btn_cap", 
			width:largeur,
			height:55, 
			value:"Capteurs",
			hidden:autre_bouton,
		},
		{},
		{
			view:"button", 
			id:"btn_param_utl", 
			width:55,
			height:55,
			type: "image", image:"/img/param_icon.png"
		},
		{
			width:5,
		},
	]
});

function ouvre_vue_liste_aqr(){
	open("aqr.html", id_aqr = "1");
};
