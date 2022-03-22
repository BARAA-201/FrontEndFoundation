let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);
        document.getElementById("gitBio").innerHTML = gitObject.bio;
    }
};
newRequest.open("GET", "https://api.github.com/users/BARAA-201", true);
newRequest.send();