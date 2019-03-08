import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args){
      return value;
    }else{
      args=args.toLowerCase();
    }
    return value.filter(items=>{
          return items.name.toLocaleLowerCase().indexOf(args) != -1; 
    })
  }

}
