-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "previewImage" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "githubColor" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
