var window_ajouter = webix.ui({
					view:"window",
					head:"Nouvel Aquarium",
					width: 1000,
					position:"center",
					close:true,     
					body:{ cols:[
			{
				view:"form", 
				id:"aqr_form", 
				gravity:1,
				// elements == rows, cols can be declared instead 
				elements:[ 
				  { view:"text", name:"nom", id:"inp_nom", label:"Nom de l'aquarium :" }, 
				  {view:"combo", 
					  name:"acces", 
					  id:"inp_acces", 
					  label:"Niveau d'accès :",
					  value:"privé", 
					  options:[
						{id:"privé", value:"privé"},
						{id:"publique", value:"publique"}
					] 
					},
				  { view:"datepicker",format:"%d/%m/%Y", name:"date", id:"inp_date", value: new Date(), label:"Date de création :" },
				  { view:"text", name:"volume", id:"inp_volume", label:"Volume :" },
				  { view:"text", name:"photo", id:"inp_photo", label:"Photo :" }, 
				  { view:"text", name:"utl", id:"inp_id_utl", label:"Identifient de l'utilisateur :" },
				  {} 
				] 
			},
			{view:"toolbar",
			  id:"bouton",
			  
			  // elements == cols, rows can be declared instead
			  elements:[
				// autowidth is a specific feature of button and label
				{ margin:5, rows:[
					{},
					{ 
						view:"button", id:"btn_modif", autowidth:true, height:80, value:"sauvegarder", click:modifier
					},
				]}
				  
			  ]
				
			}
		]}
				});
