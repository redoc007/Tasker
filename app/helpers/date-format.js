/*
 * Function to return local date string for a date
 */

export default function(date) {
	return (new Date(date)).toLocaleDateString();
}