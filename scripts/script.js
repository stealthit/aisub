var addRow = '<tr>' +                  
                '<td></td>' +
                '<td></td>' +
                '<td></td>' +
                '<td></td>' +
                '<td>' +
                  '<div class="cc-detail">' +
                    '<div class="cc-text"></div>' +
                    '<div class="tb-btn-group">' +
                      '<button class="tb-btn-icon btn-tb-up"></button>' +
                      '<button class="tb-btn-icon btn-tb-down"></button>' +
                      '<button class="tb-btn-icon btn-tb-delete"></button>' +       
                    '</div>' +
                    '<div class="edit-box" contenteditable="true"></div>' +                            
                  '</div>' +
                '</td>' +
               '</tr>';


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

$(document).on("click", ".edit-wrapper .table-wrapper .cc-table tbody tr", function(){
  $(".edit-wrapper .table-wrapper .cc-table tbody tr").removeClass("on");
  $(".edit-box").css("display","none");
  $(this).addClass("on");
})

$(document).on("click",".btn-tb-up", function(){
  $(this).closest('tr').before(addRow);
})
$(document).on("click",".btn-tb-down", function(){
  $(this).closest('tr').after(addRow);
})
$(document).on("click",".btn-tb-delete", function(){
  $(this).closest('tr').detach();
})
$(document).on('dblclick', '.cc-detail', function(e) {
  $(this).find(".edit-box").css("display","block");
  $(this).find(".edit-box").text($(this).find(".cc-text").text());
  $(this).find(".edit-box").focus();
});