import postgress from 'pg';
const {Pool} = postgress;

const connection = new Pool({
    host:       'localhost',
    user:       'postgres',
    password:   'qu3t31mp0rt4',
    database:   'financeapi',
    port:       5432
})

export default connection