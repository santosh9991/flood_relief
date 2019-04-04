window.addEventListener('hashchange',function(){
    //based on the hash value you can perform various operations on DOM
    // for ex: you could say window.location.hash== soame value and perform operations
    if (window.location.hash=='#/'){
        console.log('Hash changed!' + window.location.hash)
    }
    if (window.location.hash=='#/home'){
        console.log('Hash changed!' + window.location.hash)
    }
    if (window.location.hash=='#/forcast'){
        console.log('Hash changed!' + window.location.hash)
    }
})