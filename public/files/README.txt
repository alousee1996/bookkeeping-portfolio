PUT YOUR DOWNLOADABLE FILES IN THIS FOLDER
==========================================

Anything you drop here is served from the site root.
A file saved as:      public/files/my-resume.pdf
is reachable at:      /files/my-resume.pdf

The site currently expects these exact filenames. Rename your
files to match, OR change the paths in src/lib/data.ts.

RESUME  (referenced by RESUME_FILE in src/lib/data.ts)
------------------------------------------------------
  andrea-casuncad-resume.pdf

CERTIFICATES  (referenced by CERTIFICATIONS[].file)
These OPEN IN A NEW TAB for viewing - they are not downloaded.
Use PDF or JPG so browsers can display them inline.
------------------------------------------------------
  intuit-certified-bookkeeping-professional.pdf
  qbo-proadvisor-level-1.pdf
  qbo-proadvisor-level-2.pdf
  us-bookkeeping-certificate.pdf

SAMPLE WORK  (referenced by PROJECTS[].downloads)
------------------------------------------------------
  full-accounting-cycle-case-study.pdf
  excel-bookkeeping-template.xlsx

TIPS
------------------------------------------------------
- Use lowercase names with hyphens. No spaces.
- Keep PDFs under ~2 MB so pages stay fast.
- Set a certificate's `file` to "" to hide its View link.
- REMOVE any real client names/numbers before uploading.
  Replace them with a sample company (e.g. "Northline Services LLC").
