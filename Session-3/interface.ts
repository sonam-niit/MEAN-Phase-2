interface Bank
{
    accountNo:number;
    accHolderName:string;
    balance:number;

    withdraw(amount:number):boolean;
    deposit(amount:number):boolean;
}
class ICICI implements Bank{
    accountNo: number;
    accHolderName: string;
    balance: number;
    constructor(accountNo: number,accHolderName: string,balance: number)
    {
        this.accountNo=accountNo;
        this.accHolderName=accHolderName;
        this.balance=balance;
    }
    withdraw(amount: number): boolean {
        if(this.balance<amount)
            return false;
        else{
            this.balance=this.balance-amount;
            return true;
        }
            
    }
    deposit(amount: number): boolean {
        this.balance=this.balance+amount;
        return true;
    }
    
}

var user1= new ICICI(872163123,"Sonam Soni",73643);
console.log(user1.deposit(1000));
console.log(user1.withdraw(89000));
