/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

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
		'icon-causely-14-marketingsite-flowchart-icons-03': '&#xe601;',
		'icon-causelyvectors-06': '&#xe602;',
		'icon-causely-14-marketingsite-flowchart-icons-01': '&#xe603;',
		'icon-causely-14-marketingsite-flowchart-icons-04': '&#xe611;',
		'icon-causelyvectors-05': '&#xe62c;',
		'icon-metrics-heart': '&#xe024;',
		'icon-metrics-referral': '&#xe610;',
		'icon-paper-clip': '&#xe001;',
		'icon-mail': '&#xe002;',
		'icon-lock': '&#xe007;',
		'icon-signal': '&#xe011;',
		'icon-cog': '&#xe023;',
		'icon-search': '&#xe036;',
		'icon-arrow-back': '&#xe039;',
		'icon-repeat': '&#xe058;',
		'icon-location-2': '&#xe071;',
		'icon-map': '&#xe072;',
		'icon-head': '&#xe074;',
		'icon-briefcase': '&#xe075;',
		'icon-speech-bubble': '&#xe076;',
		'icon-globe': '&#xe078;',
		'icon-box': '&#xe079;',
		'icon-power': '&#xe086;',
		'icon-star': '&#xe093;',
		'icon-arrow-left': '&#xe094;',
		'icon-arrow-right': '&#xe095;',
		'icon-arrow-up': '&#xe096;',
		'icon-arrow-down': '&#xe097;',
		'icon-loader': '&#xe105;',
		'icon-ban': '&#xe107;',
		'icon-trash': '&#xe109;',
		'icon-plus': '&#xe114;',
		'icon-minus': '&#xe115;',
		'icon-check': '&#xe116;',
		'icon-cross': '&#xe117;',
		'icon-menu': '&#xe120;',
		'icon-help2': '&#xe127;',
		'icon-open': '&#xe128;',
		'icon-ellipsis': '&#xe129;',
		'icon-picon-edit-page': '&#xe600;',
		'icon-picon-edit-pencil': '&#xe614;',
		'icon-thin-033_bubble_comment_chat_message_add_compose': '&#xe615;',
		'icon-picon-bubble-heart': '&#xe616;',
		'icon-picon-bubble-chat': '&#xe617;',
		'icon-picon-favorite': '&#xe618;',
		'icon-picon-eye': '&#xe619;',
		'icon-picon-logout': '&#xe61a;',
		'icon-picon-download': '&#xe61b;',
		'icon-thin-193_user_profile_avatar_male': '&#xe633;',
		'icon-thin-194_user_profile_avatar_female_woman': '&#xe634;',
		'icon-picon-newuser': '&#xe61c;',
		'icon-picon-round-user': '&#xe61d;',
		'icon-thin-221_alert_attention_error': '&#xe61e;',
		'icon-picon-round-fail': '&#xe61f;',
		'icon-picon-round-info': '&#xe620;',
		'icon-picon-round-question': '&#xe621;',
		'icon-picon-heart': '&#xe622;',
		'icon-thin-243_like_thumbs_up_vote': '&#xe632;',
		'icon-picon-round-close': '&#xe623;',
		'icon-picon-round-left': '&#xe624;',
		'icon-picon-round-right': '&#xe625;',
		'icon-picon-round-fullscreen': '&#xe626;',
		'icon-picon-rotate-2x': '&#xe627;',
		'icon-picon-rotate-3x': '&#xe628;',
		'icon-picon-round-star': '&#xe629;',
		'icon-picon-power': '&#xe62a;',
		'icon-causely-logo': '&#xe62b;',
		'icon-causely-doors-long-tall-cool-one-01': '&#xe635;',
		'icon-causely-doors-short-round-012': '&#xe62d;',
		'icon-causely-doors-short-round-01': '&#xe636;',
		'icon-angels-sweat': '&#xe630;',
		'icon-angels-checkin': '&#xe62f;',
		'icon-reach-pin': '&#xe638;',
		'icon-angels-highcon': '&#xe639;',
		'icon-sweatangelsvariantcopy': '&#xe63a;',
		'icon-punk-education': '&#xe63b;',
		'icon-punk-dog': '&#xe63c;',
		'icon-punk-house': '&#xe63d;',
		'icon-punk-animal-food': '&#xe612;',
		'icon-punk-school': '&#xe60a;',
		'icon-punk-environment': '&#xe60b;',
		'icon-punk-child': '&#xe60c;',
		'icon-punk-plant': '&#xe60d;',
		'icon-punk-pig': '&#xe60e;',
		'icon-dogfooding': '&#xe631;',
		'icon-punk-dalek': '&#xe60f;',
		'icon-metrics-impression': '&#xe2d9;',
		'icon-metrics-share': '&#xe604;',
		'icon-double-quote': '&#xe977;',
		'icon-quotes-right': '&#xe978;',
		'icon-punk-food': '&#xe607;',
		'icon-punk-veteran': '&#xe613;',
		'icon-punk-animal': '&#xe605;',
		'icon-punk-rainforest': '&#xe606;',
		'icon-punk-health': '&#xe608;',
		'icon-punk-water': '&#xe609;',
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
