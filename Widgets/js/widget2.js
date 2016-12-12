var url = "../sampledata/orders.xml";



// prepare the data

var source =

    {

        datatype: "xml",

        datafields: [

            { name: 'ShipName', map: 'm\\:properties>d\\:ShipName' },

            { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity' },

            { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry' }

        ],

        root: "entry",

        record: "content",

        id: 'm\\:properties>d\\:OrderID',

        url: url,

        pager: function(pagenum, pagesize, oldpagenum) {

            // callback called when a page or page size is changed.

        }

    };

var dataAdapter = new $.jqx.dataAdapter(source);



$("#jqxgrid").jqxGrid(

    {

        width: 850,

        source: source,

        selectionmode: 'multiplerowsextended',

        sortable: true,

        pageable: true,

        autoheight: true,

        autoloadstate: false,

        autosavestate: false,

        columnsresize: true,

        columnsreorder: true,

        showfilterrow: true,

        filterable: true,

        columns: [

            { text: 'Ship Name', filtercondition: 'starts_with', datafield: 'ShipName', width: 250 },

            { text: 'Ship City', datafield: 'ShipCity', width: 200 },

            { text: 'Ship Country', datafield: 'ShipCountry' }

        ]

    });



$("#saveState").jqxButton({ theme: theme });

$("#loadState").jqxButton({ theme: theme });

var state = null;

$("#saveState").click(function() {

    // save the current state of jqxGrid.

    state = $("#jqxgrid").jqxGrid('savestate');

})

;

$("#loadState").click(function() {

    // load the Grid's state.

    if (state) {

        $("#jqxgrid").jqxGrid('loadstate', state);

    } else {

        $("#jqxgrid").jqxGrid('loadstate');

    }

});