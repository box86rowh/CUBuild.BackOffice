import { Loan } from "./loan";
import { Name } from "./name";
import { Share } from "./share";

export interface Account{
    MemberNumber: string;
    Prime: Name;
    Shares: Share[];
    Loans: Loan[];
}