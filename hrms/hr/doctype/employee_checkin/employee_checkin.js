// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Employee Checkin", {
	refresh: async (frm) => {
<<<<<<< HEAD
=======
		if (frm.doc.offshift) {
			frm.dashboard.set_headline(
				__(
					"This check-in is outside assigned shift hours and will not be considered for attendance. If a shift is assigned, adjust its time window and Fetch Shift again.",
				),
			);
		}
>>>>>>> 2dac303e (refactor: changed "invalid" status to "offshift" for better readability)
		if (!frm.doc.__islocal) frm.trigger("add_fetch_shift_button");
	},

	add_fetch_shift_button(frm) {
		if (frm.doc.attendace) return;
		frm.add_custom_button(__("Fetch Shift"), function () {
			frappe.call({
				method: "fetch_shift",
				doc: frm.doc,
				freeze: true,
				freeze_message: __("Fetching Shift"),
				callback: function () {
					if (frm.doc.shift) {
						frappe.show_alert({
							message: __("Shift has been successfully updated to {0}.", [
								frm.doc.shift,
							]),
							indicator: "green",
						});
						frm.dirty();
						frm.save();
					} else {
						frappe.show_alert({
							message: __("No valid shift found for log time"),
							indicator: "orange",
						});
					}
				},
			});
		});
	},
});
