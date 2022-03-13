$(function () {
    // function showAlert(message, duration = 1000){
    //     const alert = document.createElement('div')
    //     alert.textContent = message
    //     alert.classList.add('alert')
    //     alertContainer.prepend(alert)
    //     if(duration === null) return
        
    //     setTimeout(()=>{
    //         alert.classList.add('hide')
    //         alert.addEventListener('transitionend', ()=>{
    //             alert.remove()
    //         })
    //     }, duration)
        
    // }
    
    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })
    
})



function doLongHudText(message, duration = 1000){
    const alertContainer = document.querySelector("[data-alert-container]")
    const alert = document.createElement('div')
    alert.textContent = message
    alert.classList.add('alert')
    alertContainer.prepend(alert)
    if(duration === null) return
    
    setTimeout(()=>{
        alert.classList.add('hide')
        alert.addEventListener('transitionend', ()=>{
            alert.remove()
        })
    }, duration)
    
}



