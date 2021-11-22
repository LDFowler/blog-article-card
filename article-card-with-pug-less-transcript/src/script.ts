class Dev {
  constructor () {
    this.getDay();
    this.getMonth();
  }
  
  getDay(): void {
    var date = new Date();
    $('.date .num').each((i, element)=>{
      $(element).text(date.getDate());
    });
  }
  getMonth(): void {
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var d = new Date();
    $('.date .month').each((i, element)=>{
      $(element).text(month[d.getMonth()]);
    });
  }
}

new Dev();