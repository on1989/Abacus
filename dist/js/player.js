jQuery(function ($) {
	'use strict'
	var supportsAudio = !!document.createElement('audio').canPlayType;
	if (supportsAudio) {
		// initialize plyr
		var player = new Plyr('#audio1', {
			controls: [
				'restart',
				'play',
				'progress',
				'current-time',
				'duration',
				'mute',
				'volume',
				'download'
			]
		});
		// initialize playlist and controls
		var index = 0,
			playing = false,
			mediaPath = 'https://archive.org/download/mythium/',
			extension = '',
			tracks = [{
				"track": 1,
				"name": "All This Is - Joe L.'s Studio",
				"duration": "2:46",
				"file": "JLS_ATI",
				"img":"../img/abacus.jpg"
			}, {
				"track": 2,
				"name": "The Forsaken - Broadwing Studio (Final Mix)",
				"duration": "8:30",
				"file": "BS_TF",
				"img":"../img/blog-1.jpg"
			}, {
				"track": 3,
				"name": "All The King's Men - Broadwing Studio (Final Mix)",
				"duration": "5:01",
				"file": "BS_ATKM",
				"img":"../img/abacus.jpg"
			}, {
				"track": 4,
				"name": "The Forsaken - Broadwing Studio (First Mix)",
				"duration": "8:31",
				"file": "BSFM_TF",
				"img":"../img/abacus.jpg"
			}, {
				"track": 5,
				"name": "All The King's Men - Broadwing Studio (First Mix)",
				"duration": "5:05",
				"file": "BSFM_ATKM",
				"img":"../img/abacus.jpg"
			}, {
				"track": 6,
				"name": "All This Is - Alternate Cuts",
				"duration": "2:48",
				"file": "AC_ATI",
				"img":"../img/abacus.jpg"
			}, {
				"track": 7,
				"name": "All The King's Men (Take 1) - Alternate Cuts",
				"duration": "5:44",
				"file": "AC_ATKMTake_1",
				"img":"../img/abacus.jpg"
			}, {
				"track": 8,
				"name": "All The King's Men (Take 2) - Alternate Cuts",
				"duration": "5:26",
				"file": "AC_ATKMTake_2",
				"img":"../img/abacus.jpg"
			}, {
				"track": 9,
				"name": "Magus - Alternate Cuts",
				"duration": "5:46",
				"file": "AC_M",
				"img":"../img/abacus.jpg"
			}, {
				"track": 10,
				"name": "The State Of Wearing Address (fucked up) - Alternate Cuts",
				"duration": "5:25",
				"file": "AC_TSOWAfucked_up",
				"img":"../img/abacus.jpg"
			}, {
				"track": 11,
				"name": "Magus - Popeye's (New Years '04 - '05)",
				"duration": "5:53",
				"file": "PNY04-05_M",
				"img":"../img/abacus.jpg"
			}, {
				"track": 12,
				"name": "On The Waterfront - Popeye's (New Years '04 - '05)",
				"duration": "4:40",
				"file": "PNY04-05_OTW",
				"img":"../img/abacus.jpg"
			}, {
				"track": 13,
				"name": "Trance - Popeye's (New Years '04 - '05)",
				"duration": "13:15",
				"file": "PNY04-05_T",
				"img":"../img/abacus.jpg"
			}, {
				"track": 14,
				"name": "The Forsaken - Popeye's (New Years '04 - '05)",
				"duration": "8:12",
				"file": "PNY04-05_TF",
				"img":"../img/abacus.jpg"
			}, {
				"track": 15,
				"name": "The State Of Wearing Address - Popeye's (New Years '04 - '05)",
				"duration": "7:02",
				"file": "PNY04-05_TSOWA",
				"img":"../img/abacus.jpg"
			}, {
				"track": 16,
				"name": "Magus - Popeye's (Valentine's Day '05)",
				"duration": "5:43",
				"file": "PVD_M",
				"img":"../img/abacus.jpg"
			}, {
				"track": 17,
				"name": "Trance - Popeye's (Valentine's Day '05)",
				"duration": "10:45",
				"file": "PVD_T",
				"img":"../img/abacus.jpg"
			}, {
				"track": 18,
				"name": "The State Of Wearing Address - Popeye's (Valentine's Day '05)",
				"duration": "5:36",
				"file": "PVD_TSOWA",
				"img":"../img/abacus.jpg"
			}, {
				"track": 19,
				"name": "All This Is - Smith St. Basement (01/08/04)",
				"duration": "2:48",
				"file": "SSB01_08_04_ATI",
				"img":"../img/abacus.jpg"
			}, {
				"track": 20,
				"name": "Magus - Smith St. Basement (01/08/04)",
				"duration": "5:46",
				"file": "SSB01_08_04_M",
				"img":"../img/abacus.jpg"
			}, {
				"track": 21,
				"name": "Beneath The Painted Eye - Smith St. Basement (06/06/03)",
				"duration": "13:07",
				"file": "SSB06_06_03_BTPE",
				"img":"../img/abacus.jpg"
			}, {
				"track": 22,
				"name": "Innocence - Smith St. Basement (06/06/03)",
				"duration": "5:16",
				"file": "SSB06_06_03_I",
				"img":"../img/abacus.jpg"
			}, {
				"track": 23,
				"name": "Magus - Smith St. Basement (06/06/03)",
				"duration": "5:46",
				"file": "SSB06_06_03_M",
				"img":"../img/abacus.jpg"
			}, {
				"track": 24,
				"name": "Madness Explored - Smith St. Basement (06/06/03)",
				"duration": "4:51",
				"file": "SSB06_06_03_ME",
				"img":"../img/abacus.jpg"
			}, {
				"track": 25,
				"name": "The Forsaken - Smith St. Basement (06/06/03)",
				"duration": "8:43",
				"file": "SSB06_06_03_TF",
				"img":"../img/abacus.jpg"
			}, {
				"track": 26,
				"name": "All This Is - Smith St. Basement (12/28/03)",
				"duration": "3:00",
				"file": "SSB12_28_03_ATI",
				"img":"../img/abacus.jpg"
			}, {
				"track": 27,
				"name": "Magus - Smith St. Basement (12/28/03)",
				"duration": "6:09",
				"file": "SSB12_28_03_M",
				"img":"../img/abacus.jpg"
			}, {
				"track": 28,
				"name": "Madness Explored - Smith St. Basement (12/28/03)",
				"duration": "5:05",
				"file": "SSB12_28_03_ME",
				"img":"../img/abacus.jpg"
			}, {
				"track": 29,
				"name": "Trance - Smith St. Basement (12/28/03)",
				"duration": "12:32",
				"file": "SSB12_28_03_T",
				"img":"../img/abacus.jpg"
			}, {
				"track": 30,
				"name": "The Forsaken - Smith St. Basement (12/28/03)",
				"duration": "8:56",
				"file": "SSB12_28_03_TF",
				"img":"../img/abacus.jpg"
			}, {
				"track": 31,
				"name": "All This Is (Take 1) - Smith St. Basement (Nov. '03)",
				"duration": "4:55",
				"file": "SSB___11_03_ATITake_1",
				"img":"../img/abacus.jpg"
			}, {
				"track": 32,
				"name": "All This Is (Take 2) - Smith St. Basement (Nov. '03)",
				"duration": "5:45",
				"file": "SSB___11_03_ATITake_2",
				"img":"../img/abacus.jpg"
			}, {
				"track": 33,
				"name": "Beneath The Painted Eye (Take 1) - Smith St. Basement (Nov. '03)",
				"duration": "14:05",
				"file": "SSB___11_03_BTPETake_1",
				"img":"../img/abacus.jpg"
			}, {
				"track": 34,
				"name": "Beneath The Painted Eye (Take 2) - Smith St. Basement (Nov. '03)",
				"duration": "13:25",
				"file": "SSB___11_03_BTPETake_2",
				"img":"../img/abacus.jpg"
			}, {
				"track": 35,
				"name": "The Forsaken (Take 1) - Smith St. Basement (Nov. '03)",
				"duration": "8:37",
				"file": "SSB___11_03_TFTake_1",
				"img":"../img/abacus.jpg"
			}, {
				"track": 36,
				"name": "The Forsaken (Take 2) - Smith St. Basement (Nov. '03)",
				"duration": "8:36",
				"file": "SSB___11_03_TFTake_2",
				"img":"../img/abacus.jpg"
			}],
			buildPlaylist = $.each(tracks, function (key, value) {
				var trackNumber = value.track,
					trackName = value.name,
					trackDuration = value.duration,
					trackImg = value.img;
				if (trackNumber.toString().length === 1) {
					trackNumber = '0' + trackNumber;
				}
				$('.podcast-list').append('<li> \
					<div class="plItem dfr"> \
						<img src="'+ trackImg +'" alt="'+ trackName +'"> \
						<div class="description dfr"> \
							<p class="plTitle">' + trackName + '</p> \
							<p class="plLength">' + trackDuration + '</p> \
						</div> \
					</div> \
				</li>');
			}),
			trackCount = tracks.length,
			npAction = $('#npAction'),
			npTitle = $('#npTitle'),
			npImg = '',
			audio = $('#audio1').on('play', function () {
				playing = true;
				npAction.text('Now Playing...');
			}).on('pause', function () {
				playing = false;
				npAction.text('Paused...');
			}).on('ended', function () {
				npAction.text('Paused...');
				if ((index + 1) < trackCount) {
					index++;
					loadTrack(index);
					audio.play();
				} else {
					audio.pause();
					index = 0;
					loadTrack(index);
				}
			}).get(0),
			btnPrev = $('#btnPrev').on('click', function () {
				if ((index - 1) > -1) {
					index--;
					loadTrack(index);
					if (playing) {
						audio.play();
					}
				} else {
					audio.pause();
					index = 0;
					loadTrack(index);
				}
			}),
			btnNext = $('#btnNext').on('click', function () {
				if ((index + 1) < trackCount) {
					index++;
					loadTrack(index);
					if (playing) {
						audio.play();
					}
				} else {
					audio.pause();
					index = 0;
					loadTrack(index);
				}
			}),
			li = $('.podcast-list li').on('click', function () {
				var id = parseInt($(this).index());
				if (id !== index) {
					playTrack(id);
				}
			}),
			loadTrack = function (id) {
				$('.active').removeClass('active');
				$('.podcast-list li:eq(' + id + ')').addClass('active');
				npTitle.text(tracks[id].name);
//				if($($('#nowPla img').length)){
//
//				}else{
					$('#nowPlay img').remove();
					$('#nowPlay').prepend($('.podcast-list li:eq(' + id + ') img').clone())
//				}
				index = id;
				audio.src = mediaPath + tracks[id].file + extension;
				updateDownload(id, audio.src);
			},
			updateDownload = function (id, source) {
				player.on('loadedmetadata', function () {
					$('a[data-plyr="download"]').attr('href', source);
				});
			},
			playTrack = function (id) {
				loadTrack(id);
				audio.play();
			};
		extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
		loadTrack(index);
	} else {
		// no audio support
		$('.column').addClass('hidden');
		var noSupport = $('#audio1').text();
		$('.container').append('<p class="no-support">' + noSupport + '</p>');
	}
});
