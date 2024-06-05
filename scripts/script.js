function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function checkSpam(str) {
    return str.replace(/viagra|XXX/gi, '***');
}

function addComment() {
    var name = document.getElementById('name').value;
    var avatar = document.getElementById('avatar').value;
    var message = document.getElementById('message').value;

    name = name.trim();
    name = capitalizeFirstLetter(name);
    message = checkSpam(message);

    var comment = '<div class="comment">';
    comment += '<img src="' + avatar + '" style="width: 50px; height: 50px; border-radius: 50%;">';
    comment += '<h3>' + name + '</h3>';
    comment += '<p>' + message + '</p>';
    comment += '</div>';

    document.getElementById('comments').innerHTML += comment;

    document.getElementById('name').value = '';
    document.getElementById('avatar').value = '';
    document.getElementById('message').value = '';
}