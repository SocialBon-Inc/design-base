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
		'icon-thin-001_compose_write_pencil_new': '&#xe600;',
		'icon-thin-002_write_pencil_new_edit': '&#xe614;',
		'icon-thin-033_bubble_comment_chat_message_add_compose': '&#xe615;',
		'icon-thin-034_bubble_comment_chat_message_like': '&#xe616;',
		'icon-thin-036_bubble_comment_chat_message': '&#xe617;',
		'icon-thin-041_favorite_message_like': '&#xe618;',
		'icon-thin-044_visability_view_watch_eye': '&#xe619;',
		'icon-thin-050_logout_exit_door': '&#xe61a;',
		'icon-thin-120_download_import': '&#xe61b;',
		'icon-thin-198_user_create_add_new': '&#xe61c;',
		'icon-thin-200_user_bubble_chat_new': '&#xe61d;',
		'icon-thin-221_alert_attention_error': '&#xe61e;',
		'icon-thin-227_fail_dangerous_error_unavailable': '&#xe61f;',
		'icon-thin-228_information': '&#xe620;',
		'icon-thin-229_question_support_help': '&#xe621;',
		'icon-thin-233_heart_favorite_like': '&#xe622;',
		'icon-thin-253_x_remove_delete_close_exit': '&#xe623;',
		'icon-thin-257_round_left_arrow_previous': '&#xe624;',
		'icon-thin-258_round_right_arrow_next': '&#xe625;',
		'icon-thin-409_full_screen_window_maximize': '&#xe626;',
		'icon-thin-412_rotate_sync': '&#xe627;',
		'icon-thin-413_rotate_sync_clockwise_recycle': '&#xe628;',
		'icon-thin-435_star_favorite': '&#xe629;',
		'icon-thin-461_power_on_switch_turn': '&#xe62a;',
		'icon-causely-logo': '&#xe62b;',
		'icon-causely-referral': '&#xe601;',
		'icon-causely-share': '&#xe603;',
		'icon-causely-c': '&#xe611;',
		'icon-punk-animal-food': '&#xe612;',
		'icon-punk-school': '&#xe60a;',
		'icon-punk-environment': '&#xe60b;',
		'icon-punk-child': '&#xe60c;',
		'icon-punk-plant': '&#xe60d;',
		'icon-punk-pig': '&#xe60e;',
		'icon-punk-dalek': '&#xe60f;',
		'icon-metrics-impression': '&#xe2d9;',
		'icon-metrics-share': '&#xe604;',
		'icon-double-quote': '&#xe977;',
		'icon-causely-engage': '&#xe602;',
		'icon-punk-veteran': '&#xe613;',
		'icon-punk-animal': '&#xe605;',
		'icon-punk-rainforest': '&#xe606;',
		'icon-punk-food': '&#xe607;',
		'icon-punk-health': '&#xe608;',
		'icon-punk-water': '&#xe609;',
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
