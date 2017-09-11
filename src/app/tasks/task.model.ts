export class Task {
  _id?: string;
  title : string;
  status : string;

  constructor(title, status="pending") {
    this.title = title;
    this.status = status;
  }
}
