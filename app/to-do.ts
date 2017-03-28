class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string){}

  markDone(){
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes', 'medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));

tasks[0].markDone();

//of versus in. of displays the object. in might display index position
for(var task of tasks){
  console.log(task);
}
