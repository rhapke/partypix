/**
 * @author ringo
 */


// activate fancybox for all a with class fancybox
	$(document).ready(function() {
		
		function formatTitle(title, currentArray, currentIndex, currentOpts) {
		    return '<div id="tip7-title"><span><a href="javascript:;" onclick="$.fancybox.close();"><img src="/data/closelabel.gif" /></a></span>' + (title && title.length ? '<b>' + title + '</b>' : '' ) + 'Image ' + (currentIndex + 1) + ' of ' + currentArray.length + '</div>';
		}
		
		
		
		$(".fancybox").fancybox({
			closeBtn: true,
			loop: true,
			minWidth: 820,
			helpers : {
                title : {
                    type : 'inside'
                }

            },
            beforeShow : function(opt) {
	            if(this.element.title==''){
	            	
	            	socialbar = this.element.parentElement.children[1].innerHTML;
	                this.element.title='Image '+ (this.index + 1) + ' / ' + this.group.length + socialbar;
	                this.title=this.element.title;
	            }
	        },
	        afterClose : function(opt) {
	            	this.element.title='';
	                this.title=this.element.title;
	        } 


		});
		
		
	});
