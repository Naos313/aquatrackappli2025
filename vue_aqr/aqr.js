var format_date = webix.Date.dateToStr("%d/%m/%Y");
var n_private =7;

webix.ui({ 

  rows:[
	{cols:[
		{},
		{view:"button", id:"btn_nouv", autowidth:true, value:"Nouveau",click:affiche_add_window}
	]},
    { 
		cols:[
			{view:"datatable", 
			id:"aqr_prv_list", 
			minWidth:200, 

			select:true, 
			url:function(params){
				return webix.ajax().get("http://192.168.61.87:3000/aqr/", params).then(function(data){
					data = data.json();
					for ( let ligne of data){
						ligne.$height = 60;
					}
					return data;});
			}, 
			save :"json-> http://192.168.61.87:3000/aqr/",
			datatype:"json",
			//template:"#id#) #nom#	(#acces#), #volume#L #photo# #date#",
			columns:[
			{
				id: "nom", fillspace: true, 
				header:[{text:"Mes aquarium", colspan:5}, "Nom" ],
				css:"titleColumn",
			},
			{
				id: "acces", fillspace: true,
				header:[ {text:""}, {text:"Accés"} ] 
			},
			{
				id: "volume",fillspace: true, 
				header:[ {text:""}, {text:"Volumes"} ],
				template: function (obj) {
					return "<span>" + obj.volume + " L</span>"
				}
			},
			{
				id: "photo", 
					fillspace: true, 
					header:[ {text:""}, {text:"Photo"} ],
					width:150,
					template: function (obj) {
						return '<img src="'+obj.photo+'" height=100%/>'
					  }
			},
			{
				id: "date", fillspace: true,
				header:[ {text:""}, {text:"Date"} ],
				format:format_date
			}
			],
			/*on:{
				onAfterSelect:valuesToForm
			}*/
			},
			{view:"datatable", 
			id:"aqr_plq_list", 
			minWidth:200,

			select:true, 
			autoConfig:true,
			url:function(params){
				return webix.ajax().get("http://192.168.61.87:3000/aqr_pub/", params).then(function(data){
					data = data.json();
					for ( let ligne of data){
						ligne.$height = 60;
					}
					return data;});
			}, 
			datatype:"json",
			columns:[
			{
				id: "nom", fillspace: true, 
				header:[{text:"Aquarium publiques", colspan:5}, "Nom" ]
			},
			{
				id: "acces", fillspace: true,
				header:[ {text:""}, {text:"Accés"} ] 
			},
			{
				id: "volume",fillspace: true, 
				header:[ {text:""}, {text:"Volumes"} ],
				template: function (obj) {
					return "<span>" + obj.volume + " L</span>"
				}
			},
			{
				id: "photo", 
				fillspace: true, 
				header:[ {text:""}, {text:"Photo"} ],
				width:150,
				template: function (obj) {
					return '<img src="'+obj.photo+'" height=100%/>'
				  }
			},
			{
				id: "date", fillspace: true,
				header:[ {text:""}, {text:"Date"} ],
				format:format_date  
			}
			],
			}
		]
}, 
/*{  
	cols:[
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
				  { view:"datepicker",format:"%d/%m/%Y", name:"date", id:"inp_date", label:"Date de création :" },
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
					{ 
						view:"button", id:"btn_modif", autowidth:true, height:80, value:"sauvegarder", click:modifier
					},
					{ 
						view:"button", id:"btn_supr", height:80, value:"Supprimer", click:supprimer
					},
					{ 
						view:"button", id:"btn_clear", height:80, value:"Effacer", click:clearForm
						
					},
				]}
				  
			  ]
				
			}
		]
  }*/




  ] 
}); 

function affiche_add_window(){
				window_ajouter.show();
			};

/*function clearForm(){
  $$("aqr_form").clear();
  $$("aqr_prv_list").unselectAll();
};*/
function modifier(){
	var data= $$("aqr_prv_list");
	
	var form = $$("aqr_form");
	var form_data = form.getValues();
	if (!form_data.nom || !form_data.acces || !form_data.date || !form_data.volume){
		webix.message("Le formulaire n'est pas rempli");
		return;
	}
	//webix.message(item.nom + " a été ajouté");
	data.add(form_data);
	webix.message("L'aquarium " + form_data.nom + " a été ajouté"); 
	window_ajouter.hide();
	form.clear();
};
/*function supprimer(){
	var list = $$("aqr_prv_list");
	var id_list = list.getSelectedId();
	if (id_list){
		webix.confirm("Voulez vous supprimer " , "confirm-warning").then(function(){
			list.remove(id_list);
		});
	}
	clearForm();
};

function valuesToForm(id){
  var values = $$("aqr_prv_list").getItem(id);
  $$("aqr_form").setValues(values)

};*/

	//ajouter/modifier
/*function modifier(){
	var data= $$("aqr_prv_list");
	var sel = data.getSelectedId(); 
	var form = $$("aqr_form");
	var form_data = form.getValues();
	if (!form_data.nom || !form_data.acces || !form_data.date || !form_data.volume){
		webix.message("Le formulaire n'est pas rempli");
		window_ajouter.hide();
		return;
	}
    if (!sel){
		webix.message(item.nom + " a été ajouté");
		data.add(form_data);
    } else{
	var item = data.getItem(sel);
    
    item = form_data;             // setting the new value for the item 
    data.updateItem(sel, item);     // the dataset is updated! 
    webix.message(item.nom + " a été modifié"); 
	};
	window_ajouter.hide();
	form.clear();
};*/

