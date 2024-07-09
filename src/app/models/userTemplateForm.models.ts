export interface Adress{

    city : string;
    street : string;
    postalCode : string;
  }

  export interface credentials{

    userMail : string;
    userPassword : string;
  }
  
   export interface User {
  
      userName : string;
      userLog : credentials;
      userAddress : Adress;
    }