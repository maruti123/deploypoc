 var incomingUsername = context.getVariable ("username");
 var incomingPwd = context.getVariable ("pwd");
 var pwdFromKVM = context.getVariable("private.pwdFromKVM");
 var validUser = true;
 if(incomingPwd != pwdFromKVM){
     validUser = false;
 }
 context.setVariable("validUser",validUser);