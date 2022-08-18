interface ICreateUserDTO {
  name: string;
  password: string;
  driver_license: string;
  email: string;
  id?: string;
  avatar?: string;
}

export { ICreateUserDTO };
