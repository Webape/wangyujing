window.onload = function(){
    function $(id){return document.getElementById(id)}
    function hideLabel(inputId,labelId){
        inputId.oninput = inputId.onpropertychange = function(){
            if(inputId == $("password")){
                if(this.value == ""){
                    labelId.style.display = "block";
                }
                else {
                    labelId.style.display = "none";
                    var char_length = inputId.value.length;
                    var spans = $("password-grade").getElementsByTagName("span");
                    //alert(spans.length);
                    if(char_length < 6){
                        for(var i = 0; i < spans.length; i++){
                            spans[i].style.backgroundColor = "#ddd";
                        }
                        spans[0].style.backgroundColor = "red";
                    }
                    else if(char_length < 12){
                        for(var i = 0; i < spans.length; i++){
                            spans[i].style.backgroundColor = "#ddd";
                        }
                        spans[1].style.backgroundColor = "orange";
                    }
                    else {
                        for(var i = 0; i < spans.length; i++){
                            spans[i].style.backgroundColor = "#ddd";
                        }
                        spans[2].style.backgroundColor = "green";
                    }
                }
            }
            else {
                if(this.value == ""){
                    labelId.style.display = "block";
                }
                else {
                    labelId.style.display = "none";
                }
            }
        }
    }

    hideLabel($("tel"),$("tel_label"));
    hideLabel($("password"),$("password_label"));
    hideLabel($("yanzhengma"),$("yanzhengma_label"));

    function borderLight(inputId,alertId){
        inputId.onfocus = function(){
            this.style.boxShadow = "0 0 5px blue";
            alertId.style.display = "none";
        }
        inputId.onblur = function(){
            if(this.value == ""){
                this.style.boxShadow = "0 0 5px orange";
                alertId.style.display = "block";
            }
            else {
                this.style.boxShadow = "none";
            }
        }
    }

    borderLight($("tel"),$("tel_alert"));
    borderLight($("password"),$("password_alert"));

}