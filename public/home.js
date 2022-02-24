const button = document.createElement('button')

button.textContent = 'CLick here';

function errorTest(){
    axios.get('https://mojokojo-devops-lab.herokuapp.com/api/test').then(() => {
        console.log('it worked');
    }).catch(err => alert(console.log(err)))
}


button.addEventListener('click', errorTest)

document.body.appendChild(button);