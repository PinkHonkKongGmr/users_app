export type UserCompanyFromApi = {
    bs: string,
    catchPhrase: string,
    name: string,
}

export type Geo = {
    lat: string,
    lng: string
}

export type UserAdressFromApi = {
    city: string,
    geo: Geo,
    street: string,
    suite: string,
    zipcode: string,
}


export type UserAdress = Pick<UserAdressFromApi, "city" | "street">

export type UserBase = {
    name?: string,
    phone?: string,
    email?: string
}

export type UserBaseExtended = UserBase & {
    id: number,
    username?: string,
    website?: string,
}

export type UsersFromApi = UserBaseExtended & {
    company?: UserCompanyFromApi,
    address?: UserAdressFromApi
}

export type User = Pick<UserBaseExtended, "name" | "phone" | "email" | "id">




