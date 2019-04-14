ON('resize', function() {

});

ON('ready', function() {
	$(window).on('resize', function() {
		setTimeout2('resize', function() {
			EMIT('resize');
		}, 100);
	});
	setTimeout(EXEC2('#resize'), 50);
});

function mainmenu(el) {
	$('.mainmenu').tclass('mainmenu-visible');
}

ON('location', function() {
	$('.mainmenu').rclass('mainmenu-visible');
});
