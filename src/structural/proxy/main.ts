import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('luiz', 'luizotavio');
  console.log('ISSO VAI LEVAR 2 sec');
  console.log(await user.getAddresses());
  console.log('ISSO VAI SE REPETIR');

  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
