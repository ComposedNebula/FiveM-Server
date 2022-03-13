$(function () {
    function display(bool) {
        if (bool) {
            $("#hudtext").show();
        } else {
            $("#hudtext").hide();
        }
    }
    
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



