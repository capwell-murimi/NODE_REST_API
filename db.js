const Pool = require('pg').Pool;

const pool = new Pool({
    user: "students_u0x8_user",
    host: "cvgl0oqqgecs739gf430-a.oregon-postgres.render.com",
    database: "students_u0x8",
    password: "aIngur7lkKiF4nQX9Ov589Ak1Xlyxt3W",
    port: 5432,
});


module.exports = pool;
