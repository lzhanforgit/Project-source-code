/* DD Full Screen Slider
* Created: May 20th, 2015 by DynamicDrive.com
* Visit http://www.dynamicdrive.com/ for full source code
*/

var ddfullscreenslider = (function($){

	document.createElement('section')
	document.createElement('article')

	var defaults = {
		addHash: true,
		sliderstate: 'open', // reserved for future use
		keycodeNavigation: [40, 38], // keyCode codes for down and up naivagion, respectively
		transitionDuration: '0.5s',
		swipeconfig: {peekamount: 100, mousedrag: true},
		onslide: function($slide, index){}
	}

	var transformprop = '' // variable to contain browser supported version of "transform" property

	function supportstranslate3d(){ // based on http://stackoverflow.com/a/12621264/4360074
	  if (!window.getComputedStyle) {
	      return false;
	  }
	  var $el = $('<div style="position:absolute" />').appendTo(document.body)
	  var has3d
		$el.css('transform', 'translate3d(1px,1px,1px)')
		has3d = $el.css('transform')
		var findtransformprop = $el.get(0).style.cssText.match(/(\w|\-)*transform/i) // get "-vendor-transform" portion of CSS Text
		transformprop = (findtransformprop)? findtransformprop[0] : 'transform'
	  $el.remove()
	
	  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
	}


	var $window = $(window)
	var $root =  $('html')

	function ddfullscreenslider(setting){
		var translatesupport = supportstranslate3d()
		var s = $.extend({}, defaults, setting)
		var $slider = $('#' + s.sliderid)
		var $wrapper = $slider.find('div.slidewrapper').css({transitionDuration: s.transitionDuration})
		var $slides = $()
		var slideslength = 0
		var $nav = $()
		var thisslider = this
		var selectedindx = 0
		var hasharray = []
		var mouseslidetimer
		var swipeevts = {start:"", move:"", end:""}, swipestart = false, dy = 0, bounds = [,], scrollableclass = 'scrollable', bypassdrag = false
		var initialrun= true // indicate whether this is first time slider has run. After page loads, variable becomes false

		if (!translatesupport){
			s.transitionDuration = parseFloat(s.transitionDuration) * 1000
		}

		/** Function to call always after a slide is shown */

		function onslidealways($slide, index){
			if (!initialrun && s.addHash){
				var newhash = $nav.find('li').eq(selectedindx).find('a:eq(0)').attr('href')
				if (history.replaceState){
					history.replaceState(null, null, newhash)
				}
				else{
					window.location.hash = newhash
				}
			}
			s.onslide($slide, index) // user defined event handler
		}

		function hashtoselectedslide(hash){
			for (var i=0; i<hasharray.length; i++){
				if (hasharray[i][0] == hash){
					return i
					break
				}
			}
			return 0
		}

		function applybounds(val, swipedir){
			if (swipedir == "down"){
				return (translatesupport)? Math.max(-parseInt(bounds[1]), val) : Math.max(-bounds[1], val)
			}
			else{
				return (translatesupport)? Math.min(bounds[0], val) : Math.min(bounds[0], val)
			}
		}

		function isscrollable($target){ // check element finger is on is contained inside a "scrollable" element that's actually scrollable (scrollHeight exceeds container height)
			var $scrollel = $target.closest('.' + scrollableclass)
			var scrollel
			if ($scrollel.length == 1){
				scrollel = $scrollel.get(0)
				if (scrollel.offsetHeight < scrollel.scrollHeight){
					return true
				}
			}
			return false
		}

		/** Mousewheel and keyboard scroll related code. Requires jquery.mousewheel.min.js **/

		function mouseslide(deltaY){
			var targetindx = selectedindx
			if (deltaY < 0) // mouse down
				var targetindx = Math.min(slideslength-1, selectedindx+1)
		  else if (deltaY > 0)
				var targetindx = Math.max(0, selectedindx-1)
			if (targetindx != selectedindx)
				thisslider.slideTo(targetindx)
		}

		$slider.on('mousewheel', function(event){
			clearTimeout(mouseslidetimer)
			var deltaY = event.deltaY
			mouseslidetimer = setTimeout(function(){
				mouseslide(deltaY)
			}, 100)
			return false
		})

		$(document).on('keyup', function(e){
			var targetindx = selectedindx
			if (e.keyCode == s.keycodeNavigation[0]) // key to go to next slide
				var targetindx = Math.min(slideslength-1, selectedindx+1)
			else if (e.keyCode == s.keycodeNavigation[1]) // key to go to previous slide
				var targetindx = Math.max(0, selectedindx-1)
			if (targetindx != selectedindx)
				thisslider.slideTo(targetindx)
		})

		/** Swipe/ Mouse Drag scroll related code **/

		swipeevts.start = 'touchstart' + (s.swipeconfig.mousedrag? ' mousedown' : '')
		swipeevts.move = 'touchmove.dragmove' + s.sliderid + (s.swipeconfig.mousedrag? ' mousemove.dragmove' + s.sliderid : '')
		swipeevts.end = 'touchend' + (s.swipeconfig.mousedrag? ' mouseup' : '')

		if (s.swipeconfig.mousedrag){
			$wrapper.bind('click', function(e){
				if ($wrapper.data('dy') != 0) // if dragging on belt instead of clicking on it
					e.preventDefault() // prevent default action
			})
		}
	
  	$wrapper.bind(swipeevts.start, function(e){
			bypassdrag = false
  		var e = (e.type.indexOf('touch') != -1)? e.originalEvent.changedTouches[0] : e
			if ( isscrollable( $(e.target) ) ){ // if target is contained inside a "scrollable" element
				bypassdrag = true
				return
			}
			swipestart = true
			var mousey = e.pageY
			dy = 0 // reset swipe amount
			if (translatesupport){
				$wrapper.css({transition: 'none'})
			}
			var initialy = -$window.outerHeight() * selectedindx
			$wrapper.data({dy: dy})
  		$(document).bind(swipeevts.move, function(e){
				if (bypassdrag){
					return
				}
  			var e = (e.type.indexOf('touch') != '-1')? e.originalEvent.changedTouches[0] : e
  			dy=e.pageY-mousey //distance to move horizontally
				var newy=initialy+dy
				newy = applybounds(newy, (dy < 0)? 'down' : 'up')
				if (translatesupport){
					$wrapper.css('transform', 'translate3d(0, ' + newy + 'px, 0)')
				}
				else{
	  			$wrapper.css('top', newy)
				}
				$wrapper.data({dy: dy})
  			return false //cancel default drag action
  		})
			if (e.type == "mousedown")
  			return false //cancel default drag action
  	})

  	$(document).bind(swipeevts.end, function(e){
  		$(document).unbind(swipeevts.move)
			if (!swipestart || bypassdrag)
				return
			if (dy != 0){ // if actual swipe has occured
				if (dy < 0 && dy < -s.swipeconfig.peekamount) // if swipe down and more than peek amount
					var targetindx = Math.min(slideslength-1, selectedindx+1)
				else if (dy > 0 && dy > s.swipeconfig.peekamount) // if swipe up and more than peek amount
					var targetindx = Math.max(0, selectedindx-1)
				else
					targetindx = selectedindx
				thisslider.slideTo(targetindx)
				if (e.type == "mouseup")
					return false
			}
			swipestart = false
  	})

		/** CSS3 transition ontransitionend event  set up */

		$wrapper.on('transitionend webkitTransitionEnd', function(e){
			if (/transform/i.test(e.originalEvent.propertyName)){ // check event fired on "transform" prop
				onslidealways($slides.eq(selectedindx), selectedindx)
			}
		})

		/** Public functions **/

		this.reloadSlides = function(){
			$nav.remove()
			hasharray = []
			$nav = $('<ul class="fssnav" />')
			$slides = $('article.slide').each(function(i){
				var $curslide = $(this)
				var anchorval = $curslide.attr('id') || 'slide' + (i+1)
				anchorval = "#" + anchorval
				hasharray.push([anchorval, i])
				var title = $curslide.data('title') || anchorval
				var $navli = $('<li><a href="' + anchorval +'" title="' + title +'">' + (i + 1) + '</a></li>').appendTo($nav)
				var $navlink = $navli.find('a:eq(0)')
				$navli.on('click touchstart', function(e){
					thisslider.slideTo(i)
				})
			})
			$nav.on('click touchstart touchend', function(e){
  			var e = (e.type.indexOf('touch') != '-1')? e.originalEvent.changedTouches[0] : e
				return false		
			}).appendTo($slider)
			slideslength = $slides.length
			bounds = [0, $window.outerHeight() * (slideslength-1)]
		}

		this.openSlider = function(){
			initialrun = false
			bypassdrag = false
			s.sliderstate = 'open'
			$root.addClass('fssopen')
			$slider.css('visibility', 'visible')
		}

		this.closeSlider = function(){
			s.sliderstate = 'close'
			bypassdrag = true
			$root.removeClass('fssopen')
			$slider.css({visibility:'hidden'})
		}

		this.slideTo = function(indx, noanimation){
			var newy = $window.outerHeight() * indx
			$nav.find('li').eq(selectedindx).removeClass('selected')
			$nav.find('li').eq(indx).addClass('selected')
			selectedindx = indx
			if (translatesupport){
				$wrapper.css({transition: (noanimation)? 'none' : transformprop + ' ' + s.transitionDuration})			
				$wrapper.css('transform', 'translate3d(0, -' + newy + 'px, 0)')
				if (noanimation){ // run callback immediately
					onslidealways($slides.eq(selectedindx), selectedindx)
				}
			}
			else{
				$wrapper.stop().animate({top: -newy}, (noanimation)? 0 : s.transitionDuration, function(){
					onslidealways($slides.eq(selectedindx), selectedindx)
				})
			}
		}

		/** Initialize and show slider **/

		this.reloadSlides()
		selectedindx = hashtoselectedslide(window.location.hash)
		this.slideTo(selectedindx, true)
		if (s.sliderstate == 'open'){
			this.openSlider()
		}

		$(window).on('resize', function(){
			thisslider.slideTo(selectedindx, true)
			bounds = [0, $window.outerHeight() * (slideslength-1)]
		})


	} // end ddfullscreenslider def

	return ddfullscreenslider 

})(jQuery)