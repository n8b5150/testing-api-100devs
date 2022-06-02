document.querySelector('#getPark').addEventListener('click', apiRequest)

async function apiRequest(){
    const parkName = document.querySelector('select').value
    console.log(parkName)
    try{
        const response = await fetch(`https://testing-api-100devs.herokuapp.com/api/${parkName}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('#selectedPark').innerText = data['park-name']
        document.querySelector('#website').innerText = 'Website'
        document.querySelector('#website').href = data.website
        document.querySelector('#directions').innerText = 'Directions'
        document.querySelector('#directions').href = data.address
        document.querySelector('#parkImage').innerHTML = `<img src="${data.image}" alt="Picture from ${data['park-name']}">`
    }
    catch(error){
        console.log(error)
    }
}