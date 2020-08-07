document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);


// GET LOCAL TEXT FILE DATA
// fetch returns promises
// to get response from promise you have to use .then
// function getText() {
//     fetch('test.txt')
//         .then(function (res) {
//             return res.text();
//         })
//         .then(function (data) {
//             console.log(data);
//             document.getElementById('output').innerHTML = data;
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
// }

// GET LOCAL TEXT FILE DATA WITH ARROW FUNCTIONS
function getText() {
    fetch('test.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(err => console.log(err));
}

// // GET LOCAL JSON DATA
// function getJson() {
//     fetch('post.json')
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             let output = "";
//             data.forEach(function (post) {
//                 output += `<li>${post.title}</li>`;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
// }

// GET LOCAL JSON DATA WITH ARROW FUNCTIONS
function getJson() {
    fetch('post.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = "";
            data.forEach(function (post) {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

// // GET API DATA
// function getExternal() {
//     fetch('https://api.github.com/users')
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             let output = "";
//             data.forEach(function (user) {
//                 output += `<li>${user.login}</li>`;
//             });
//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(function (err) {
//             console.log(err);
//         });
// }

// GET API DATA  WITH ARROW FUNCTION
function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = "";
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}