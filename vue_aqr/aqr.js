webix.ui({ 

  rows:[
  {
	  cols:[
			{view:"template", 
			template:"Aquarium privé",
			height:25
			},
			{view:"template",
			template:"Aquarium publiques",
			}
		]
},
    { 
		cols:[
			{view:"list", 
			id:"aqr_prv_list", 
			minWidth:200, 
			select:true, 
			url:"http://192.168.61.87:3000/aqr/", 
			datatype:"json",
			template:"#id#) #nom#	(#acces#), #volume#L #photo# #date#",
			},
			{view:"list", 
			id:"aqr_plq_list", 
			minWidth:200, 
			select:true, 
			url:"http://192.168.61.87:3000/aqr/2", 
			datatype:"json",
			template:"#id#) #nom#	(#acces#), #volume#L #photo# #date#",
			}
		]
}, 
{  
	cols:[
			{
				view:"form", 
				id:"aqr_form", 
				gravity:1,
				// elements == rows, cols can be declared instead 
				elements:[ 
				  { view:"text", name:"nom", id:"inp_nom", label:"Nom de l'aquarium :" }, 
				  { view:"text", name:"acces", id:"inp_acces", label:"Niveau d'accès :" },
				  { view:"text", name:"date", id:"inp_date", label:"Date de création :" },
				  { view:"text", name:"volume", id:"inp_volume", label:"Volume :" },
				  { view:"text", name:"photo", id:"inp_photo", label:"Photo :" }, 
				  { view:"text", name:"id_utl", id:"inp_id_utl", label:"Identifient de l'utilisateur :" },
				  { view:"text", name:"id_aqr", id:"inp_id_aqr", label:"Identifient de l'aquarium :" },
				  {} 
				] 
			},
			{view:"toolbar",
			  id:"top_toolbar",
			  // elements == cols, rows can be declared instead
			  elements:[
				// autowidth is a specific feature of button and label
				{ 
					view:"button", id:"btn_cree", autowidth:true,  value:"Créer"
				},
				{ 
					view:"button", id:"btn_supr", autowidth:true, value:"Supprimer"
				},
				{ 
					view:"button", id:"btn_modif", autowidth:true, value:"modifier"
				},
				{ 
					view:"button", id:"btn_clear", autowidth:true, value:"Clear", click:clearForm
					
				},
				  
			  ]
				
			}
		]
  }




  ] 
}); 
function clearForm(){
  $$("aqr_form").clear();
}
