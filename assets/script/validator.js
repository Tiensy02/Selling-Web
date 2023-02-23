function Validator(options) {
    var formElement = document.querySelector(options.form)
    function getParenElement(element, selector) {
        while(element.parentElement) {
            if (element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element=element.parentElement;
        }
    }
    console.log(formElement)
    var selectorRules = [];

        // hàm thực thi các rule
        function validate(inputElement,rule){
            var errorMessage;
            var errorElement = getParenElement(inputElement,options.form_group).querySelector(options.errorMess);
            var rules = selectorRules[rule.selector];
        for ( var i = 0 ; i < rules.length ; i ++ ) {
            switch(inputElement.type){
                case "checkbox":
                case "radio":
                    errorMessage = (inputElement.checked == true) ? undefined : "Giới tính của bạn là ?"
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if(errorMessage) break;
        }
            if (errorMessage) {
                errorElement.innerText=errorMessage;
                errorElement.parentElement.classList.add("invalid")
            }else {
                errorElement.innerText="";
                errorElement.parentElement.classList.remove("invalid")
            } 
            return !errorMessage;
        }
    if (formElement) {
        
        //những việc với submit
        formElement.onsubmit = function(e) {
            e.preventDefault();
            var formValid = true;
            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                var valid= validate(inputElement,rule);
                if ( !valid ) {
                    formValid = false;
                }
            })
            if (formValid) {
                if (typeof options.onSubmit==="function") {
                    var allValue = 
                    Array.from(formElement.querySelectorAll("[name]:not([disable])")).reduce(function(values,input){
                        switch(input.type){
                            case "checked":
                            case "radio":
                                if(input.checked==true) {
                                    values[input.name]=input.value
                                }else break
                            break;
                            default:(values[input.name]=input.value);   
                        }
                   
                       return values
                    },{})
                    options.onSubmit({
                        allValue
                    })
                    
            }else {
                formElement.submit();
            }
            
        }
    }



        // lưu các rule vào 1 mảng
       options.rules.forEach(function(rule) {
        if (Array.isArray(selectorRules[rule.selector])){
            selectorRules[rule.selector].push(rule.test)
        }else {
            selectorRules[rule.selector] = [rule.test]
        }

        // thực thi các rule sau các event
        var inputElement = formElement.querySelector(rule.selector);

        inputElement.oninput = function(){
            var errorElement = getParenElement(inputElement,options.form_group).querySelector(options.errorMess);
            errorElement.innerText="";
            errorElement.parentElement.classList.remove("invalid")

        }
       })
    }
} 
Validator.isRequired = function(selector,message){
    return {
        selector:selector,
        test:function(value) {
            return value.trim() ? undefined : message||"Trường này chưa được nhập"
        }
    }
}
Validator.isEmail = function(selector,message){
    return {
        selector:selector,
        test:function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)? undefined : message||"Email không hợp lệ"
        }
    }
}
Validator.isPassword = function(selector,min,message){ 
    return {
        selector:selector,
        test:function(value) {
            return value.length >= min ? undefined : message||"Nhập tối thiểu " + min +" kí tự"
        }
    }
}
Validator.isconfirmation = function(selector,getconfim,message){
    return {
        selector:selector,
        test:function(value) {
            return value===getconfim() ? undefined : message||"Giá trị nhập vào không chính xác"
        }
    }
}
