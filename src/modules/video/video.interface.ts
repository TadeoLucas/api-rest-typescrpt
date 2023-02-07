

export interface VideoI {
  id: string;
  title?: string;
  comments?: string;
  url: string
}


export type VideoI2 = Omit<VideoI, "id" >

export type VideoI3 = Omit<VideoI, "url" >

//export type UserI2 = Pick<UserI, "account_name" | "firstName" | "lastName" | "email">
