import * as Interfaces from '../interfaces';
import { sealed, logger, writable, logParameter, logMethod } from '../decorators';

@sealed('UnversityLabrarian')
@logger
class UnversityLabrarian implements Interfaces.Librarian {
  name: string;
  email: string;
  department: string;

  @logMethod
  assistCustomer(@logParameter custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }

  @writable(true)
  assistFaculty(): void {
    console.log('Assisting faculty');
  }

  @writable(false)
  teachComunity(): void {
    console.log('Teaching community');
  }
}

export { UnversityLabrarian };