export interface IUser {
    UserName: string;
    FirstName: string;
    LastName: string;
    Password: string;
    Location?: string;
    IsActive?: boolean;
    State?: string;
    Country?: string;
    Email?: string;
    MobileNum: string | number;
    Created_date?: Date
}
