/*
 * name: 	jimLinkIt
 * author: 	Jim Klonowski
 * version: 0.1.0
 * license: MIT
 */

 (function($){
 	$.fn.jimlinkIt = function(options){
 		//Default Settings
 		var settings = $.extend({
 			href:null,
 			text:null,
 			target:'_self'
 		}, options);
 		
 		//Validate Settings
 		if(settings.href == null){
 			console.log('ERROR: You need an href option for LinkIt to work.');
 			return this;
 		}

 		return this.each(function(){
 			var obj = $(this);
 			//If text wasn't set, then just use the options text
 			if(settings.text == null || settings.text == ''){
 				settings.text = obj.text();
 			}
 			
 			obj.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
 		});

 	}
 }(jQuery));