$(document).ready(function(){
    $('#abrir-nav').click(function(){
        $('nav').slideDown();
    })
    $('#fecha-nav').click(function(){
        $('nav').slideUp();
    })
    $('form').on('submit', function(e){
        e.preventDefault();

        const task =  $('#task').val();
    
        if(task == ""){
            alert('insira uma tarefa Válida')
        }else{
            addTask = $(`<li sytle="display: none";></li>`);
            $(`<p>${task}</p>`).appendTo(addTask);
            $(addTask).appendTo('ul');
        }
        $('#task').val('');
        
        $('p').click(function(){
            $('p').addClass('tarefa-realizada')
    })
    })

})