# Import Data Using Transform Maps (Spreadsheets) — ServiceNow

This sample project demonstrates how to import spreadsheet data into a ServiceNow table using **Import Sets** and **Transform Maps**.

> Note: Transform Maps are configured inside ServiceNow; they are not run as a standalone Python/JavaScript program. The script below is an example **Transform Map Script** to paste into ServiceNow.

## Project files

- `sample_import_data.csv` — sample spreadsheet data (open it in Excel or Google Sheets).
- `transform_map_script.js` — example `onBefore` Transform Map script.
- `field_mapping.md` — suggested source-to-target field mappings.

## Steps in ServiceNow

1. Save `sample_import_data.csv` and open it in Excel if you want to edit it.
2. In ServiceNow, navigate to **System Import Sets > Load Data**.
3. Create a new Import Set table and upload the CSV/XLSX spreadsheet.
4. Choose **Create transform map** after loading the data, or navigate to **System Import Sets > Transform Maps**.
5. Select the import set table as the source and your target table (for example, `sys_user` or a custom table) as the target.
6. Create field maps according to `field_mapping.md`. For a first test, use a custom target table with fields matching the sample columns.
7. Add the sample script from `transform_map_script.js` to the Transform Map's **onBefore** script field.
8. Run **Transform** and review the transform history/logs. Test with a small sample before importing real data.

## What the example script does

- Trims whitespace from text fields.
- Normalizes email addresses to lowercase.
- Skips rows that do not have a name or email.
- Sets a default status when the spreadsheet's status is blank.

## Suggested target table fields

For a beginner project, create a custom table such as `u_training_import_demo` with fields:

- `u_employee_id` (String)
- `u_first_name` (String)
- `u_last_name` (String)
- `u_email` (Email or String)
- `u_department` (String)
- `u_status` (String)

Map the CSV source columns to these fields. Adjust the target field names in the script to match your own table.

## GitHub upload

1. Create a GitHub repository, for example `servicenow-transform-map-import`.
2. Upload the files in this folder, or upload the ZIP contents.
3. Add screenshots of your ServiceNow Import Set, Transform Map, field maps, and transform results if this is a coursework project. Do not upload real personal or confidential data.
