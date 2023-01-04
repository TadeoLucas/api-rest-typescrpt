
function makeid(length: number): string {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const randomkeyMaker = (): string => {
  const key = makeid(3);
  const key2 = makeid(3);
  
  return key + '-' + key2
}

export default randomkeyMaker