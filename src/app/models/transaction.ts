export interface Transaction{
    Amount: number;
    Description: string;
    Sequence: string;
    IsFee: boolean;
    PostDate: Date;
    PostTime: string;
}