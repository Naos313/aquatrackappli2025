var id_aqr = webix.storage.cookie.get("id_aqr");
var API_URL = "http://192.168.61.87:3000/aqr/" + id_aqr; //url api
webix.ui({ 
	rows:[
	{cols:[
      { view:"template", template:"Template as row 2, column 1" },
      { view:"template", template:"Template as row 2, column 2" },
      { view:"template", template:"Template as row 2, column 2" }
    ]},
    {
		view:"datatable",
		autoConfig:true,
		url: API_URL
	},
    {
		view:"datatable",
		autoConfig:true,
		url:"http://192.168.61.87:3000/hte"
	}
  ]
});
