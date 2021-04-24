
function render(template, data) {
    const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
    if (reg.test(template)) { // 判断模板里是否有模板字符串
        const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
        template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
        return render(template, data); // 递归的渲染并返回渲染后的结构
    }
    return template; // 如果模板没有模板字符串直接返回
}

let template = '我是{{name}}，职业{{job}}，工资{{salary}}';
let person = {
    name: '阿巴',
    job: '前端',
    salary:30000
}
console.log(render(template, person)); // 我是阿巴，职业前端，工资30000

