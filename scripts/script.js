var addRow = '<li>' +
                '<div class="col1" contenteditable></div>' +
                '<div class="col2" contenteditable></div>' +
                '<div class="col3" contenteditable></div>' +
                '<div class="col4" contenteditable></div>' +
                '<div class="col5" contenteditable></div>' +
              '</li>';
var addTbBtn = '<div class="tb-btn-group">' +
                  '<button class="tb-btn-icon btn-tb-up"></button>' +
                  '<button class="tb-btn-icon btn-tb-down"></button>' +
                  '<button class="tb-btn-icon btn-tb-delete"></button>' +
                '</div>';
var addCCEidt = '<div class="edit-box con-box">' +                    
                  '<textarea></textarea>' +
                  '<img src="" alt="" class="btn-delete">' +
                '</div>';

$(".bt-toggle").click(function(){  
    $(this).toggleClass("on");
})

$(".lang-wrapper .btn-lang").on("click", function(){
  $(".lang-wrapper .btn-lang").removeClass("on");
  $(this).addClass("on");  
})

$(".btn-line-add").on("click", function(){
  $(".edit-wrapper .table-wrapper .cc-table tbody").append(addRow);
})

function openMsgBox(){ 
  $("#modal-background").fadeIn(300);  
  $("#msgBoxModal").show(300);
  $("body").css("overflow", "hidden");
}

function openShortcutKey(){ 
  $("#modal-background").fadeIn(300);  
  $("#shortcutKeyModal").show(300);
  $("body").css("overflow", "hidden");
}

function clickMsgBtn(msg){
  var strDel = '';
  var strAdd = '';

  if (msg == 1) {
    strDel = 'fail';
    strAdd = 'success';
  }
  else {
    strDel = 'success';
    strAdd = 'fail';
  }
  $("#msgBoxModal").fadeOut(300);
  $("#msgConfirmModal").removeClass(strDel);
  $("#msgConfirmModal").addClass(strAdd);
  $("#msgConfirmModal").show(300).delay(1000).hide(300);
  $("#modal-background").delay(1300).fadeOut(300);
  $("body").css("overflow", "hidden");
}

// background
$("#modal-background, .close").on('click',function(){      
  if ($(this).hasClass("close")){
    $("#modal-background").fadeOut(300);
    $(".modal-con").fadeOut(300);      
  }
});

$(".modal-close").on('click',function(){           
  $("#modal-background").fadeOut(300);
  $(".modal-con").fadeOut(300);
  $('body').css('overflow', 'hidden');      
});

$(document).on("click", ".edit-wrapper .table-wrapper .table-body li", function(){  
  if($('.edit-box').length) {

  } else {
    $(".edit-wrapper .table-wrapper .table-body li").removeClass("on");
    $(".edit-wrapper .table-wrapper .table-body li div").attr('contenteditable','false');
    $(".edit-box").remove();  
    $(".tb-btn-group").remove();
    $(this).addClass("on");
    $(this).append(addTbBtn); 
    $(this).find(".col5").addClass("cc-detail");     
    $(this).find("div").attr('contenteditable','true');
  }
})

$(document).on("click",".btn-tb-up", function(){
  $(this).closest('li').before(addRow);
})
$(document).on("click",".btn-tb-down", function(){
  $(this).closest('li').after(addRow);
})
$(document).on("click",".btn-tb-delete", function(){
  $(this).closest('li').detach();
})
$(document).on('dblclick', '.cc-detail', function(e) {
  $(this).append(addCCEidt);
  $(this).find(".edit-box textarea").text($(this).find(".cc-text").text());
  $(this).find(".edit-box").focus();
  $(this).attr('contenteditable','false');
});

$(document).on("click",".btn-delete", function(){  
    $(this).closest('.edit-box').remove();
})

// video slider 진행영역 색상 지정
$(".video-slider>input[type=range]").on("mousemove click", function (e) {
  var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
  var percent = val * 100;

  $(this).css('background-image',
      '-webkit-gradient(linear, left top, right top, ' +
      'color-stop(' + percent + '%, #6c36fb), ' +
      'color-stop(' + percent + '%, #e4e1ee)' +
      ')');

  $(this).css('background-image',
      '-moz-linear-gradient(left center, #6c36fb 0%, #6c36fb ' + percent + '%, #e4e1ee ' + percent + '%, #e4e1ee 100%)');
});
