  // MUTE STATE
  let isMuted = false;
  let linkedClicked = false;
  let muteState = sessionStorage.getItem('muteState');
  
  if (muteState) {
    mutestate = muteState == 'true' ? muteState = true : muteState = false;
    isMuted = muteState;
  }

  // MUSIC ONLOAD
  music = new Audio();
  music.loop = true;
  music.src = "https://psychoactive-website-media.sfo3.digitaloceanspaces.com/Audio/Music/ps-website-music-v2.mp3";
  
  const music_volume = 0.2;
  music.volume = music_volume;

  window.onload = () => {
  	music.play();
  }

  // MUSIC FADE-OUT
  window.onbeforeunload = function(){
    sessionStorage.setItem('muteState', isMuted);
		if ((!isMuted) && (!linkClicked)) fadeToggle(music, music_volume)
  };
  

  // UI AUDIO

  // open hamburger-menu sound
  frog_ui_open_menu = new Audio();
  frog_ui_open_menu.volume = 0.5;
  addSrc(frog_ui_open_menu, 'frog_ui_open_WET');

  // close hamburger-menu sound
  frog_ui_close_menu = new Audio();
  frog_ui_close_menu.volume = 0.4;
  addSrc(frog_ui_close_menu, 'frog_ui_close_WET');

  // menu click sounds
  frog_ui_single_click_1 = new Audio();
  frog_ui_single_click_1.volume = 0.5;
  addSrc(frog_ui_single_click_1, 'frog_ui_single_1_WET');

  frog_ui_single_click_2 = new Audio();
  frog_ui_single_click_2.volume = 0.5;
  addSrc(frog_ui_single_click_2, 'frog_ui_single_2_WET');

  // menu hover clack sound
  wood_clack_hover_menu = new Audio();
  wood_clack_hover_menu.volume = 0.3;
  addSrc(wood_clack_hover_menu, 'wood_clack');

  // project hover & click sounds
  project_hover = new Audio();
  project_hover.volume = 0.2;
  addSrc(project_hover, 'ui_hover_WET');

  project_click = new Audio();
  project_click.volume = 0.35;
  addSrc(project_click, 'ui_click_WET');

  // text hover sound
	text_hover = new Audio();
  text_hover.volume = 0.02;
  addSrc(text_hover, 'text_hover');

  // logo click sound
  home_ui = new Audio();
  home_ui.volume = 0.5;
  addSrc(home_ui, 'home_ui');
  
  // logo hover sound
  ps_logo_hover = new Audio();
	ps_logo_hover.loop = true;

  const logo_hover_volume = 0.8;
	ps_logo_hover.volume = logo_hover_volume;

  addSrc(ps_logo_hover, 'logo_hover');


  // UI SOUNDS ARRAY
  const uiSounds = [
    frog_ui_open_menu,
    frog_ui_close_menu,
    frog_ui_single_click_1,
    frog_ui_single_click_2,
    wood_clack_hover_menu,
    project_hover,
    project_click,
    text_hover,
    ps_logo_hover,
    home_ui
  ]


  // MUTE ALL if user muted
  if ((muteState !== null) && (isMuted)) {
    muteAll(uiSounds);
    fadeToggle(music, music_volume);
  }  


  // PRELOADER TRIGGER
  // const preloader_trigger = document.querySelectorAll('#trigger');
  // addSound(preloader_trigger, home_ui);
  
  // MENU NAV-LINKS
  const menu_links = document.querySelectorAll('.menu-link-box');
  addSound(menu_links, frog_ui_single_click_1, wood_clack_hover_menu);   
  
  menu_links.forEach(link => {
    link.addEventListener('click', function() {
      wood_clack_hover_menu.muted = true;
      fadeOutMusic();
    })
  })
  
  // TEAM CARDS
  const team_links = document.querySelectorAll('.team-link-box');
  addSound(team_links, project_click, project_hover);

  // PROJECT LINKS
  const project_links = document.querySelectorAll('.project-link-wrapper, .project-link');
  addSound(project_links, project_click, project_hover);
  
  // UNDERLINED TEXT 
  const underline_links = document.querySelectorAll('.gets-underlined, .underlined');
  addSound(underline_links, project_click, project_hover);
  
  // TAG-TEXT
  const tag_text = document.querySelectorAll('.tag-text, .button-text');
  addSound(tag_text, frog_ui_single_click_2, text_hover);

  // CAREERS ACCORDION
  const careers_accordion = document.querySelectorAll('.career-subtitle-box');
  addSound(careers_accordion, frog_ui_single_click_1);

  // CAREERS ARROW-BTNS
	const arrow_btns = document.querySelectorAll('.arrow');
  addSound(arrow_btns, frog_ui_single_click_2);

  // HAMBURGER-MENU OPEN & CLOSE
  const hamburger_menu = document.querySelectorAll('.hamburger-box');
  
  hamburger_menu.forEach(menu => {
    menu.addEventListener('click', function() {
      if ($(this).hasClass("close")) {
        frog_ui_close_menu.currentTime = 0;
        frog_ui_close_menu.play();
      } else {
        frog_ui_open_menu.currentTime = 0;
        frog_ui_open_menu.play();
      }
  	});
    
  	menu.addEventListener('mouseenter', function() {
      if (!$(this).hasClass("close")) {
        wood_clack_hover_menu.currentTime = 0;
        const closeAudio = wood_clack_hover_menu;
        closeAudio.volume = 0.2
  			closeAudio.play();
      } 
  	});    
  })
  
  // LOGO HOME CLICK & HOVER
  const home_link = document.querySelectorAll('#ps-logo-wrap, #ps-logo-wrap-black');
  
  home_link.forEach(link => {
    link.addEventListener('click', function() {
      ps_logo_hover.pause();
      home_ui.play();
      fadeOutMusic();
    });

    link.addEventListener('mouseenter', function() {
      ps_logo_hover.currentTime = 0
      ps_logo_hover.loop = true;
      ps_logo_hover.volume = logo_hover_volume;
      if (isMuted == false) ps_logo_hover.muted = false;
      ps_logo_hover.play();
    });

    link.addEventListener('mouseleave', function() {
      ps_logo_hover.loop = false;
			if (isMuted == false) fadeToggle(ps_logo_hover, logo_hover_volume);
    });
  })


  // MUTE FUNCTIONALITY 
  const mute_btn = document.querySelector('#soundwave-lottie');

  mute_btn.addEventListener('click', function() {
    fadeToggle(music, music_volume);
    muteToggle();
  })


  // FUNCTIONS
  function addSrc(audio, file) {
    audio.src = `https://psychoactive-website-media.sfo3.digitaloceanspaces.com/Audio/UI/${file}.mp3`
  }

  function addSound(triggerLink, clickSound, hoverSound ) {
      triggerLink.forEach(trigger => {
        
      trigger.addEventListener('click', function() {
        fadeOutMusic(); 
        clickSound.currentTime = 0;
        clickSound.play();
      });

      trigger.addEventListener('mouseenter', function() {
        hoverSound.currentTime = 0;
        hoverSound.play();
      });
    })
  }

  function fadeOutMusic() {
    if (!isMuted) fadeToggle(music, music_volume);
    linkedClicked = true;
  }
  
  function fadeToggle(audio, maxVolume) {
    let muted = audio.muted;
    if (muted) audio.muted = false;

    $(audio).animate({volume: muted ? maxVolume : 0}, 500, function() {
      audio.muted = !muted;
    });	
  }

  function muteToggle() {
    if (isMuted) {
      unmuteAll(uiSounds);
      isMuted = false;   
    } else {
      muteAll(uiSounds);
      isMuted = true;
    }
  }
  
  function muteAll (audioArr) {
    audioArr.forEach(audio => {
      audio.muted = true;
    })
  }

  function unmuteAll (audioArr) {
    audioArr.forEach(audio => {
      audio.muted = false;
    })
  }