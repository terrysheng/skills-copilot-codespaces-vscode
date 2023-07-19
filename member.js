function skillsMember()
{
    var member = document.getElementById("member").value;
    var memberError = document.getElementById("memberError");
    var memberRegExp = /^[a-zA-Z0-9]{2,30}$/;
    if(member == "")
    {
        memberError.innerHTML = "This field is required";
        return false;
    }
    else if(!memberRegExp.test(member))
    {
        memberError.innerHTML = "Please enter a valid member name";
        return false;
    }
    else
    {
        memberError.innerHTML = "";
        return true;
    }
}