
$('#jest29').on('click', loadComments); //запуск по кнопке
/* $('#load').ready(loadComments); */


    
function getUrl(method, params) {
    if (!method) throw new Error('Вы не указали метод');
    params = params || {}; //если параметры не определены, то пустой объект
    params['access_token'] = 'vk1.a.5xW9qQsYsSzi_iDRUVFE1whP8fT0vK8L_O-hBTTv2yLUVUhdV6E73RjBDDExKCKJJxBcwVHleAVV-GSw8bLYB7-JjuBdIl58pKvSC1sfY6AcUrlyAv7oWv_wf2JpmGXlIwLhDogtYJk9P_pdt4Uex-n7CEk56ucWF0eD68NceevrBs7RCPXEWsqsfJ3GAiuUlHIOSPtoPQ05y5hwvj2nvA';
    return 'https://api.vk.com/method/' + method + '?' +  $.param(params);
}
    
function sendRequest(method, params, func) {
    $.ajax({
        url: getUrl(method, params),
        method: 'GET',
        dataType: 'JSONP',
        success: func
    });
}
    
function loadComments() {
    sendRequest('execute.newJest', {
            v: 5.131
        }, 
            function (data) {
                array = data.response;
                array.sort(function (a, b) {
                    if (a.date < b.date) {
                        return 1;
                      }
                      if (a.date > b.date) {
                        return -1;
                      }
                      // a должно быть равным b
                      return 0;
                })
				console.log(array);
                drawComments(array);
    });
}
    
        function drawComments(comments) {
            let html = '';
    
            for (let i = 0; i < comments.length; i++) {
                
                let f = comments[i];
    
                //преобразование даты, сначала в GMT, потом в русское наименование
   
                newDate = new Date(f.date*1000);
    
                newDate.toString;
    
                let a = new Date(newDate);
    
                let timeNext = [
                    addLeadZero(a.getHours()),
                    addLeadZero(a.getMinutes()),
                    ].join(':');
    
                let dateNext = [
                    addLeadZero(a.getDate()),
                    addLeadZero(a.getMonth() + 1),
                    a.getFullYear()].join('.');
    
                function addLeadZero(val) {
                if (+val < 10) return '0' + val;
                return val;
                };
    
                //вывод в html
    
                html += '<li>' + 
                            '<div>'
                                + '<p class="comments__date">' + dateNext + ' ' + timeNext + '</p>' 
                                +'<h4>' + f.text + '</h4>'
                            +'</div>'
                            + '<div class="comments__link">'
                                + '<a target="_blank" href="https://vk.com/' +/*  urlDomain2 + '?w=wall' */ 'wall'+ f.owner_id + '_' + f.id + '">' 
                                + 'ссылка на пост' + '</a>' 
                            +'</div>'
                    + '</li>';
            }
    
            $('ul').html(html);
        }