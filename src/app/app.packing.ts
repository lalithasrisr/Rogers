import { Component, Input } from '@angular/core';
//import  { FilterPipe } from './filter.pipe';


@Component({
    selector: 'app-packing',
    templateUrl: './app.packing.html',
    styleUrls: [
        '../assets/bootstrap/css/bootstrap.min.css',
        './main.css'
   
 ]
})

export class PackingComponent {
    task = {
        name: ''
      };
      tasks = [];
      untasks = [];
  
      onClick(){
        
          this.tasks.push({name: this.task.name});
               
        this.task = {
          name: ''
        };
      }

      onUnPackDelete(item){
        for(var i = 0;i < this.tasks.length; i++){
          if(item.name == this.tasks[i].name){
            this.tasks.splice(i,1);
            break;
          }
        }
      }

      onPackDelete(item){
        for(var i = 0;i < this.tasks.length; i++){
          if(item.name == this.untasks[i].name){
            this.untasks.splice(i,1);
            break;
          }
        }
      }

      onUnpack(item){
        for(var i = 0;i < this.tasks.length; i++){
          if(item.name == this.tasks[i].name){
            this.untasks.push({name: this.tasks[i].name});
            this.tasks.splice(i,1);
            break;
          }
        }
      }

      onPack(item){
        for(var i = 0;i < this.untasks.length; i++){
          if(item.name == this.untasks[i].name){
            this.tasks.push({name: this.untasks[i].name});
            this.untasks.splice(i,1);
            break;
          }
        }
      }

      onMarkUnpacked()
      {
        for(var i = 0;i < this.untasks.length; i++){
              this.tasks.push({name: this.untasks[i].name});
            }
            this.untasks.length=0;
        }

    }