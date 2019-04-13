exports.install = function() {
    ROUTE('GET     /api/items/                              * --> @ItemList');
    ROUTE('GET     /api/items/category/                     * --> @CategoryList');
    ROUTE('GET     /api/items/location/                     * --> @LocationList');
    ROUTE('PUT     /api/items/{id}/                         * --> @UpdateItem');
    ROUTE('POST    /api/items/                              * --> @AddItem');
    ROUTE('POST    /api/path/                               * --> @SendPath');

};
