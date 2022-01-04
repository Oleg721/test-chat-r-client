export interface Message<T> {
  userId: T
  userName: string
  date: Date;
  text: string;
}
