/*$(document).ready(function(){
    $('form button').click(function(e){
        e.preventDefault();
        const ativi = $('.atividade').val();
        const hour = $('#.hora').val();
        const novoItem = $('<td style="display: none">' + ativi + '</td>');
        $('<td style="display: none"> ' + hour + '</td>').appendTo(novoItem);
        $('<td style="display: none"><div class="icom">Status <input type="checkbox" placeholder="Status" /></div></td>').appendTo(novoItem);
        $(novoItem).appendTo('table tbody');
        $(novoItem).fadeIn(1000);  
        ativi.val('');
        hour.val('');
    })
})*/

$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();
        const ativi = $('.atividade').val();
        const hour = $('.hora').val();
        const novoItem = $(' <tbody><tr><th><p>' + hour + '</p></th><th><p>' + ativi + '</p></th><th><div class="wrapper"><input type="checkbox" id="check"/><p><label for = "check">Checkbox</label></p></div></th></tr></tbody>');

        $(novoItem).appendTo('table');

        $('.atividade').val('');
        $('.hora').val('');

    })
})
