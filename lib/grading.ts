/**
 * lib/grading.ts
 * Implementation of the NERDC (Nigerian Educational Research and Development Council) 
 * standard grading system for Tamara's Fairview.
 */

export interface GradeResult {
  grade: string;
  remark: string;
}

export type SubjectScore = {
  ca1: number; // max 10
  ca2: number; // max 10
  ca3: number; // max 10
  exam: number; // max 70
};

/**
 * Calculates grade and remark based on the total score (max 100)
 */
export function getNERDCGrade(score: number): GradeResult {
  if (score >= 75) return { grade: "A", remark: "Excellent" };
  if (score >= 65) return { grade: "B", remark: "Very Good" };
  if (score >= 55) return { grade: "C", remark: "Good" };
  if (score >= 45) return { grade: "D", remark: "Fair" };
  if (score >= 40) return { grade: "E", remark: "Pass" };
  return { grade: "F", remark: "Fail" };
}

/**
 * Validates and Calculates total score from the Nigerian 4-part assessment model
 */
export function calculateTotalScore(scores: Partial<SubjectScore>): number {
  const { ca1 = 0, ca2 = 0, ca3 = 0, exam = 0 } = scores;
  
  // Cap values at their specific NERDC limits
  const safeCa1 = Math.min(Math.max(0, ca1), 10);
  const safeCa2 = Math.min(Math.max(0, ca2), 10);
  const safeCa3 = Math.min(Math.max(0, ca3), 10);
  const safeExam = Math.min(Math.max(0, exam), 70);

  return Number((safeCa1 + safeCa2 + safeCa3 + safeExam).toFixed(2));
}

/**
 * Returns color classes based on the grade for UI badges
 */
export function getGradeColor(grade: string): string {
  switch (grade) {
    case "A": return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "B": return "bg-blue-100 text-blue-700 border-blue-200";
    case "C": return "bg-sky-100 text-sky-700 border-sky-200";
    case "D": return "bg-amber-100 text-amber-700 border-amber-200";
    case "E": return "bg-orange-100 text-orange-700 border-orange-200";
    case "F": return "bg-rose-100 text-rose-700 border-rose-200";
    default: return "bg-slate-100 text-slate-700 border-slate-200";
  }
}
