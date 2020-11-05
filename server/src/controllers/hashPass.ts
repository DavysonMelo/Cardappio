import bcrypt from 'bcrypt';

async function hashPass(pass: string) {
  try {
    const hash = await bcrypt.hash(pass, 10);
    return hash;
  } catch (error) {
    console.log(error);
  }
}

export default hashPass;
