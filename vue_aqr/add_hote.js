// met la vue window dans window_ajouter_hote
var window_ajouter_hote = webix.ui({
	view:"window",
	head:"Nouvel hôte",// nom affiché de la windows
	width: 1000, // met la largeur de la window à 1000
	position:"center", //affiche la window au centre de la page
	close:true,  //affiche une croix pour fermer
	//contenue de la window   
	body:{
		cols:[
			{
				view:"form", 
				id:"hote_form", 
				gravity:1,
				// elements == rows, cols can be declared instead 
				elements:[
					{view:"combo", 
						name:"genre", 
						id:"inp_genre", 
						label:"Genre :",
						options:[
							{id:"Poisson", value:"Poisson"},
							{id:"Plante", value:"Plante"},
							{id:"Invertébré", value:"Invertébré"}
						],
						labelWidth:160 // labelwidth est la largeur du libélé
					},
					{ view:"text", name:"denomination", id:"inp_denomination", label:"Dénomination :", labelWidth:160 },
					{ view:"text", name:"surnom", id:"inp_surnom", label:"Surnom :", labelWidth:160 },
					{ view:"datepicker",format:"%d/%m/%Y", name:"date_introduction", id:"inp_date_intro", value: new Date(), label:"Date d'introduction :", labelWidth:160 }, //value affiche a la date du jour 
					{ view:"datepicker",format:"%d/%m/%Y", name:"date_retrait", id:"inp_date_retrait", label:"Date de retait :", labelWidth:160 },
					{ view:"text", name:"nombre", id:"inp_nombre", label:"Nombre :", value: "1", labelWidth:160 },
					{ view:"text", name:"media", id:"inp_media", label:"Média :", labelWidth:160 }, 
					{} 
				]
			},
			{	
				margin:5,
				rows:[
					{},
					{view:"button", id:"btn_add", autowidth:true, height:80, value:"Sauvegarder", }
				]
			}
		]
	}
});


