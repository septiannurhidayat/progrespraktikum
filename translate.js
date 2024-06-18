$(document).ready(function(){
    $('#translateButton').click(function(){
        var text = $('#content').text();
        var targetLang = $('#languageSelect').val();
        var apiKey = 'YOUR_API_KEY';

        $.ajax({
            url: 'https://translation.googleapis.com/language/translate/v2',
            type: 'POST',
            data: JSON.stringify({
                q: text,
                target: targetLang,
                format: 'text'
            }),
            contentType: 'application/json',
            headers: {
                'Authorization': 'Bearer ' + apiKey
            },
            success: function(response) {
                $('#content').text(response.data.translations[0].translatedText);
            },
            error: function() {
                alert('Translation failed.');
            }
        });
    });
});
