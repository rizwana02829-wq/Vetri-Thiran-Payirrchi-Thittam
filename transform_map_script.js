/*
 * ServiceNow Transform Map Script — onBefore
 *
 * Paste this into the Transform Map's "onBefore" script field.
 * Source columns must match the names used below.
 * Target field names are examples; update them for your target table.
 */

(function runTransformScript(source, map, log, target) {
    // Normalize source values.
    var firstName = (source.first_name || '').toString().trim();
    var lastName = (source.last_name || '').toString().trim();
    var email = (source.email || '').toString().trim().toLowerCase();
    var department = (source.department || '').toString().trim();
    var status = (source.status || '').toString().trim();

    // Skip incomplete rows.
    if (!firstName || !email) {
        log.warn('Skipping row: first_name or email is missing.');
        ignore = true;
        return;
    }

    // Assign cleaned values to the target record.
    target.u_first_name = firstName;
    target.u_last_name = lastName;
    target.u_email = email;
    target.u_department = department;
    target.u_status = status || 'Active';

    // Optional: copy employee ID if the source column exists.
    if (source.employee_id) {
        target.u_employee_id = source.employee_id.toString().trim();
    }
})(source, map, log, target);
