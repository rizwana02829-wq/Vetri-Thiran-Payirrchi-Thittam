# Field Mapping Reference

Map the **source import-set columns** to fields on your target table.

| Spreadsheet column | Example target field | Notes |
|---|---|---|
| `employee_id` | `u_employee_id` | Optional unique employee identifier |
| `first_name` | `u_first_name` | Required by the example script |
| `last_name` | `u_last_name` | May be blank |
| `email` | `u_email` | Required; normalized to lowercase |
| `department` | `u_department` | Optional department name |
| `status` | `u_status` | Defaults to `Active` in the script |

**Important:** The exact source column names depend on how ServiceNow creates the import-set table. Confirm the names in your instance and update the script if necessary. If you use a different target table, change the `target.u_...` field names accordingly.
