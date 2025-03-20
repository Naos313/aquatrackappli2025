// met la vue window dans window_ajouter
var window_ajouter = webix.ui({
					view:"window",
					head:"Nouvel Aquarium",// nom affiché de la windows
					width: 1000, // met la largeur de la window à 1000
					position:"center", //affiche la window au centre de la page
					close:true,  //affiche une croix pour fermer
					//contenue de la window   
					body:{ cols:[
			{ //partie formulaire
				view:"form", 
				id:"aqr_form", 
				gravity:1,
				// elements == rows, cols can be declared instead 
				elements:[
					{ view:"text", name:"nom", id:"inp_nom", label:"Nom de l'aquarium :", labelWidth:160 }, // labelwidth est la largeur du libélé
					{view:"combo", 
						name:"acces", 
						id:"inp_acces", 
						label:"Niveau d'accès :",
						value:"privé", // valeur par défaut
						options:[
							{id:"privé", value:"privé"},
							{id:"publique", value:"publique"}
						],
						labelWidth:160 // labelwidth est la largeur du libélé
					},
					{ view:"datepicker",format:"%d/%m/%Y", name:"date", id:"inp_date", value: new Date(), label:"Date de création :", labelWidth:160 }, //value affiche a la date du jour 
					{ view:"text", name:"volume", id:"inp_volume", label:"Volume :", labelWidth:160 },
					{ view:"text", name:"photo", id:"inp_photo", label:"Photo :", labelWidth:160 }, 
					{} 
				] 
			},
			// bouton sauvegarder
			{view:"toolbar",
			  id:"bouton",
			  
			  // elements == cols, rows can be declared instead
			  elements:[
				// autowidth is a specific feature of button and label
				{ margin:5, rows:[
					{},//affiche le bouton en bas
					{ 
						view:"button", id:"btn_modif", autowidth:true, height:80, value:"sauvegarder", click:modifier // appel la fonction modifier
					},
				]}
				  
			  ]
				
			}
		]}
				});
