const DBPool = require("../../helper/DBPool");
const departmentService = require("../services/DepartmentService");

(async () => {
    try {
        const params = { deptno: 213 };
        let result = await departmentService.deleteItem(params);
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        DBPool.close();
    }
})();
