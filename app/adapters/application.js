import DS from "ember-data";

/*
 * Local Storage adaptor to store data
 */
export default DS.LSAdapter.extend({
    namespace: 'tasker',
    
    /* 'shouldBackgroundReloadRecord' below can be removed when
     * ember-data is upgraded to 2.0. Current version is 1.13.8.
     * In 1.13.8, it returns false and when a time log is added
     * to task, it won't reflect in list below it.
     */
    shouldBackgroundReloadRecord: function() {
    	return true;
    }

	/* Enable 'shouldReloadAll' commented below when upgraded
	 * to ember-data2.0 as it is will be set to return false
	 * in 2.0 when a single record is present in store.
	 * We need it to reload always to reflect the task added
	 * in selection of tasks in tasks page.
	 */

	/*shouldReloadAll: function() {
		return true;
	}*/
});