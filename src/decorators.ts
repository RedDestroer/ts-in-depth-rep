export function sealed(param: string) {
  console.log(`Sealed Factory: ${param}`);

  return function(target: Function): void {
    console.log(`Sealed Decorator: ${param}`);

    Object.seal(target);
    Object.seal(target.prototype);

    console.log(target);
    console.log(target.prototype);
  };
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
  const newConstructor: Function = function() {
    console.log(`Creating New Instance`);
    console.log(`Constructor Function: ${target.name}`);

    this.age = 30;
  };

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.printLibrarian = function() {
    console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
  };

  return newConstructor as TFunction;
}

export function writable(isWritable: boolean) {
  return function(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`Writable Decorator. Param: ${isWritable}`);
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);

    descriptor.writable = isWritable;

    return descriptor;
  };
}

export function timeout(ms: number = 0) {
  return function(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, ms);
    };

    return descriptor;
  };
}

export function logParameter(target: object, methodName: string, paramIndex: number) {
  console.log(target);
  console.log(methodName);
  console.log(paramIndex);

  const key = `${methodName}_decor_params_indexes`;
  if (Array.isArray(target[key])) {
    target[key].push(paramIndex);
  } else {
    target[key] = [paramIndex];
  }
}

export function logMethod(target: object, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const key = `${methodName}_decor_params_indexes`;

  descriptor.value = function(...args: any[]) {
    const indexes = target[key];

    if (Array.isArray(indexes)) {
      args.forEach((arg, index) => {
        if (indexes.includes(index)) {
          console.log(`Mehod: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`);
        }
      });
    }

    const result = originalMethod.apply(this, args);

    return result;
  };

  return descriptor;
}

function makeProperty<T>(prototype: any, propertyName: string, getTransformer: (value: any) => T, setTransformer: (value: any) => T ) {
  const values = new Map<any, T>();

  Object.defineProperty(prototype, propertyName, {
    set(firstValue: any) {
      Object.defineProperty(this, propertyName, {
        get() {
          if (getTransformer) {
            return getTransformer(values.get(this));
          } else {
            values.get(this);
          }
        },
        set(value: any) {
          if (setTransformer) {
            values.set(this, setTransformer(value));
          } else {
            values.set(this, value);
          }
        },
        enumerable: true
      });

      this[propertyName] = firstValue;
    },
    enumerable: true,
    configurable: true
  });
}

export function format(pref: string = 'Mr./Mrs.') {
 return function(target: object, propertyName: string) {

 };
}

export function positiveInteger(target: object, propertyName: string, descriptor: PropertyDescriptor) {
  const originalSet = descriptor.set;

  descriptor.set = function(value: number) {
    if (value < 1 || !Number.isInteger(value)) {
      throw new Error('Invalid value');
    }

    originalSet.call(this, value);
  };

  return descriptor;
 }