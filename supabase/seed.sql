-- supabase/seed.sql

-- Enable RLS on all tables
ALTER TABLE "SchoolDivision" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "AcademicSession" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Term" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Staff" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Class" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Subject" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ClassSubject" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Student" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "ParentGuardian" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "StudentParent" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Result" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "LessonNote" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Assignment" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "AssignmentSubmission" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "CbtExam" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "CbtQuestion" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "CbtOption" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "CbtAttempt" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "CbtAnswer" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "FeeSchedule" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "StudentFee" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Payment" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Notification" ENABLE ROW LEVEL SECURITY;

-- Students can only see their own records (Example: Results)
CREATE POLICY "student_own_results" ON "Result"
  FOR SELECT USING (
    auth.uid()::text = (SELECT "userId" FROM "Student" WHERE id = "studentId")
  );

-- Students can only see their own attempts
CREATE POLICY "student_own_attempts" ON "CbtAttempt"
  FOR ALL USING (
    auth.uid()::text = (SELECT "userId" FROM "Student" WHERE id = "studentId")
  );

-- Class teachers see only their class's data (Example: Results)
CREATE POLICY "class_teacher_results" ON "Result"
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM "Class"
      WHERE "Class".id = "Result"."classId"
      AND "Class"."classTeacherId" = (
        SELECT id FROM "Staff" WHERE "userId" = auth.uid()::text
      )
    )
  );

-- Parents see only their linked children's data (Example: Results)
CREATE POLICY "parent_child_results" ON "Result"
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM "StudentParent" sp
      JOIN "ParentGuardian" p ON p.id = sp."parentId"
      WHERE sp."studentId" = "Result"."studentId"
      AND p."userId" = auth.uid()::text
    )
  );

-- Bursar can only read/write financial tables
CREATE POLICY "bursar_financials" ON "Payment"
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM "Staff"
      WHERE "userId" = auth.uid()::text AND role = 'BURSAR'
    )
  );

-- Admin & Super Admin have full access (Template)
CREATE POLICY "admin_all_access" ON "Result"
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM "Staff"
      WHERE "userId" = auth.uid()::text AND role IN ('ADMIN', 'SUPER_ADMIN')
    )
  );
