NEWOPERATION('ItemList', function($) {
    RESTBuilder.make(function(builder) {
       builder.url('http://localhost:50026/RealityService.asmx/ItemList');
       builder.header('Content-Type', 'application/x-www-form-urlencoded');
       builder.post();
       builder.exec(function(err, response) {
         console.log(response);
           if (!err) {
               $.callback({ items: response });
           }
       });
    });
    // $.callback({ items:[{RealId:0,Name:"3 izbovy mezonet v historickej",Category:null,Price:225,Location:"Levice",TimeOfCreation:new Date()}] });

});

NEWOPERATION('CategoryList', function($) {
    RESTBuilder.make(function(builder) {
       builder.url('http://localhost:50026/RealityService.asmx/CategoryList');
       builder.header('Content-Type', 'application/x-www-form-urlencoded');
       builder.urlencoded($.value);
       builder.post();
       builder.exec(function(err, response) {
         console.log(response);
           if (!err) {
               $.callback({ items: response });
           }
       });
    });
    // $.callback({ items:[{RealId:0,Name:"3 izbovy mezonet v budove",Category:null,Price:123,Location:"Levice",TimeOfCreation:"\/Date(1553554800000)\/"}] });
});

NEWOPERATION('LocationList', function($) {
    RESTBuilder.make(function(builder) {
       builder.url('http://localhost:50026/RealityService.asmx/LocationList');
       builder.header('Content-Type', 'application/x-www-form-urlencoded');
       builder.urlencoded($.value);
       builder.post();
       builder.exec(function(err, response) {
         console.log(response);
           if (!err) {
               $.callback({ items: response });
           }
       });
    });
    // $.callback({ items:[{RealId:0,Name:"3 izbovy historickej budove",Category:null,Price:666,Location:"Levice",TimeOfCreation:"\/Date(1553554800000)\/"}] });
});

NEWOPERATION('SendPath', function($) {
    RESTBuilder.make(function(builder) {
       builder.url('http://localhost:50026/RealityService.asmx/FillWithFile');
       builder.header('Content-Type', 'application/x-www-form-urlencoded');
       builder.urlencoded($.value);
       builder.post();
       builder.exec(function(err, response) {
           !err && $.callback(response);
       });
    });
});

NEWOPERATION('UpdateItem', function($) {
    RESTBuilder.make(function(builder) {
       builder.url('http://localhost:50026/RealityService.asmx/EditItem');
       builder.header('Content-Type', 'application/x-www-form-urlencoded');
       builder.urlencoded($.value);
       builder.post();
       builder.exec(function(err, response) {
           !err && $.callback(response);
       });
    });
});

NEWOPERATION('AddItem', function($) {
    RESTBuilder.make(function(builder) {
       builder.url('http://localhost:50026/RealityService.asmx/AddItem');
       builder.header('Content-Type', 'application/x-www-form-urlencoded');
       builder.urlencoded($.value);
       builder.post();
       builder.exec(function(err, response) {
           !err && $.callback(response);
       });
    });
});

NEWOPERATION('DateList', function($) {
    RESTBuilder.make(function(builder) {
       builder.url('http://localhost:50026/RealityService.asmx/GetDateRange');
       builder.header('Content-Type', 'application/x-www-form-urlencoded');
       builder.urlencoded($.value);
       builder.post();
       builder.exec(function(err, response) {
           !err && $.callback(response);
       });
    });
});

NEWOPERATION('FilterList', function($) {
    RESTBuilder.make(function(builder) {
       builder.url('http://localhost:50026/RealityService.asmx/GetFiltered');
       builder.header('Content-Type', 'application/x-www-form-urlencoded');
       builder.urlencoded($.value);
       builder.post();
       builder.exec(function(err, response) {
           !err && $.callback(response);
       });
    });
});
