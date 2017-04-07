
// const env = process.env.NODE_ENV;

export function log () {
  // if (env !== 'development') {
  //   return null;
  // }

  const api = () => {
    return {
      json: logJson.bind(this)
    };
  };

  if (arguments.length === 0) {
    return new api(true);
  }

  const line = '================';

  console.log(line);

  console.log('-- Familiar Log');

  for (let i = 0; i < arguments.length; i++) {
    console.log(line);
    console.log(arguments[i]);
  }

  console.log('');

  return new api();
}

export function logJson () {
  // if (env !== 'development') {
  //   return null;
  // }

  if (arguments.length === 0) {
    return;
  }

  for (let i = 0; i < arguments.length; i++) {
    const data = JSON.stringify(arguments[i], null, 2);

    console.log(data);
    console.log('');
  }
}
