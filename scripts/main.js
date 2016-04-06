"use strict";

function onYouTubeIframeAPIReady() {
	$("#lang-toggle-english").hasClass("lang-active") ? player = new YT.Player("player", {
		height: "390",
		width: "640",
		videoId: "SdlVbBllr9I",
		playerVars: {
			showinfo: 0,
			loop: 1,
			rel: 0,
			hl: "en"
		},
		events: {
			onReady: onPlayerReady,
			onStateChange: onPlayerStateChange
		}
	}) : $("#lang-toggle-spanish").hasClass("lang-active") && (player = new YT.Player("player", {
		height: "390",
		width: "640",
		videoId: "Fho7-YcFZ6o",
		playerVars: {
			listType: "playlist",
			list: "PLkepuznYQFHoAql6nyn9O1K3QZe4Oty1l",
			rel: 0,
			hl: "es"
		},
		events: {
			onReady: onPlayerReady,
			onStateChange: onPlayerStateChange
		}
	}))
}

function onPlayerReady(a) {
	var b = player.getVideoData(),
		c = b.title,
		d = player.f.lang;
	c += "es" === d ? ": reproductor de video" : ": video player", $("#usa-feature-video-wrapper").addClass("video-ready"), $(".usa-feature-video-player").fadeIn(), $("#player").attr("title", c)
}

function videoEnded() {
	done === !0 && $("#feature-video-play-btn").fadeIn()
}

function onPlayerStateChange(a) {
	var b = player.getVideoData();
	b.video_id; - 1 === a.data, $("#usa-feature-video-wrapper").addClass("active"), done = !1, $("#player").attr("tabindex", 0), 0 === a.data && (done = !0, setTimeout(function() {
		done === !0 && ($("#usa-feature-video-wrapper").removeClass("active"), $("#player").attr("tabindex", -1), $("#feature-video-play-btn").fadeIn())
	}, 200))
}

function stopVideo() {
	player.stopVideo()
}
$(document).ready(function() {
	function a(a) {
		var b = a;
		$.ajax({
			url: "translation.xml",
			success: function(a) {
				$(a).find("translation").each(function() {
					var a = $(this).attr("id"),
						c = $(this).find(b).text();
					$("." + a).html(c)
				})
			}
		})
	}

	function b() {
		$(".usa-video-hero-video").get(0).paused ? ($(".usa-video-hero-video").get(0).play(), c.removeClass("fa-play"), c.addClass("fa-pause")) : ($(".usa-video-hero-video").get(0).pause(), c.removeClass("fa-pause"), c.addClass("fa-play"))
	}
	var c = $(".usa-video-control"),
		d = $("html").attr("lang");
	$(function() {
		var a = "",
			b = "",
			c = $("#usa-video-hero-container");
		a = "es" === d ? "Video de escenas de la vida en Estados Unidos: Un hombre paseando con su perro por la noche; un autobús escolar pasando por la calle de un pueblo; un hombre y una mujer guardando su equipaje en un vehículo antes de ir de viaje; un tractor arando un campo de trigo; una madre leyéndole a su hijo; gente caminando por una ciudad." : "Video montage of scenes from American life: A man walking his dog at night; a school bus driving through town; a man and woman packing their car for a trip; a tractor plowing a field of wheat; a mother reading to her young son; people walking down a crowded city street.", b = '<video class="usa-video-hero-video hidden-sm fade" id="usa-video-hero-video" preload="none" autoplay loop="loop" muted aria-label="' + a + '" tabindex="-1"><source src="video/usagov_hero_loop_2_480p.mp4" type="video/mp4"></video>', bowser.mobile || bowser.tablet || (c.append(b), setTimeout(function() {
			$("#usa-video-hero-video").addClass("in")
		}, 200))
	}), $(".usa-video-control").keypress(function(a) {
		var c = a.keyCode ? a.keyCode : a.which;
		13 === c && b()
	}), c.on("click", b), $(function() {
		$("#spanish").hasClass("lang-active") && (a("es"), $(document).trigger("translate-esp"))
	}), $("#english").on("click", function() {
		$("html").attr("lang", "en"), $("#english").addClass("lang-active"), $("#spanish").removeClass("lang-active"), a("en"), $(document).trigger("translate-eng")
	}), $("#spanish").on("click", function() {
		$("html").attr("lang", "es"), $("#spanish").addClass("lang-active"), $("#english").removeClass("lang-active"), a("es"), $(document).trigger("translate-esp")
	})
}), $(function() {
	$("a[href*=#]:not([href=#])").click(function() {
		if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
			var a = $(this.hash);
			if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
				scrollTop: a.offset().top
			}, 800), !1
		}
	})
});
var player, done = !1;
$(function() {
	$(document).on("ready", function() {
		var a = $("#feature-video-play-btn");
		a.click(function(a) {
			player.playVideo(), $(this).fadeOut()
		}), a.keypress(function(a) {
			13 === a.which && $(this).click()
		})
	})
}), $(document).on("translate-eng", function() {
	player.cueVideoById("SdlVbBllr9I")
}), $(document).on("translate-esp", function() {
	player.cuePlaylist({
		list: "PLkepuznYQFHoAql6nyn9O1K3QZe4Oty1l",
		listType: "playlist"
	})
});
