/**
 * lib/id-generator.ts
 */

export function generateStudentId(year: number = new Date().getFullYear()): string {
  const random = Math.floor(1000 + Math.random() * 9000);
  return `TF/${year}/${random}`;
}

export function generateStaffId(deptCode: string = "STA"): string {
  const random = Math.floor(100 + Math.random() * 900);
  return `TF/${deptCode}/${random}`;
}

export function generateTempPassword(name: string): string {
  // Logic: First name + Year + !
  const firstName = name.split(' ')[0].toLowerCase();
  const year = new Date().getFullYear();
  return `${firstName}${year}!`;
}
