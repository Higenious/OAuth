//Google Login

function onLoadFunction(){
    gapi.client.setApiKey('');
    gapi.client.load('plus','v1', function () {});
}
