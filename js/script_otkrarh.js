const requestUrl = 'https://api.vk.com/method/execute.newFunc?&v=5.131&access_token=vk1.a.5xW9qQsYsSzi_iDRUVFE1whP8fT0vK8L_O-hBTTv2yLUVUhdV6E73RjBDDExKCKJJxBcwVHleAVV-GSw8bLYB7-JjuBdIl58pKvSC1sfY6AcUrlyAv7oWv_wf2JpmGXlIwLhDogtYJk9P_pdt4Uex-n7CEk56ucWF0eD68NceevrBs7RCPXEWsqsfJ3GAiuUlHIOSPtoPQ05y5hwvj2nvA';

function sendRequest() {
    $.ajax({
        url: requestUrl,
        method: 'GET',
        dataType: 'JSONP',
        success: function(data) {
            console.log(data.response);
        }
    });
}

sendRequest();