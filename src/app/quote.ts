export class Quote {
  public showDetails: boolean;
  
  constructor (public id: number, 
    public quote: string, 
    public author: string, 
    public poster: string, 
    public datePosted: Date, 
    public upvotes: number,
    public downvotes: number){
    this.showDetails = false;
  }
}
