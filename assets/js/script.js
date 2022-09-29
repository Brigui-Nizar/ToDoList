$('.btn.add').click(()=>{
    let task = $("#task").val();
    let div = $('<div class="item"></div>')
    let p = $(`<p> ${task} </p>`)
    let btn =$('<button class="btn delete">Supprimer</button>')
    
    div.append(p)
    div.append(btn)

    $('.list').append(div);
    $("#task").val(''); 
  
    $(div).click((e)=>{
    $(e.currentTarget).toggleClass('end');  
     
 //  console.log(e.target);   
 //  console.log( e.currentTarget);
   })
  
     
  $('.btn.delete').click((e)=>{
      $(e.currentTarget.parentNode).remove();
    })
})