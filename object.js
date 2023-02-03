
	$('#load').on('click', loadComments);

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
		sendRequest('wall.search', {/* owner_id: -10564356, */ domain: "otkrytiiarkhangelsk", count: 50, query: "МДУ", query: "Мезенское", query: "дороги", query: "мезенцы", query: "дорожники", query: "тротуар", v: 5.131}, function (data) {
			drawComments(data.response.items);
            console.log(data.response);
		});
	}

    function drawComments(comments) {
        var html = '';

        for (var i = 0; i < comments.length; i++) {
            
            var f = comments[i];

            newDate = new Date(f.date*1000);

            newDate.toString;

            console.log(typeof(newDate));

            html += '<li>' + 
                        '<div>'
                            + '<p>' + newDate + '</p>' 
                            +'<h4>' + f.text + '</h4>'
                            + '<a target="_blank" href="https://vk.com/otkrytiiarkhangelsk?w=wall' + /* f.from_id */ '-161193561' + '_' + f.post_id + '">' 
                            + 'Ссылка' + '</a>' 
                        +'</div>'
                + '</li>';
        }

        $('ul').html(html);
    }