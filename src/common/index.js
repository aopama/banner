/**
 * 对象转formData
 * @param {Obj} params
 * @returns FormData
 */
export function To_formData(params) {
    const formData = new FormData();
    Object.keys(params).forEach((key) => {
        //判断是否为数组
        if (params[key] instanceof Array) {
            for (var i = 0; i < params[key].length; i++) {
                formData.append(key + '[]', params[key][i]);
            }
        } else {
            formData.append(key, params[key]);
        }
    });
    return formData;
}











