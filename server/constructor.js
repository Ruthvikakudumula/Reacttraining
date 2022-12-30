let employees=[]
let arr=[
    'QEESrdh', 'dgeoOhh', 'CQGbdOe', 'nZSFRHx',
    'NkyGZNh', 'htWZpfg', 'yKHlEwN', 'dJOgvsv',
    'vDylvRp', 'OEBPxou', 'LeTzqVn', 'lxtkSTR',
    'fumsfTU', 'MgGavgT', 'BOcxLaR', 'vpCfgJT',
    'yvXJutE', 'KJVKTEB', 'gUsLbOu', 'bxWRsPJ',
    'xGuLSoA', 'JhzxlLw', 'qAEqFKQ', 'goxmWKv',
    'VcsdIIC', 'CTfFwLM', 'VoOWTTJ', 'DQGLdIi',
    'TKmPvnR', 'wMCUhmT', 'KxwPwBH', 'FTyuLqO',
    'pVQSAHt', 'mrUCQME', 'KeCzbeA', 'KkJVRxn',
    'ilZsThS', 'NbDzPAK', 'GQoxlBH', 'TTTiclk',
    'sAwzluT', 'qNsgmen', 'nzonRyg', 'uTwTsmc',
    'odPQbNe', 'DmuGZAZ', 'TrlzZrA', 'ZIlbHFl',
    'PBQiluU'

]


function Employee( id, name, isActive){
    this.id = id;
    this.name = name;
    this.isActive = isActive;
}
let id=100
for(let i=0;i<arr.length;i++){

    let emp=new Employee(id+i,arr[i],true)
  employees.push(emp)
}
console.log(employees)