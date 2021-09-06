
var Name = document.getElementById('Name')
var CompanyName = document.getElementById('CompanyName')
var Email = document.getElementById('Email')
var PhoneNo = document.getElementById('PhoneNo')
var Address = document.getElementById('Address')
var comments = document.getElementById('comments')


function check() {
    
   
    
    

    
    if (document.getElementById("Name").value.length === 0) {
        
        document.getElementById("Name").focus();
        alert("Name Must be filled")
        return false
    }
    if (document.getElementById("CompanyName").value.length === 0) {
        
        document.getElementById("CompanyName").focus();
        alert("CompanyName Must be filled")
        return false
    }
     if (Email.value.indexOf(".") - Email.value.indexOf("@") < 2 ||
    Email.value.indexOf(".") > Email.value.length - 3) {
        
        document.getElementById("Email").focus();
        alert("Email Must be filled correctly")
        return false
    }
    if (document.getElementById("PhoneNo").value.length === 0 || document.getElementById("PhoneNo").value.length >  11 ||document.getElementById("PhoneNo").value.length < 11 ) {
        
        document.getElementById("PhoneNo").focus();
        alert("PhoneNo Must be filled correctly")
        return false
    }
    
    if (document.getElementById("Address").value.length === 0) {
        
        document.getElementById("Address").focus();
        alert("Address Must be filled")
        return false
    }
    console.log(Name.value)
    
    Name.value = ""
    CompanyName.value = ""
    Email.value = ""
    PhoneNo.value = ""
    Address.value = ""
    comments.value = ""
}
