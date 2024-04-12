export type User = {
    email:string;
    firstname:string;
    lastname:string;
    mobile:string;
    imageUrl:string;
    isAuthenticated:boolean;
    username:string;
}

export type  signUpFormProps = {
    email:string;
    firstname:string;
    lastname:string;
    mobilenumber:string;
    password:string;
   }