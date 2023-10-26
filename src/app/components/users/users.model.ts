export interface UsersModel {
  id: number,
  name: string,
  lastName: string,
  active?: boolean,
  grades: number,
  age: number,
  fees?: number
}

export interface Data {
  students: UsersModel[];
}

export interface Todos {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}