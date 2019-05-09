exports.install = function() {
    ROUTE('GET     /api/items/                              * --> @ItemList');
    ROUTE('GET     /api/items/category/                     * --> @CategoryList');
    ROUTE('GET     /api/items/location/                     * --> @LocationList');
    ROUTE('GET     /api/items/date/                     	* --> @DateList');
    ROUTE('GET     /api/items/filter/                     	* --> @FilterList');
    ROUTE('POST     /api/items/                         * --> @UpdateItem');
    ROUTE('POST    /api/items/                              * --> @AddItem');
    ROUTE('POST    /api/path/                               * --> @SendPath');

};
