/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'slurp\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-dalek': '&#xe632;',
		'icon-skull': '&#xe630;',
		'icon-one': '&#xe60e;',
		'icon-two': '&#xe60f;',
		'icon-three': '&#xe610;',
		'icon-four': '&#xe611;',
		'icon-five': '&#xe612;',
		'icon-six': '&#xe613;',
		'icon-seven': '&#xe614;',
		'icon-eight': '&#xe615;',
		'icon-nine': '&#xe616;',
		'icon-zero': '&#xe617;',
		'icon-direction': '&#xe601;',
		'icon-stack': '&#xe62f;',
		'icon-bomb': '&#xe640;',
		'icon-edit': '&#xe61c;',
		'icon-pig': '&#xe60c;',
		'icon-heart': '&#xe624;',
		'icon-shipping': '&#xe63d;',
		'icon-office': '&#xe619;',
		'icon-folder': '&#xe60d;',
		'icon-phone': '&#xe639;',
		'icon-location': '&#xe600;',
		'icon-clock': '&#xe625;',
		'icon-download': '&#xe635;',
		'icon-user': '&#xe61a;',
		'icon-users': '&#xe61b;',
		'icon-spinner': '&#xe63e;',
		'icon-search': '&#xe633;',
		'icon-key': '&#xe63a;',
		'icon-gear': '&#xe63b;',
		'icon-fire': '&#xe63f;',
		'icon-lab': '&#xe626;',
		'icon-close': '&#xe604;',
		'icon-check': '&#xe605;',
		'icon-minus': '&#xe606;',
		'icon-plus': '&#xe607;',
		'icon-exit': '&#xe62e;',
		'icon-refresh': '&#xe631;',
		'icon-shuffle': '&#xe61d;',
		'icon-arrow-up-alt': '&#xe638;',
		'icon-arrow-right-alt': '&#xe636;',
		'icon-arrow-down-alt': '&#xe63c;',
		'icon-arrow-left-alt': '&#xe637;',
		'icon-funnel': '&#xe61e;',
		'icon-share': '&#xe602;',
		'icon-earth': '&#xe61f;',
		'icon-graph': '&#xe618;',
		'icon-circle-minus': '&#xe627;',
		'icon-circle-plus': '&#xe628;',
		'icon-circle-close': '&#xe629;',
		'icon-erase': '&#xe62a;',
		'icon-blocked': '&#xe62b;',
		'icon-info': '&#xe62c;',
		'icon-help': '&#xe603;',
		'icon-warning': '&#xe62d;',
		'icon-trash': '&#xe634;',
		'icon-arrow-left': '&#xe620;',
		'icon-arrow-down': '&#xe621;',
		'icon-arrow-up': '&#xe622;',
		'icon-arrow-right': '&#xe623;',
		'icon-twitter': '&#xe608;',
		'icon-facebook': '&#xe609;',
		'icon-gplus': '&#xe60a;',
		'icon-pinterest': '&#xe60b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
