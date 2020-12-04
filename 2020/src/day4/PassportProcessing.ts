import Axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const Required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const EyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

function validate(key: string, value: string): boolean {
  switch (key) {
    case 'byr': {
      // byr (Birth Year) - four digits; at least 1920 and at most 2002.
      return !Number.isNaN(value) && +value <= 2002 && +value >= 1920;
    }
    case 'iyr': {
      // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
      return !Number.isNaN(value) && +value <= 2020 && +value >= 2010;
    }
    case 'eyr': {
      // eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
      return !Number.isNaN(value) && +value <= 2030 && +value >= 2020;
    }
    case 'hgt': {
      // hgt (Height) - a number followed by either cm or in:
      const regEx = /(^([0-9]+)(in|cm)$)/;
      const res = regEx.exec(value);
      let match = false;
      if (res) {
        const height = res[2];
        const unit = res[3];
        if (unit === 'cm') {
          // If cm, the number must be at least 150 and at most 193.
          match = !Number.isNaN(height) && +height >= 150 && +height <= 193;
        } else if (unit === 'in') {
          // If in, the number must be at least 59 and at most 76.
          match = !Number.isNaN(height) && +height >= 59 && +height <= 76;
        }
      }
      return match;
    }
    case 'hcl': {
      // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
      const regEx = /(#)([0-9a-f]{6}$)/;
      return regEx.test(value);
    }
    case 'ecl': {
      // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
      return EyeColors.includes(value);
    }
    case 'pid': {
      // pid (Passport ID) - a nine-digit number, including leading zeroes.
      const regex = /[0-9]{9}/;
      return value.length === 9 && regex.test(value);
    }
    default:
      throw new Error('Mjep');
  }
}

async function main() {
  let res;
  try {
    res = await Axios.get('https://adventofcode.com/2020/day/4/input', {
      headers: {
        Cookie: `session=${process.env.SESSION}`,
      },
      withCredentials: true,
    });
  } catch (err) {
    throw new Error('When making request:' + err);
  }
  if (!res?.data) throw new Error('Result was falsy');

  const passports: Array<string> = res.data.split('\n\n');
  const valid = passports
    .map((pass) => pass.split('\n').join(' '))
    .filter((pass) => {
      const fields = pass.split(' ');
      if (fields.length < 7) return false;
      let requiredFields = 0;
      fields.forEach((field) => {
        const [key, value] = field.split(':');

        if (Required.includes(key) && validate(key, value)) requiredFields++;
      });
      return requiredFields === 7;
    });
  console.info(valid.length);
}

process.env.NODE_ENV === 'test' ? null : main();
